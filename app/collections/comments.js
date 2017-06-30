let Bookshelf = require('../../database'),
		Comment = require("../models/comment"),
		Comments = Bookshelf.Collection.extend({
			model: Comment
		});

module.exports = Bookshelf.collection('Comments', Comments);
