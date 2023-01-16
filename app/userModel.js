const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userName:{
        type:String
    },
    phoneNumber:{
        type:String
    }
})

const User = mongoose.model('userModel',userSchema,'userModel')
module.exports = User