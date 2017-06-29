let express = require('express'),
    app = express(),
    router = express.Router(),
    slugify = require('slugify')
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

exports.show = function(req, res){
  Article.forge({slug : req.params.slug})
  .fetch({withRelated : ['category', 'tags']})
  .then(function (article) {
    res.json({error: false, data: article.toJSON()});
  })
  .catch(function (err) {
    res.status(500).json({error: true, data: {message: err.message}});
  });
};

exports.create = function(req,res){
  let slug = slugify(req.body.title)
  Article.forge({
    titre : req.body.title,
    html : req.body.html,
    slug : slug,
    category_id : req.body.category.id,
  })
  .save()
  .then(function(article) {
    res.json({error: false, data: "article added !"});
  })
  .catch(function (err) {
    res.status(500).json({error: true, data: {message: err.message}});
  });
};
