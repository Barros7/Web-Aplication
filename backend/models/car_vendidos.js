mongoose = require('mongoose');  //invoke database conection

const CarVendidos = new mongoose.Schema({
    matricula: {
        type: String,
        require: true,
    },
    marca: {
        type: String,
        unique: false,
        required: true,
        capitalize: true,
    },
    modelo: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        unique: false,
        required: true,
        capitalize: true,
    },
    preco: {
        type: Number,
        unique: false,
        required: true,
        capitalize: true,
    },
    ano: {
        type: Number,
        unique: false,
        required: true,
        capitalize: true,
    },
},
{
    timestamps: true, 
});

mongoose.model('car_vendidos', CarVendidos);