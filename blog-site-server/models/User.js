const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    role:{
        type:String
    },
    blogs:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Blog'
    }]
},{
    timestamps:true
})

const User=mongoose.model("User",userSchema);
module.exports=User;