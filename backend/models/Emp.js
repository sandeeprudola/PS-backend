const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
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
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        enum: ['doctor', 'therapist', 'audiologist', 'receptionist', 'admin'],
        required: true
    },
    specialization: {
        type: String,
        trim: true // e.g., "Speech Therapy", "Occupational Therapy"
    },
    joinedAt: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;
