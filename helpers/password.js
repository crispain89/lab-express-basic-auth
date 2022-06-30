// para encriptar la contraseña
const bcrypt = require('bcryptjs')
const validator = require('validator')


// Aqui le pasaremos la contraseña que nos va encriptar.
exports.encriptPassword = (password) => { 
    const saltRounds = 10;
    const salt=bcrypt.genSaltSync(saltRounds)
    const passwordHash = bcrypt.hashSync(password, salt)
    console.log(passwordHash)
    return passwordHash
}

exports.validPassword = (password) => { 

    if (!validator.isStrongPassword(password)) {
        return false
    }return true  
}