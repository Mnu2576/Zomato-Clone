const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
    restaurantName: { type: 'text', required: 'true', unique: 'true' },
    restaurantAddress: { type: 'text', required: 'true' },
    restaurantPhoneNumber: { type: 'text', required: 'true' },
    restaurantOwnerName: { type: 'text', required: 'true' },
    restaurantOwnerAddress: { type: 'text', required: 'true' },
    restaurantOwnerEmail: { type: 'text', required: 'true', unique: 'true' },
}, {
    timestamps: true
})

const Restaurants = mongoose.model('Restaurant', RestaurantSchema);
module.exports = Restaurants
