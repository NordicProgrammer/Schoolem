const mongoose = require('mongoose');
const encryptPassword = require('../functions/encryptPassword')
mongoose.connect('mongodb://192.168.0.47:27017/Schoolem');

const { 
    v1: uuidv1,
    v4: uuidv4,
  } = require('uuid');

const studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    password: String,
    email: String,
    uuid: String,
    friends: [{uuid: String}]
})
studentSchema.methods.signUp = function(firstName, lastName, email, password){
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.password = password
}
studentSchema.methods.test = function(){
    console.log(this.email)
}
const studentUser = mongoose.model('studentUser', studentSchema);
var student = new studentUser({})
student.signUp('Oliver', 'Brock', 'suzanne_brock@hotmail.com', 'T!lly2019!')
student.test()
