const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")


const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/elo")


const Users = require("./Models/User")

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    Users.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json({ status: "Success", email: user.email });
                } else {
                    res.json({ status: "Incorrect password" });
                }
            } else {
                res.json({ status: "User not found" });
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ status: "Error" });
        });
});

app.post("/register",(req,res)=>{
    Users.create(req.body)
    .then(employement => res.json(employement))
    .catch(err => res.json(err))

})

app.listen(4000,()=>{
    console.log("server dziala")
})