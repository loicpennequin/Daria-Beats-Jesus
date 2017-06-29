let Bookshelf = require('../../database'),
		Tag = require("../models/tag"),
		Tags = Bookshelf.Collection.extend({
			model: Tag
		});

module.exports = Bookshelf.collection('Tags', Tags);
