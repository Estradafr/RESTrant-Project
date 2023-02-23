const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
	name: {type: String, required: true},
	pic: {type: String, default: 'https://via.placeholder.com/500'},
	cuisines: {type: String, required: true},
	city: {type: String, default: 'Somewhere'},
	state: {type: String, default: 'USA'},
	founded: {
		type: Number,
		min: [1673, 'Surely not that old?!'],
		max: [new Date().getFullYear(), 'Hey, this year is in the future!'],
	},
});

restaurantSchema.methods.showEstablished = function () {
	return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`;
};

module.exports = mongoose.model('Restaurant', restaurantSchema);
