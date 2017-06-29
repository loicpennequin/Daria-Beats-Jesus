let Bookshelf = require('../../database'),
		Article = require("../models/article"),
		Articles = Bookshelf.Collection.extend({
			model: Article
		});

module.exports = Bookshelf.collection('Articles', Articles);
