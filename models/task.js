const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true, 
    },
    isCompleted : {
        type : Boloean,
        default : false,
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
    },
}, {timestamps : true});

module.exports = {
    Task :  mongoose.model("Task", schema),
}