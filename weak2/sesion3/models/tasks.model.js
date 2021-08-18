const mongoose = require('mongoose')
const tasks = mongoose.model('tasks',{
    title:{
        type:String,
        required: true,
        minlength: 3,
        maxlength:20,
        trim:true
    },
    content:{
        type:String,
        required: true,
        minlength: 3,
        maxlength:200,
        trim:true
    },
    dueDate:{
        type:String,
        required: true,
    },
} )
module.exports = tasks
