const mongoose = require("mongoose"); //Include mysql dependence on node modules.

//Database connection
const database = mongoose.connect('mongodb://127.0.0.1:27017/jjmDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Sucess connected!");
}).catch((error)=>{
    console.log("Error: No connection!");
});

module.exports = database;
