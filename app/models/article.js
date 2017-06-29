let Bookshelf = require('../../database');

require('./tag');
require('./category');

var Article = Bookshelf.Model.extend({
	tableName: "articles",
	category: function(){
		return this.belongsTo('Category')
	},
	tags : function(){
		return this.belongsToMany('Tag', 'articles_tags')
	}
});

module.exports = Bookshelf.model('Article', Article);
