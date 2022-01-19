const mongoose = require('mongoose');  //invoke database conection

const Car = mongoose.model('Car', {
    marca: String,
    matricula: String,
    modelo: String,
    tipo: String,
    preco: Number,
    ano: Number
});

module.exports = Car;