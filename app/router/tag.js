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
    console.log(err);
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
