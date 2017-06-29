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
