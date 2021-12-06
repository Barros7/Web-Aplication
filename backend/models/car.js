const mongoose = require('mongoose');

const Car = new mongoose.Schema({
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
    }
},
{
    timestamps: true, 
});

mongoose.model('car', Car);