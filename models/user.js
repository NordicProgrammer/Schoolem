const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

function encryptPassword(password, callback){
    bcrypt.hash(password, 10, function(err, hash) {
        if (err){
            callback(false)
        }else{
            callback(hash)
        }
    });
}
const userSchema = mongoose.model('User', {username: String, password: String})
userSchema.methods.signUp = function signUp(username, password, callback){
    this.username = username;
    encryptPassword(password, function(hash){
        if(hash == false){
            callback(false)
        }
    })
}