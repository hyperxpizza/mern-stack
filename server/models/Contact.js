const mongoose = require('mongoose');
const schema = mongoose.Schema({
    firstName: String,
    lastName: String,
    streetNumber: String,
    city: String,
    zip: String,
    state: String,
    country: String,
    isPublic: Boolean,
    owner: String,
    lat: String,
    lon: String, 
    createdAt: String,
    modifiedAt: String
});

module.exports = mongoose.model("Contact", schema);