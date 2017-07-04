let Bookshelf = require('../../database');

require('./tag');
require('./category');
require('./comment')

var Article = Bookshelf.Model.extend({
	tableName: "articles",
	hasTimestamps: true,
	category: function(){
		return this.belongsTo('Category')
	},
	tags : function(){
		return this.belongsToMany('Tag', 'articles_tags')
	},
	comments : function(){
		return this.hasMany('Comment')
	}
});

module.exports = Bookshelf.model('Article', Article);
