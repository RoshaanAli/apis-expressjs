const mongoose = require("mongoose");


/**
 * structure/prototype of data 
 */
const registerModel = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 30,
    unique: true,
  },
  password:{
    type:String,
    required:true,
    minlength:5,
    maxlength:250
  },
  displaypicture:{
    type:String
  }
});

module.exports = mongoose.model("NewUsers",registerModel)
