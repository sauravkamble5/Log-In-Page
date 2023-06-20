const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/login")

const UserSchema = new mongoose.Schema({
    email:String,
    password:String
})

const  UserModel = mongoose.model("users", UserSchema)

app.post("/login", (req, res) =>{
    const {email, password} = req.body;
    UserModel.findOne({email:email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Login Successfully")
            } else{
                res.json("The password is incorrect")
            }
        } else{
            res.json("No record existed")
        }
    })
})



app.listen(3001, () => {
    console.log("Server is Running");
})