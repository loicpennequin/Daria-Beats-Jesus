let Bookshelf = require('../../database');

require('./article');
require('./category');

var Tag = Bookshelf.Model.extend({
	tableName: "tags",
	articles : function(){
		return this.belongsToMany('Article', 'articles_tags')
	}
});

module.exports = Bookshelf.model('Tag', Tag);
