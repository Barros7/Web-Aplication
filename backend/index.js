const express = require('express'); //Include framework express
const bodyParser = require('body-parser'); //Include body-parser express
const session = require('express-session'); //Include express-session
const mongoose   = require('mongoose'); //Include mongoose express
const bcrypt = require('bcryptjs'); //Include bcryptjs
const jwt = require('jsonwebtoken'); //Include jsonwebtoken
const path = require('path');
const cors = require('cors'); //Include path
const port = 3000; //Declaration port
const db = require('./database/database'); //invoke database conection
const { use } = require('express/lib/application');

//import models from models folder
const User = require('./models/user');
const Car = require('./models/car');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//require('./controllers/authController')(app);

//Index route
app.get('/', (req, res)=>{
    return res.status(200).json({titulo: "Bem vindo!!!"});
});

//Create register of user
app.post('/auth/register', async (req, res)=>{
    const { username, email, password, confirmpassword } = req.body
        //console.log(req.body)

    // validations
    if(!username) {
        return res.status(422).json({ msg: 'O nome é obrigatório' });
    }

    else if(!email) {
        return res.status(422).json({ msg: 'O email é obrigatório' });
    }

    else if(!password) {
        return res.status(422).json({ msg: 'A password é obrigatório' });
    }

    else if (password !== confirmpassword){
        return res.status(422).json({ msg: 'As senhas são diferentes!' });
    }

    //check emails
    const userExists = await User.findOne({ email: email });

    if (userExists) {
        return res.status(422).json({ msg: 'Por favor, utilize outro e-mail' });
    }

    //create password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    //create user
    const user = new User({
        username,
        email, 
        password: passwordHash
    });

    try {
        await user.save()
        res.status(201).json({ msg: 'Usuário registado com sucesso!' })

    } catch (error) {
        console.log(error)

        res.status(500).json({ msg: 'aconteceu um erro no servidor, tente mais tarde!'});
    }
})

//login of user
app.post('/auth/login', async (req, res)=>{
    const { email, password } = req.body

    //validation
    if (!email) {
        return res.status(422).json({ msg: 'Por favor, utilize outro e-mail' });
    }
    else if (!password) {
        return res.status(422).json({ msg: 'A senha é obrigatória!' });
    }

    //check users
    const user = await User.findOne({ email: email });

    if (!user) { 
        return res.status(404).json({ msg: 'Utilizador não encontrado!' });
    }

    //check password
    const checkPassword = await bcrypt.compare(password, user.password);

    if(!checkPassword) {
        return res.status(422).json({ msg: 'Nome do utilizador ou palavra passe errada!' });
    }

    try{
        const secret = 'jjm';
        const token = jwt.sign({
            id: user._id
        }, 
        secret,
        );
        res.status(200).json({
            msg: 'Autenticação realizada com sucesso', token
        });

    } catch(error) {
        console.log(error);

        res.status(500).json({
            msg: 'Aconteceu um erro no servidor, tente novamente mais tarde!',
        });
    }
});

app.get('/user/:id', checkToken,async (req, res) => {
    const id = req.params.id

    //check if user exists
    const user  = await User.findById(id, '-password');

    if(!user) {
        return res.status(404).json({ msg: 'Utilizador não encontrado' });
    }

    res.status(200).json({ user });
});

//check token
function checkToken (req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token){
        return res.status(401).json({ msg: 'Acesso negado' });
    }

    try {
        const secret = 'jjm';
        jwt.verify(token, secret)

        next();
    } catch (error) {
        return res.status(400).json({ msg: 'Token inválido' });
    }
}





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

//Car list route, select all users from database
app.get('/carslist', (req, res, next)=>{
	Car.find({},(err,data)=>{
		if(data){
            //console.log(data.marca);
            res.send(data);
			if(data.length > 0){
				console.log("Done list cars");
                //console.log(data);
				res.send({"Success":"Success!"});
			}else{
				res.send({"Success":"No Cars!"});
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
