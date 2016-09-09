// define Schema

var mongoose = require('../connect.js');
var Schema = mongoose.Schema;
var qBanksSchema = new Schema({
    user_id: String,
    qbank_id: String,
    qbank_name: String,
    create_time: {type: Number, default: Date.now},
    last_update: Number,
    question: [{
        question_id: String,
        question: String,
        items: [String],
        create_time: {type: Number, default: Date.now},
        last_update: Number,
        answer: [Number],
        time_length: Number,
        score: Number,
        material: [String],
        collected_count: Number,
        challenged_times: Number
    }],
    collected_count: Number,
    challenged_times: Number
})

// create a model
var qBanks = mongoose.model('qBanks', qBanksSchema);
module.exports = qBanks;