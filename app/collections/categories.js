let Bookshelf = require('../../database'),
		Category = require("../models/category"),
		Categories = Bookshelf.Collection.extend({
			model: Category
		});

module.exports = Bookshelf.collection('Categories', Categories);
