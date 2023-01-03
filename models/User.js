const { Schema, model } = require('mongoose');

const user = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: false },
    location: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: ['BaseUser', 'Organizer', 'Moderator'],
        default: 'BaseUser',
    },
    userStatus: {
        type: String,
        enum: ['Active', 'Disabled'],
        default: 'Active',
    },
});

module.exports = model('User', user);
