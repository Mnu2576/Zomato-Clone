const router = require('express').Router()
const Restaurant = require('../Schema/addRestaurant')

router.post('/add-resturant', async (req, res) => {

    const NewRestaurants = new Restaurant({
        restrauntName: req.body.restrauntName,
        restrauntAddress: req.body.restrauntAddress,
        restrauntPhoneNumber: req.body.restrauntOwnerPhone,
        restrauntOwnerName: req.body.restrauntOwnerName,
        restrauntOwnerPhone: req.body.restrauntOwnerPhone,
        restrauntOwnerEmail: req.body.restrauntOwnerEmail
    })
    if (!restrauntName || !restrauntAddress || !restrauntPhoneNumber || !restrauntOwnerName || !restrauntOwnerPhone || !restrauntOwnerEmail) {
        console.log("Complete the detail");
        return res.status(400).json("Complete the detail");
        
    }else{
        Restaurant.findOne({restrauntName:req.body.restrauntName}).then(()=>{
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