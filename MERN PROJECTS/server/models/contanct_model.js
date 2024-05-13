const {Schema,model}  = require('mongoose');

const contanctSchema= new Schema({
    username:{type: String, required:true},
    email:{type:String ,required : true },
    message:{type:String,required:true},
})

const Contanct = new model("Contanct",contanctSchema);


module.exports=Contanct;