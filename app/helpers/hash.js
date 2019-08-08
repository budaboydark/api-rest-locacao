const argon2 = require('argon2')
module.exports = function (){
    this.getHash = async (stringPassword) => {
        return await argon2.hash(stringPassword)
    }

    this.verifyHash = async (hash, stringPassword) => {
        if(await argon2.verify(hash, stringPassword)){
            return true
        }else{
            return false
        }
    }
    
    return this
}