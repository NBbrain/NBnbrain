var Users = require('./usersModel.js');
var qBanks = require('./qbankModel.js');
var app = require('../app.js');

var users = new Users;
var qbanks = new qBanks;
export default{
    UserMsg *(){
        return yield users.findOne({user_id:'00000001'});
    }
    
} 

// function fetch(url, options={}){
//     let opt = Object.assign({
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         }
//     }, options)
    
// }