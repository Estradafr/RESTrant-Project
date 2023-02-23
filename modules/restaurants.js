const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
	name: {type: String, required: true},
	pic: {type: String, default: 'http://placehold.it/500x500.png'},
	cuisines: {type: String, required: true},
	city: {type: String, default: 'Somewhere'},
	state: {type: String, default: 'USA'},
	founded: {type: Number},
});

restaurantSchema.methods.showEstablished = function () {
	return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`;
};

module.exports = mongoose.model('Restaurant', restaurantSchema);
