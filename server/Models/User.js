const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const EmployeeNew = mongoose.model("test",EmployeeSchema)

module.exports = EmployeeNew