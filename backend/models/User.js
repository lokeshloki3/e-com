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
    password: String,
    inVerified: {
        type: Boolean,
        default: false
    },
    verificationCode: String,
})

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

// Export
module.exports = mongoose.model('User', userSchema)