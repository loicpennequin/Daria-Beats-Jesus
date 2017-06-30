let Bookshelf = require('../../database');

require('./article');

var Comment = Bookshelf.Model.extend({
	tableName: "comments",
	hasTimestamps: true,
	article: function(){
		return this.belongsTo('Article')
	}
});

module.exports = Bookshelf.model('Comment', Comment);
