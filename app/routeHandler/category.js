let express = require('express'),
    app = express(),
    router = express.Router(),
    Categories = require('../collections/categories'),
    Category = require('../models/category');

exports.list = function(req, res){
  Categories.forge()
  .fetch()
  .then(function (collection) {
    res.json({error: false, data: collection.toJSON()});
  })
  .catch(function (err) {
    res.status(500).json({error: true, data: {message: err.message}});
  });
};

exports.create = function(req, res){
    Category.forge({
      name : req.body.name
    })
    .save()
    .then(function(category) {
      res.json({error: false, data: "category added !"});
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
};

exports.delete = function(req, res){
  Category.forge({id : req.params.id})
  .destroy()
  .then(function(category) {
    res.json({error: false, data: "category deleted !"});
  })
  .catch(function (err) {
    res.status(500).json({error: true, data: {message: err.message}});
  });
};
