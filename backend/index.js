//const session  = require('express-session');  //Include express-session
const bodyParser = require('body-parser');      //Include body-parser express
//const bcrypt   = require('bcryptjs');         //Include bcryptjs
const mongoose   = require('mongoose');         //Include mongoose express
const express    = require('express');          //Include framework express
//const path     = require('path');             //Include path
const port       = 3000;                        //Declaration port

//import models from models folder
require("./models/User");
require("./models/Car");
const User = mongoose.model('user');
const Car = mongoose.model('car');

const app = express();

//Database connection
mongoose.connect('mongodb://127.0.0.1:27017/jjmDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Sucess connected!");
}).catch((error)=>{
    console.log("Error: No connection!");
});

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//require('./controllers/authController')(app);

//Index route
app.get('/', (req, res)=>{
    return res.json({titulo: "Compras e Vendas de Automóveis Usados"});
})

//route for registe of users
app.post('/register', (req, res)=>{
    const user = User.create(req.body, (error)=>{
        if(error) return res.status(400).json({
            error: true,
            message: "User no registed!"
        });
        return res.status(200).json({
            error: false,
            message: "User registed!"
        });
    });
});

//route for registe of cars
app.post('/registercars', (req, res)=>{
    const car = Car.create(req.body, (error)=>{
        if(error) return res.status(400).json({
            error: true,
            message: "Car no registed!"
        });
        return res.status(200).json({
            error: false,
            message: "Car registed!"
        });
    });
});

app.delete('/deletecars', (req, res)=>{
    const car = Car.deleteMany(req.body, (error)=>{
        if(error) return res.status(400).json({
            error: true,
            message: "Car no del!"
        });
        return res.status(200).json({
            error: false,
            message: "Car del!"
        });
    });
});

//Route login
app.get('/login', function (req, res, next) {
	return res.send('index');
});

//Route auth login
app.post('/login', (req, res, next)=>{
	//console.log(req.body.email);
	User.findOne({email:req.body.email},(err,data)=>{
		if(data){
            //console.log(data.password);
			if(data.email==req.body.email){
				console.log("Done Login");
				res.send({"Success":"Success!"});
			}else{
				res.send({"Success":"Wrong password!"});
			}
		}else{
			res.send({"Success":"This Email Is not regestered!"});
		}
	});
});

//User list route, select all users from database
app.get('/userslist', (req, res, next)=>{
	User.find({},(err,data)=>{
		if(data){
            //console.log(data);
            res.send(data);
			if(data.length > 0){
				console.log("Done Login");
				res.send({"Success":"Success!"});	
			}else{
				res.send({"Success":"No users!"});
			}
		}else{
			res.send({"Success":"Page not found!"});
		}
	});
});

//App in running...
app.listen(port, () => {
    console.log("Server started on port " + port);
});
