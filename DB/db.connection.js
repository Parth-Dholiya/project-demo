const mongoose = require("mongoose");

// Database connnection 
const DB = mongoose.connect("mongodb://localhost:27017/data", {
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then(() => {
    console.log("Database Connected Successfully....!")
}).catch((error) => {
    console.log("Database Connection Fail...!")
})


module.exports ={DB};