let express = require('express'),
    app = express(),
    router = express.Router(),
    Comments = require('../collections/comments'),
    Comment = require('../models/comment');

exports.list = function(req, res){
  Comments.forge()
  .fetch({withRelated : ['article']})
  .then(function (collection) {
    res.json({error: false, data: collection.toJSON()});
  })
  .catch(function (err) {
    res.status(500).json({error: true, data: {message: err.message}});
  });
};

exports.create = function(req, res){
  Comment.forge({
    author: req.body.author,
    content: req.body.content,
    article_id: req.body.article_id,
    is_read: 0
  })
  .save()
  .then(function(comment) {
    res.json({error: false, data: "comment added !"});
  })
  .catch(function (err) {
    console.log(err);
    res.status(500).json({error: true, data: {message: err.message}});
  });
};

exports.delete = function(req, res){
  Comment.forge({id : req.params.id})
  .destroy()
  .then(function(comment) {
    res.json({error: false, data: "category deleted !"});
  })
  .catch(function (err) {
    res.status(500).json({error: true, data: {message: err.message}});
  });
};

exports.isRead = function(req, res){
  Comment.forge({id : req.params.id})
  .fetch()
  .then(function(comment) {
    comment.save({
      is_read : 1
    })
    .then(function () {
        res.json({error: false, data: {message: 'Comment read'}});
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
};
