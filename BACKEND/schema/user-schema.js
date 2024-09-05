const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const Question=require('./question-schema')
const userSchema=new  mongoose.Schema({
    name : {
        type :String, 
        reqired:true
    },
    email : {
        type :String, 
        reqired:true,
        unique:true
    },
    password : {
        type :String, 
        reqired:true
    },
    institutename : {
        type :String, 
        reqired:true
    },
    contactNo : {
        type :Number, 
        reqired:true
    },
    codeForces : {
        type :String, 
        reqired:true
    },
    leetCode : {
        type :String, 
        reqired:true
    },
    codeChef : {
        type :String, 
        reqired:true
    },
    questions:[{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:'Question'
    }]

})
userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password =await bcrypt.hash(this.password,10);
})

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
};


module.exports=mongoose.model('User',userSchema); 