const mongoose   = require('mongoose');         //Include mongoose express

//Database connection
mongoose.connect('mongodb://127.0.0.1:27017/jjmDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Sucess connected!");
}).catch((error)=>{
    console.log("Error: No connection!");
});

