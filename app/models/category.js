let Bookshelf = require('../../database');

var Category = Bookshelf.Model.extend({
	tableName: "categories"
});

module.exports = Bookshelf.model('Category', Category);
