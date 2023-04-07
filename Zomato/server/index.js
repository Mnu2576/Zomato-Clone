const express = require("express")
const app = express();
const register = require("./routes/auth")
const registered = require("./routes/auth")
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
app.use("/register", register)

//login
app.use("/user", registered )

app.listen(4500,(req,res)=>{
    console.log("server is running on 4500 port")
})


