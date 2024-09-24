const mongoose = require('mongoose');

//message schema documentataion
const msgSchema= new mongoose.Schema({
    firstname : {	
        type:String,
        required:true
    },
    lastname : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true
    },
    message : {
        type:String,
        required:true
    }
})

//create model
const Message=new mongoose.model("MESSAGE",msgSchema);
module.exports=Message;

