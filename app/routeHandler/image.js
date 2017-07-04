let formidable = require('express-formidable'),
    mime = require('mime-types'),
    fs = require('fs'),
    Images = require('../collections/images'),
    Image = require('../models/image');


exports.upload = function(req, res){
  let type = req.files.file.type;
  if (type == "image/png" || type == "image/jpeg" || type == "image/gif"){
    let newPath = './public/uploads/' + req.files.file.name;
    fs.rename(req.files.file.path, newPath, function() {
      Image.forge({
        path: newPath.replace("./public/", "http://localhost:8080/"),
        name: req.files.file.name
      })
      .save()
      .then(function(image) {
        res.json({error: false, message: "image uploaded"});
      })
      .catch(function (err) {
        res.status(500).json({error: true, message: err.message});
      });
    });
  }else{
    fs.unlink(req.files.file.path, function(err){
      if (err) console.log('ERROR: ' + err);
      res.json({error : false, message : 'invalid file format'})
    });
  }
};

exports.list = function(req, res){
  Images.forge()
  .fetch()
  .then(function (collection) {
    if(collection){
      res.json({error: false, data: collection.toJSON()});
    }
  })
  .catch(function (err) {
    console.log(err);
    res.status(500).json({error: true, data: {message: err.message}});
  });
};

exports.delete = function(req, res){
  Image.forge({id : req.params.id})
  .destroy()
  .then(function(image) {
    res.json({error: false, data: "image deleted !"});
  })
  .catch(function (err) {
    res.status(500).json({error: true, data: {message: err.message}});
  });
};
