const mongoose =require("mongoose");
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
    
});
userSchema.pre('save', async function(next) {
    const user = this;
    console.log("User:",user);
    if (!user.isModified("password")) {
        return next();
    }
    try {
        const saltRound = await bcrypt.genSalt(10);
        // const hashPassword = await bcrypt.hash(user.password, saltRound);
        // user.password = hashPassword;
        next();
    } catch (err) {
        console.log(err);
        next(err);
    }
});

userSchema.methods.generateToken= async function() {
    try{
       return jwt.sign({
        userId:this._id.toString(),
        email:this.email,
        isAdmin:this.isAdmin,
       },
       
    ),
     process.env.SECRET,{
        expiresIN:"30d"
     }
    }
    catch(err){
        console.log(err);
    }
}
const user=new mongoose.model("User",userSchema);
module.exports=user; 