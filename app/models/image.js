let Bookshelf = require('../../database');

var Image = Bookshelf.Model.extend({
	tableName: "images",
  hasTimestamps: true
});

module.exports = Bookshelf.model('Image', Image);
