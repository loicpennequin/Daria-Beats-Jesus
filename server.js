'use strict';

let http = require('http'),
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    Bookshelf = require('./database'),
    formidable = require('formidable'),
    fs = require('fs'),
    port = 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));


/*=========================================ROUTING======================================*/

let category = require('./app/routeHandler/category'),
    article = require('./app/routeHandler/article'),
    tag = require('./app/routeHandler/tag'),
    comment = require('./app/routeHandler/comment');

app.get('/api/articles', article.list);
app.get('/api/articles/:slug', article.show)
app.post('/api/articles', article.create);
app.delete('/api/articles/:id', article.delete)

app.get('/api/categories', category.list);
app.post('/api/categories', category.create)
app.delete('/api/categories/:id', category.delete)

app.get('/api/tags', tag.list)
app.post('/api/tags', tag.create)
app.delete('/api/tags/:id', tag.delete)

app.get('/api/comments', comment.list)
app.put('/api/comments/:id/read', comment.isRead)
app.delete('/api/comments/:id', comment.delete)



//////// 404
app.use(function(req, res, next){
      res.setHeader('Content-Type', 'text/plain');
      res.send(404, 'Page introuvable !');
});

app.listen(port);
console.log('server is running at port ' + port);
