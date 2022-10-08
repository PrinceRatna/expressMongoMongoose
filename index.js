
      //---------------------installization + set up start----------------------
// npm i -g nodemon
//mkdir ->go to dir->npm init -y
//npm i express cors mongodb mongoose dotenv(note: ja ja lagbe tai install korbo)
//pakage.json er script er vitore nicher line add kori
// "start":"node index.js",
// "start-dev":"nodemon index.js",

//index.js file make

       //run
 // npm run start-dev or nodemon index.js
       
      //mongo atlas set up + connect

 //1)go to mongodb atlas->login with google->(new hole :privacy accept+some question er answer+free create+create cluster)->Database Access->Add New Database User
// 2)user name+auto generate password dibo(ei user and password mone rakhte hobe)
//3)Network access a giye (amr computer er ip adddress['Add current ip address' option a click korlei hobe]) or (je server a data rakhbo tar ip address) or ('Allow access from anywhere' option a click korlei hobe) [note:'Allow access from anywhere' option a click kore oita e apatoto use korbo].

// 4)Database->connect->Conect your application->full code copy kore eikhane anbo
//5)oi code er password er jayga auto generate er password dibo.
//password sorasori na diye process.env er maddhome deoar try korbo.

//6)connection ta async korte pari.

// ----------------------end-------------------------

//cors,dotenv,async,route sub  kisu valo kore bujte gele nicher link a jabo

// https://github.com/PrinceRatna/niche-server-public/blob/main/index.js 

//(note:eitay sudhu express+mongodb atlas)

        //secure
// password secure korte .env and .gitignore duita file makeDeleteStatement
// .gitignore er agei 'git init' kore nite hobe
// .gitignore file a  node_modules ar .env likhe rakhte hobe
//.env file a  nicher moto

//   PORT=1000  DB_PASSWORD=995333 etc

// file a use korte gele  process.env.PORT / process.env.DB_PASSWORD




const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors');
require('dotenv').config();



//port 
const port=process.env.PORT||5000;

//id use korte hole
const ObjectId=require('mongodb').ObjectId;

    //express app initialization
const app = express();
app.use(express.json());


    //middleware
app.use(cors());

     //database connect with mongoose
        // mongoose
        // .connect('mongodb://localhost:27017/test')
        // .then(()=>console.log('connection successful'))
        // .catch((err)=>console.log(err))


     //application route
app.get('/',(req,res)=>{
    res.send('iujoduivpodivpoio');
})




   // default error handler
function errorHandler(err,req,res,next){
    if(res.headerSent){
        return next(err);
    }
    res.status(500).json({error: err});
}




//port 5000 set korbo..http://localhost:5000 server run hobe.route er kaj gulo[res.send('dfd')] oi link a gele dekhte parbo.
app.listen(port,()=>{
    console.log("app listening at port ",port);
});