const {Schema, model} = require('mongoose');

const schema = new Schema({
    sum: {type: Number, required: true},
    collection: {type: Schema.Types.ObjectId, ref: 'Collection', required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
});

module.exports = model('Donation', schema);