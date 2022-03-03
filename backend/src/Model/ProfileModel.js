const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProfileSchema = new Schema(
  {
   
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: Number, required: true },
    gender: { type: String, required: true },
    city: { type: String, required: true },
    
 
  },
);
module.exports = Profile = mongoose.model("profile", ProfileSchema);
