const mongoose = require('mongoose')

const User = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    }   
    ,
    gender:{
        type:String
    }
})

module.exports = mongoose.model('Users', User)