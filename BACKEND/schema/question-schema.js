const mongoose=require('mongoose');
const User=require('./user-schema');
const questionSchema=new  mongoose.Schema({
    title : {
        type :String, 
        reqired:true
    },
    link : {
        type :String, 
        reqired:true
    },
    remarks : {
        type :String, 
        reqired:true
    },

    creator:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:'User'

    }
})

module.exports=mongoose.model('Question',questionSchema);