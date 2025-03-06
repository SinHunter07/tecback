const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    erpNum: {type: Number ,required:true, unique : true},
    year:{type:Number , required:true},
    Course:{type:String , required:true},
    College:{type:String , required:true},
    phoneNumber: { type: Number, required: true },
    googleDrive:{type : String , required:true},
    position:{type:String , required:true},
},{timestamps:true});

module.exports = mongoose.model('Form', formSchema);