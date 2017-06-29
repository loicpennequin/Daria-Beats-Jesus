'use strict';

let express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    Bookshelf = require('./database'),
    port = 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));


/*=========================================ROUTING======================================*/

let category = require('./app/router/category'),
    article = require('./app/router/article'),
    tag = require('./app/router/tag'),
    comment = require('./app/router/comment');

app.get('/api/categories', category.list);
app.post('/api/categories', category.create)

app.get('/api/tags', tag.list)
app.get('/api/articles', article.list);


//////// 404
app.use(function(req, res, next){
      res.setHeader('Content-Type', 'text/plain');
      res.send(404, 'Page introuvable !');
});

app.listen(port);
console.log('server is running at port ' + port);
