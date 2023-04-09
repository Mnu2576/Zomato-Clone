const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
    restaurantName: { type: String, required: true, unique: true },
    restaurantAddress: { type: String, required: true },
    restaurantPhoneNumber: { type: String, required: true },
    restaurantOwnerName: { type: String, required: true },
    restaurantOwnerAddress: { type: String, required: true },
    restaurantOwnerEmail: { type: String, required: true, unique: true },
}, {
    timestamps: true
})

const Restaurants = mongoose.model('Restaurant', RestaurantSchema);
module.exports = Restaurants
