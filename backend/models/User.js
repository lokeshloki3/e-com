// Import mongoose
const mongoose = require('mongoose');

// Route handler
const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationCode: String,
})

// Export
module.exports = mongoose.model('User', userSchema)