const mongoose = require('mongoose')
const validator = require('validator');

const userSchema = new mongoose.Schema({
    
     name:{
        type:String,
     },
     profile_img:{
        type:String,
        required:false,
        default:"/static/images/avatar.avif"
     },
     email:{
        type:String,
        required:true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: 'Invalid email format'
        }   
     },   
     password: {
        type: String,
        required: true
      },
     username :{
        type:String,
        required:true,
     },
     city:{
      type:String,
      default:"Charlotte"
     },
     state:{
      type:String,
      default:"North Carolina"
     },
     talent:{
      type:String,
      default:   "add your profession"
     }
   },
    { timestamps: true , versionKey: false }
 )

userSchema.index({email:1});
userSchema.index({username:1});
userSchema.index({email:1,password:1});

let userModel = mongoose.model("users",userSchema);

module.exports = userModel ;