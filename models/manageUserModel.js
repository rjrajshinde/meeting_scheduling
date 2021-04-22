const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, unique: "User With This Email Already Exist" },
    contact: { type: String, unique: "User With This Contact Already Exist" },
    createdBy: {type: require('mongoose').Types.ObjectId, ref: 'admins'},
    updatedBy: {type: require('mongoose').Types.ObjectId, ref: 'admins'}
});
UserSchema.set('timestamps',true)


//Setup unique validation on schema
UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('users', UserSchema);