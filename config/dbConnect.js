const mongoose = require('mongoose')

const dbConnect =()=>{
    mongoose.connect(process.env.MONGO_URI,{
        useNewurlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Mongoose connected"))
      .catch((err) => console.log(err));
    
    
}

module.exports = dbConnect;