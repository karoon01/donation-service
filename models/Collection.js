const { Schema, model } = require('mongoose');

const collection = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    timeStart: { type: Date, required: true },
    timeEnd: { type: Date, required: true },
    currentSum: { type: Number, required: true, default: 0 },
    goalSum: { type: Number, required: true },
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    collectionStatus: {
        type: String,
        enum: ['Active', 'Ended'],
        default: 'Active',
    },
});

module.exports = model('Collection', collection);
