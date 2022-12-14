const {Schema, model} = require('mongoose');

const collection = new Schema({
    name: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    timeStart: {type: Date, required: true, default: Date.now()},
    timeEnd: {type: Date, required: true},
    currentSum: {type: Number, required: true, default: 0},
    goalSum: {type: Number, required: true},
    owner: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    collectionStatus: {type: String, enum: ['In process, Done'], default: 'In process'},
});

module.exports = model('Collection', collection);