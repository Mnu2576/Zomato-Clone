const router = require("express").Router()
const User = require('../Schema/auth')
const Crypto = require("crypto-js")

//register
router.post("/signup", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: Crypto.AES.encrypt(req.body.password, process.env.PASS).toString()
    });
    try {
        const saveUser = await newUser.save()
        res.status(200).json(saveUser)
    } catch (err) {
        res.status(500).json(err);
    }

})

//login

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        const email = await User.findOne({ email: req.body.email })
        if (!user || !email) {
            console.log("Please enter correct email or paword ")
        } else {
            const hashedpassword = Crypto.AES.decrypt(user.password, process.env.PASS)
            const origionalpassword = hashedpassword.toString(Crypto.enc.Utf8)
            if (origionalpassword !== req.body.password) {
                console.log("password not correct")
            } else {
                const { password, ...other } = user._doc
                res.status(200).json(other)
                console.log("Login Successful")
            }
        }

    } catch (err) {
    }
})

module.exports = router;