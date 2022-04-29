require("dotenv").config({path:__dirname+'/.env'}); 
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Profile=require("./src/Model/ProfileModel")
const port = 4000;
const app = express();

const regusers= require("./src/Route/UserRoute");


  const { DB } = require('./src/configuration/config') 
 const {PORT} =require('./src/configuration/config') 
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors());

 /* const url =`mongodb+srv://prasanna:lZPkEeB9pbbQ9BXz@cluster0.q9od5.mongodb.net/budgetdata?retryWrites=true&w=majority`;
  */
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("mongodb connected");
}).catch((err) => {
    console.log({ err: err });
})

app.use('/api/user', regusers);
//app.use('/api/question/:id',question);

app.listen(PORT, (err) => {
    if (err) {
        console.log({ err: err });
    }
    console.log("server running on port" + PORT);
});


