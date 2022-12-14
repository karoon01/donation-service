const {Schema, model} = require('mongoose');

const donation = new Schema({
    sum: {type: Number, required: true},
    assemblage: {type: Schema.Types.ObjectId, ref: 'Collection', required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
});

module.exports = model('Donation', donation);