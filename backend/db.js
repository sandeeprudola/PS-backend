require("dotenv").config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("MongoDB connected");
})
.catch((err) => {
    console.log("Connection error:", err);
});

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    role: {
        type: String,
        enum: ['patient_hearing', 'patient_speech', 'patient_both', 'employee', 'admin'],
        required: true
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
