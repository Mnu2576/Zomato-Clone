const express = require("express")
const app = express();
const database = require("mongoose")
const dotenv = require("dotenv")
const { json } = require("express")
const cors=require('cors')
app.use(cors())



dotenv.config();

//connecting DataBase
database.connect(process.env.DATABASE)
.then(()=>{
    console.log("Database is connected")
}).catch((err)=>{
    console.log(err)
})

app.use(express.json())

//register
const register = require("./routes/auth")
app.use("/register", register)

//login
const registered = require("./routes/auth")
app.use("/user", registered )

//add-restaurant
const addRestaurant = require("./routes/AddRestaurant")
app.use("/add" , addRestaurant)

app.listen(4500,()=>{
    console.log("server is running on 4500 port")
})


