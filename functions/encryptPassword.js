const bcrypt = require('bcrypt');

module.exports = function (password, callback){
    bcrypt.hash(password, 10, function(err, hash) {
        if (err){
            callback(false)
        }else{
            callback(hash)
        }
    });
}