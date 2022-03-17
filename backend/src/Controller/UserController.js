const User = require("../Model/UserModel");
const Profile= require("../Model/ProfileModel");
const {createUser,viewUser,updateUser,deleteUser, getCountry} =require("../Services/UserServices");
const Country = require("../Model/Country");
const States = require("../Model/State");
console.log(User)

module.exports={
  Create :(req,res)=>createUser(req,res,User),
  View:(req,res)=>viewUser(req,res,User),  
  Edit :(req,res)=>updateUser(req,res,User),
  Delete :(req,res)=>deleteUser(req,res,User),

  Createprofile :(req,res)=>createUser(req,res,Profile),
  Viewprofile:(req,res)=>viewUser(req,res,Profile),

  Createcountry :(req,res)=>createUser(req,res,Country),
  Viewcountry:(req,res)=>viewUser(req,res,Country),

  Createstates :(req,res)=>createUser(req,res,States),
  Viewstates:(req,res)=>getCountry(req,res,States)

}