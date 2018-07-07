// const mongoose = require('mongoose');

// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var ContactSchema = new Schema({
   
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    phone: String
});

// the schema is useless so far
// we need to create a model using it
var Contact = mongoose.model('User', ContactSchema);

// make this available to our users in our Node applications
module.exports = Contact;

// const ContactSchema = mongoose.Schema({
//     first_name:{
//         type:String,
//         required:true
//     },
//     last_name:{
//         type:String,
//         required:true
//     },
//     phone:{
//         type:String,
//         required:true
//     }
// });

// const Contact = module.exports = mongoose.model('Contact', ContactSchema);