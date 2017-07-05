let express = require('express'),
    app = express(),
    router = express.Router(),
    slugify = require('slugify')
    Articles = require('../collections/articles'),
    Article = require('../models/article'),
    Tags = require('../collections/tags'),
    _ = require('lodash');

exports.list = function(req, res){
  Articles.forge()
  .fetch({withRelated : ['category', 'tags', 'comments']})
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
  let slug = slugify(req.body.title),
      tags = req.body.tagsArray;
  Article.forge({
    titre : req.body.title,
    html : req.body.html,
    slug : slug,
    category_id : req.body.category.id,
  })
  .save()
  .then(function (article) {

    // save tags
    if (tags){
      saveTags(tags)
      .then(function (ids) {
        article.load(['tags'])
        .then(function (model) {

          // attach tags to post
          model.tags().attach(ids);
          res.json({error: false, data: {message: 'article added'}});
        })
        .catch(function (err) {
          console.log(err);
          res.status(500).json({error: true, data: {message: err.message}});
        });
      })
      .catch(function (err) {
        console.log(err);
        res.status(500).json({error: true, data: {message: err.message}});
      });
    } else {
      res.json({error: false, data: {message: 'article added'}});
    }
  })
  .catch(function (err) {
    console.log(err);
    res.status(500).json({error: true, data: {message: err.message}});
  });
};

exports.delete = function(req,res){
  Article.forge({id : req.params.id})
  .destroy()
  .then(function(article) {
    res.json({error: false, data: "article deleted !"});
  })
  .catch(function (err) {
    res.status(500).json({error: true, data: {message: err.message}});
  });

};

function saveTags(tags) {
  // create tag objects
  var tagObjects = tags.map(function (tag) {
    return {
      name: tag,
      slug: slugify(tag)
    };
  });
  return Tags.forge()
  // fetch tags that already exist
  .query('whereIn', 'slug', _.map(tagObjects, 'slug'))
  .fetch()
  .then(function (existingTags) {
    var doNotExist = [];
    existingTags = existingTags.toJSON();

    // filter out existing tags
    if (existingTags.length > 0) {
      var existingSlugs = _.map(existingTags, 'slug');
      doNotExist = tagObjects.filter(function (t) {
        return existingSlugs.indexOf(t.slug) < 0;
      });
    }
    else {
      doNotExist = tagObjects;
    }

    // save tags that do not exist
    return new Tags(doNotExist).mapThen(function(model) {
      return model.save()
      .then(function() {
        return model.get('id');
      });
    })
    // return ids of all passed tags
    .then(function (ids) {
      return _.union(ids, _.map(existingTags, 'id'));
    });
  });
}
