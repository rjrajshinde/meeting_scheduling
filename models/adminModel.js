const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name: {type: String},
    email: { type: String, unique: true, required: true },
    mobile: { type: String, unique: true, required: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model('admins', adminSchema);