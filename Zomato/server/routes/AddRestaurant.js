const router = require('express').Router()
const Restaurant = require('../Schema/addRestaurant')

router.post('/restaurant', async (req, res) => {

    const NewRestaurants = new Restaurant({
        restauntName: req.body.restauntName,
        restauntAddress: req.body.restauntAddress,
        restauntPhoneNumber: req.body.restauntOwnerPhone,
        restauntOwnerName: req.body.restauntOwnerName,
        restauntOwnerPhone: req.body.restauntOwnerPhone,
        restauntOwnerEmail: req.body.restauntOwnerEmail
    })
    if (!restauntName || !restauntAddress || !restauntPhoneNumber || !restauntOwnerName || !restauntOwnerPhone || !restauntOwnerEmail) {
        console.log("Complete the detail");
        return res.status(400).json("Complete the detail");
        
    }else{
        Restaurant.findOne({restauntName:req.body.restauntName}).then(()=>{
            console.log('Restaurant already exits')
            return res.status(409).json('user already exists')
        }).catch((err)=>{
            console.log(err);
            res.status(400).json(err);
        })
        const saveRestaurants = await NewRestaurants.save()
        res.status(200).json(saveRestaurants)
    }
})