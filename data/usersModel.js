// define Schema

var mongoose = require('../connect.js');
var Schema = mongoose.Schema;
var UsersSchema = new Schema({
    user_id: String,
    soc_type: Number,
    accesstoken:{
        soc_user_id: String,
        access_token: String,
        create_time: {type: Number, default: Date.now},
        expire_time: Number,
    },
    nickname: String,
    gender: Number,
    avatar: String,
    description: String,
    title: String,
    create_time: {type: Number, default: Date.now},
    last_update: Number,
    score: [{
        rec_id: String,
        score: Number,
        remark: String,
        create_time: Number
    }],
    challenge: [{
        rec_id: String,
        challenge_type: Number,
        challenge_data: String,
        create_time: Number,
        result: Number
    }],
    collect: [{
        rec_id: String,
        collect_type: Number,
        collect_data: String,
        create_time: Number
    }],
    challenge_count: Number,
    challenged_count: Number,
    challenge_qbank_count: Number,
    challenge_question_count: Number,
    provide_qbank_count: Number,
    provide_question_count: Number
})

// create a model
var Users = mongoose.model('Users', UsersSchema);
module.exports = Users;