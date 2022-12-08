const {Schema, model} = require('mongoose');

const schema = new Schema({
    name: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    timeStart: {type: Date, required: true},
    timeEnd: {type: Date, required: true},
    currentSum: {type: Number, required: true, min: 0},
    goalSum: {type: Number, required: true},
    owner: {type: Schema.Types.ObjectId, ref: 'User', required: true},
});

module.exports = model('Collection', schema);