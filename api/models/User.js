const mongoose = require('mongoose');
const {Schema, model} = mongoose;


const UserSchema = new Schema({
    username: {type: String, require: true, min:4, unique: true },
    email: {type: String, require: true, unique: true },
    phone: {type: Number, require: true },
    country: {type: String, require:true },
    password: {type: String, require: true }

});

const UserModel = model('User', UserSchema);


module.exports = UserModel;