const express = require('express');
const router = express.Router();
const _db = require("../public/javascripts/db");
const db = new _db.connectionClass;
const multer = require("multer");
const GridFsStorage = require('multer-gridfs-storage');
const mongodb = require('mongodb');
const assert = require('assert');
const fs = require('fs');
const { ObjectId } = require("mongodb");
const path = require('path');


const storage = new GridFsStorage({
  url: "mongodb+srv://telles:R4r3tVkJCAckQy@cluster0.q2lss.mongodb.net/db_sigtiba?retryWrites=true&w=majority",
  options: { useUnifiedTopology: true },
  file: (req, file) => {
    var filename = Date.now();
    if (file.mimetype === 'image/jpeg') {
      filename = filename + '.jpg';
    } else if (file.mimetype === 'image/png') {
      filename = filename + '.png';
    }

    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      return {
        bucketName: 'photos',
        filename: filename
      };
    } else {
      return null;
    }
  }


});

const upload = multer({ storage });

/* GET home page. */
router.get('/', function (req, res, next) {

})

router.get('/login', function (req, res) {
  res.redirect('login.html');
});

router.get('/login_cadastro', function (req, res) {
  res.redirect('login_cadastro.html');
});

router.post('/javascripts/db.js', function (req, res, next) {
  user = JSON.parse(JSON.stringify(req.body));
  db.insertUser(user);
})

router.post('/images/photos', upload.single('image'), function (req, res, next) {
  var register = req.body;

  var dateSplit = register['date'].split('-');
  register = JSON.parse(JSON.stringify(Object.assign(register, { image_id: req.file['id'], isTemporary: true })));;
  register['date'] = new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2]);

  db.insertTempRegister(register).then(function (result) {
    console.log('Registro salvo!')
    db.client.close();
  });

  res.json({ success: true });

})



router.post('/tela_admin.html', function (req, res, next) {
  db.findTempRegister().then(function (doc) {
    res.send({
      tempCollection: doc.tempCollection,
      numberDoc: doc.numberDoc,
      fileName: doc.fileName,
      success: true
    });
  })

})

router.post('/registers/update', function (req, res, next) {
  var id = req.body.id;
  db.updateRegister(id).then(() => res.send({ success: true }));
});

router.post('/delete', function (req, res, next) {
  var idRegister = req.body.id;

  console.log('id do registro: ' + idRegister);
  
  db.deleteRegister(idRegister).then(() => res.send({ success: true }))
});

router.post('/passwords', function (req, res, next) {
  db.findPassword().then(function (password) {
    res.send({
      password: password,
      success: true
    });
  });
});
module.exports = router;

