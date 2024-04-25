const mongoose = require('mongoose');

const busDriverSchema = new mongoose.Schema({
    userName: { type: String, required: true }, // Gard Name who maintane
    phoneNo: { type: Number, unique: true, required: true },  // Phone number of the gard
    
})

const busDriverDetail = mongoose.model('busDriverData', busDriverSchema);

module.exports = busDriverDetail;