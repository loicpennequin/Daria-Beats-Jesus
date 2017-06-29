let express = require('express'),
    app = express(),
    router = express.Router(),
    Articles = require('../collections/articles'),
    Article = require('../models/article');

exports.list = function(req, res){
  Articles.forge()
  .fetch({withRelated : ['category', 'tags']})
  .then(function (collection) {
    res.json({error: false, data: collection.toJSON()});
  })
  .catch(function (err) {
    res.status(500).json({error: true, data: {message: err.message}});
  });
};
