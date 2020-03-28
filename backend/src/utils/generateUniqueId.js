const crypto = require('crypto');

module.exports =  function geneerateUniqueId(){
    return crypto.randomBytes(4).toString('HEX');
}