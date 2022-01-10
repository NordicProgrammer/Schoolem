const mongoose = require('mongoose');
const encryptPassword = require('../functions/encryptPassword')
mongoose.connect('mongodb://127.0.0.1:27017/Schoolem');

const { 
    v1: uuidv1,
    v4: uuidv4,
  } = require('uuid');
const e = require('express');

const studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    password: String,
    email: String,
    uuid: String,
    friends: [{uuid: String}]
})
studentSchema.methods.signUp = function(firstName, lastName, email, password, cb){
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.password = password
    mongoose.model('studentUser').find({email: email}, function(err, doc){
        if(err){
            cb(false, 0)
        }else{
            
        }
        
    })
    
}
studentSchema.methods.test = function(){
    console.log(this.email)
}
const studentUser = mongoose.model('studentUser', studentSchema);
var student = new studentUser({})

