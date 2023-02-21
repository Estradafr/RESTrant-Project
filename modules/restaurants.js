const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
	name: {type: String, required: true},
	pic: {type: String},
	cuisines: {type: String, required: true},
	city: {type: String, default: 'Somewhere'},
	state: {type: String, default: 'USA'},
	founded: {type: Number},
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
