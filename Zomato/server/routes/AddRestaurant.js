const router = require('express').Router()
const Restaurant = require('../Schema/addRestaurant')

router.post('/restaurant', async (req, res) => {
    const NewRestaurants = new Restaurant({
        restaurantName: req.body.restaurantName,
        restaurantAddress: req.body.restaurantAddress,
        restaurantPhoneNumber: req.body.restaurantPhoneNumber,
        restaurantOwnerName: req.body.restaurantOwnerName,
        restaurantOwnerAddress: req.body.restaurantOwnerAddress,
        restaurantOwnerEmail: req.body.restaurantOwnerEmail,
    })
    if (!req.body.restaurantName || !req.body.restaurantAddress || !req.body.restaurantPhoneNumber || !req.body.restaurantOwnerName || !req.body.restaurantOwnerAddress || !req.body.restaurantOwnerEmail) {
        console.log("Complete the detail");
        return res.status(400).json("Complete the detail");
    }

    Restaurant.findOne({ restaurantName: req.body.restaurantName }).then((exists) => {
        if (exists) {
            console.log("Restaurant Already Exists")
            res.status(400).json("Already Exists")
        }else{
            NewRestaurants.save().then(() => {
                console.log("Added to the databse");
                res.status(200).json( "Submitted Sucessuflly");
            }).catch((err) => {
                console.log("Error");
            })
        }

    })
})

module.exports = router
