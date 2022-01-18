const express = require('express');             //Include express dependence on node modules.
const path = require('path');
const dotEnv = require('dotenv');               //Include dotenv variables for sensetive information.
const bcrypt = require('bcryptjs');             //Include bcrypt variables for strong passsword
const bodyParser = require('body-parser');      //Include body-parser dependence 
const session  = require('express-session');  //Include express-session
const session = require('express-session');     //Invoke express-session module for validate user session

require('./database/database');  //invoke database conection
const port = 3000;

const cors = require('cors')                          //Include path

const app = express();
app.use(cors());

//import models from models folder
require("./models/User");
require("./models/Car");
const User = mongoose.model('user');
const Car = mongoose.model('car');

//url encode for get data form
app.use(express.urlencoded({
  extended:false
}));

app.use(express.json());

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

//============================== Routes ==================================

//Login
app.get('/login', (req, res)=>{
  res.statusCode = 200;
  res.render('login');
});

//Logout
app.get('/logout', (req, res)=>{
  req.session.destroy(()=>{
    res.redirect('/');
  });
});

//register
app.get('/register', (req, res) => {
  res.render('register');
});

//Create register of user
app.post('/register', async (req, res)=>{
  const username = req.body.username;
  const password = req.body.password;
  let passwordHash = await bcrypt.hash(password, 8);
  console.log(username);

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
})

//Authenticate
app.post('/auth', async(req, res)=>{
  var username = req.body.username;
  var password = req.body.password;
  let passwordHash = await bcrypt.hash(password, 8);

  if(username && password){
    connectionDB.query('SELECT * FROM students WHERE Name = ?', [username], async (error, results, fields)=>{
      if(results.length == 0 || !(await bcrypt.compare(password, results[0].Password))){
        return res.json({titulo: "Compras e Vendas de Automóveis Usados"});
      }
      else{
        req.session.loggedin = true;
        req.session.Name = results[0].Name;
        return res.json({titulo: "Compras e Vendas de Automóveis Usados"});
      }
      res.end();
    });
  }
  else{
    res.send('Please, enter correct username and password!');
    res.end();
  }
});

//auth
app.get('/', (req, res)=>{
  if(req.session.loggedin){
    return res.json({titulo: "Compras e Vendas de Automóveis Usados"});
  }
  else{
    res.render('index',{
      login: false,
      name: 'Deve iniciar sessão!'
    })
  }
})

//función para limpiar la caché luego del logout
app.use((req, res, next)=>{
  if (!req.Name)
      res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  next();
});

app.listen(port, (req, res) => {
  console.log("Server started on port " + port);
});