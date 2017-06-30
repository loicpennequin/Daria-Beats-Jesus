let express = require('express'),
    app = express(),
    router = express.Router(),
    Tags = require('../collections/tags'),
    Tag = require('../models/tag');

exports.list = function(req, res){
  Tags.forge()
  .fetch({withRelated: ['articles']})
  .then(function (collection) {
    res.json({error: false, data: collection.toJSON()});
  })
  .catch(function (err) {
    res.status(500).json({error: true, data: {message: err.message}});
  });
};

exports.create = function(req, res){
  Tag.forge({
    name : req.body.name,
    slug : req.body.slug
  })
  .save()
  .then(function(tag) {
    res.json({error: false, data: "tag added !"});
  })
  .catch(function (err) {
    res.status(500).json({error: true, data: {message: err.message}});
  });
};

exports.delete = function(req, res){
  Tag.forge({id : req.params.id})
  .fetch()
  .then(function(tag) {
    tag.articles().detach()
    .then(function(){
      tag.destroy()
      .then(function(){
        res.json({error: false, data: "tag deleted !"});
      })
      .catch(function (err) {
        res.status(500).json({error: true, data: {message: err.message}});
      });
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
  })
  .catch(function (err) {
    res.status(500).json({error: true, data: {message: err.message}});
  });
};
