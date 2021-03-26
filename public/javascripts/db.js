const { MongoClient } = require("mongodb");
const mongodb = require('mongodb');
const url = "mongodb+srv://telles:R4r3tVkJCAckQy@cluster0.q2lss.mongodb.net/db_sigtiba?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
dbName = "db_sigtiba";
const fs = require('fs');
const { ObjectId } = require("mongodb");
const assert = require('assert');
const registrosFile = require('../data/Registros_16');

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
  async findHistoricalRegister() {
    try {
      this.client = await client.connect();
      console.log("Connected correctly to server");
      const db = this.client.db(dbName);
      const col = this.client.db(dbName).collection('registers');
      const photos = this.client.db(dbName).collection('photos.files');
      const bucket = new mongodb.GridFSBucket(db, {
        bucketName: 'photos'
      });
      var doc;
      var fileName = [];
      var query = { type: "Histórico", isTemporary: false }
      var numberDoc = await col.count(query);
      var historicalCollection = await col.find(query).toArray();
      var fileId = await col.distinct('image_id', query);
      console.log(fileId);
      for (var i = 0; i < numberDoc; i++) {
        fileName[i] = (await photos.distinct('filename', { _id: ObjectId(fileId[i]) })).toString();
        console.log(fileName[i]);
        bucket.openDownloadStreamByName(fileName[i])
          .pipe(fs.createWriteStream("./public/images/photos/" + fileName[i]))
          .on('error', function (error) {
            assert.ifError(error);
          }).on('end', function (img) {
            process.exit(0);
          });
      }
      return doc = {
        historicalCollection: historicalCollection,
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
      var queryId = { _id: idRegister };
      const fieldName = "image_id";
      const registers = this.client.db(dbName).collection('registers');
      fileId = (await registers.distinct(fieldName, queryId)).toString();
      await registers.deleteOne({ _id: idRegister }).then(function (result) {
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

  async updateRegister(id) {
    try {
      this.client = await client.connect();
      console.log("Connected correctly to server");
      const db = this.client.db(dbName);
      var idRegister = ObjectId(id);
      var query = { _id: idRegister };
      db.collection('registers').updateOne(query, { $set: { isTemporary: false } }, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
      });
      var register = await db.collection('registers').find({ _id: idRegister }).toArray();
      var idImage = ObjectId(register[0].image_id);
      var file = await db.collection('photos.files').find({ _id: idImage }).project({ _id: 0, filename: 1 }).toArray();
      var fileName = file[0].filename;
      var description = register[0].description;
      var adress = register[0].adress;
      var category = register[0].type;
      var subCategory = register[0].sub_type;
      var coord = register[0].coord;
      var author = register[0].author;
      var date = Intl.DateTimeFormat('pt-BR').format(register[0].date);

      var registers = registrosFile.registros.features;
      var registerMap =
      {
        type: "Feature",
        properties: {
          Name: fileName,
          Date: date,
          Lon: null,
          Lat: null,
          Altitude: null,
          North: null,
          Azimuth: null,
          "Camera Mak": null,
          "Camera Mod": null,
          Title: null,
          Comment: null,
          Path: null,
          RelPath: "./images/photos/" + fileName,
          Timestamp: null,
          fonte: author,
          endereco: adress,
          ano_foto: 2019.0,
          categoria: category,
          descricao:
            description,
          IDregistro: id,
          subcategor: subCategory,
        },
        geometry: {
          type: "Point",
          coordinates: coord,
        },
      };
      registers.push(registerMap);
      console.log(registers);
      return registers;      
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
module.exports = {connectionClass};

