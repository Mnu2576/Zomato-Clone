const router = require("express").Router()
const User = require('../Schema/auth')
const Crypto = require("crypto-js")

//register
router.post("/signup" , async (req,res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: Crypto.AES.encrypt(req.body.password, process.env.PASS).toString()
    });
    try{
        const saveUser = await newUser.save() 
        res.status(200).json(saveUser)
    }catch(err){
        res.status(500).json(err);
    }

})

//login

router.post("/login" , async (req, res)=>{
    try{
        const user = await User.findOne({username:req.body.username})
        !user && res.status(500).json("Wrong credential")
        
        const hashedpassword = CryptoJS.AES.decrypt(user.password , process.env.PASS)
        const origionalpassword = hashedpassword.toString(CryptoJS.enc.Utf8)
        origionalpassword!== req.body.password && res.status(500).json("Wrong credential")
        const {password,  ...other } = user._doc
        res.status(200).json(other)
        
    }catch(err){
        res.status(500).json(err)

    }
})

module.exports = router;