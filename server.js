const express = require("express");
const dbConnect = require("./config/dbConnect");
require('dotenv').config();
const app = express();

// mongoose connect 
dbConnect();










// register
app.post('/users/register',(req,res)=>{
    res.send('hello')
})
app.post('/users/login',(req,res)=>{
    res.send('login')
})











const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Started Running ${PORT}`);
});
