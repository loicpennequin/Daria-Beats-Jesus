let Bookshelf = require('../../database'),
		Image = require("../models/image"),
		Images = Bookshelf.Collection.extend({
			model: Image
		});

module.exports = Bookshelf.collection('Images', Images);
