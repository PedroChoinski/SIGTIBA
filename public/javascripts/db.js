const { MongoClient } = require("mongodb");
const mongodb = require('mongodb');
const url = "mongodb+srv://telles:R4r3tVkJCAckQy@cluster0.q2lss.mongodb.net/db_sigtiba?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
dbName = "db_sigtiba";
const fs = require('fs');
const { ObjectId } = require("mongodb");
const assert = require('assert');

class connectionClass {

  async insertUser(user) {
    try {
      this.client = await client.connect();
      console.log("Connected correctly to server");
      const db = this.client.db(dbName);

      const collection = this.client.db(dbName).collection('users');
      const response = await collection.insertOne(user);
      console.log("inserido o ", response);
      this.client.close();
    } catch (error) {
      console.log(error);
    }
  }

  //create temporary register
  async insertTempRegister(register) {
    try {
      this.client = await client.connect();
      console.log("Connected correctly to server");
      const db = this.client.db(dbName);

      await this.client.db(dbName).collection('registers').insertOne(register);

    } catch (error) {
      console.log(error);
    }
  }

  //find temporary registers (text) and the number of docs
  async findTempRegister() {
    try {
      this.client = await client.connect();
      console.log("Connected correctly to server");
      const db = this.client.db(dbName);
      const col = this.client.db(dbName).collection('registers');
      const bucket = new mongodb.GridFSBucket(db, {
        bucketName: 'photos'
      });
      var docs;
      var docsId, doc, fileName = [];

      var numberDoc = await col.count({ isTemporary: true });
      console.log(numberDoc);
      var tempCollection = await col.find({ isTemporary: true }).toArray();
      docsId = await col.find({ isTemporary: true }).project({ _id: 0, image_id: 1 }).toArray();

      // //get name of the file based on "id_image" field in collection "registers" 
      for (var i = 0; i < numberDoc; i++) {
        var docsSplitted = (JSON.stringify(docsId[i])).split('"');
        var idSingleDoc = (docsSplitted[3]);
        var fileNamesObj = await bucket.find(ObjectId(idSingleDoc)).project({ _id: 1, filename: 1 }).toArray();
        var fileNamesSplitted = (JSON.stringify(fileNamesObj)).split('"');
        fileName[i] = fileNamesSplitted[7];
        bucket.openDownloadStreamByName(fileName[i])
          .pipe(fs.createWriteStream("./public/images/photos/" + fileName[i]))
          .on('error', function (error) {
            assert.ifError(error);
          }).on('end', function (img) {
            process.exit(0);
          });
        fileName = fileName;
      }
      return doc = {
        tempCollection: tempCollection,
        numberDoc: numberDoc,
        fileName: fileName
      }

    } catch (error) {
      console.log("Error with data: ", error);
    }
  }

  async deleteRegister(id) {
    try {
      this.client = await client.connect();
      console.log("Connected correctly to server");
      const db = this.client.db(dbName);
      const bucket = new mongodb.GridFSBucket(db, {
        bucketName: 'photos'
      });
      var fileId;
      var idRegister = ObjectId(id);
      var queryId = {_id : idRegister};
      const fieldName = "image_id";
      const registers = this.client.db(dbName).collection('registers');
      fileId = (await registers.distinct(fieldName, queryId)).toString();
      await registers.deleteOne({_id : idRegister}).then(function(result){
        console.log('Registro deletado!');
      }, (error) => console.log(error));
      await bucket.delete(ObjectId(fileId)).then(function (result) {
        console.log('Imagem deletada! ');
      }, (error) => console.log(error));
      this.client.close();
    } catch (error) {
      console.log(error);
    }
  }

  async findPassword() {
    try {
      this.client = await client.connect();
      console.log("Connected correctly to server");
      const db = this.client.db(dbName);
      var password = [];
      await this.client.db(dbName).collection('users').find().forEach(function (document) { password.push(document.password) })
      console.log(password);

      return password;
    } catch (error) {
      console.log("Error with data: ", error);
    }
  };

}
module.exports = { connectionClass };

