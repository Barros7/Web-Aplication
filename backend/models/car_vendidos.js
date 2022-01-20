const mongoose = require('mongoose');  //invoke database conection

const Car = mongoose.model('CarVendidos', {
    username: String,
    telefone: Number,
    email: String,
    marca: String, 
    matricula: String, 
    modelo: String, 
    tipo: String, 
    preco: Number, 
    ano: Number,
    combustivel: String 
});

module.exports = Car;
