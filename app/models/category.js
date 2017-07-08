let Bookshelf = require('../../database');

require('./article');
var Category = Bookshelf.Model.extend({
	tableName: "categories",
	articles : function(){
		return this.hasMany('Article')
	}
});

module.exports = Bookshelf.model('Category', Category);
