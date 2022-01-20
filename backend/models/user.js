const mongoose = require('mongoose');  //invoke database conection

const User = mongoose.model('User', {
    username: String,
    email: String,
    password: String
});

module.exports = User;