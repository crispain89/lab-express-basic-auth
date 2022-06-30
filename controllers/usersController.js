const User = require('../models/User.model.js');
const helpers = require('../helpers/password.js')


//creamos el usuario
exports.createUser = async (req, res, next) => { 
    try {
        const { password, username } = req.body
        const isStrong=helpers.validPassword(password)
        if (isStrong) {
            helpers.encriptPassword(password)
            await User.create({
                username: data.username,
                password: password
            })
            console.log('creado correctamente')
        } else { 
            req.flash('info', 'Flash is back!')
            res.redirect('/');
            //req.flash('ERROR la contraseña no cumple los requisitos necesarios.','error')
        }
    } catch (err) { 
        req.flash('hay un erro y es este :', err)
    }
}


exports.updateUser = async (req, res, next) => { 
    try {
        const user= req.body
        User.findByIdAndUpdate(req.body)
        console.log('actualizado');
    } catch (err) {
        console.log('el error es ', err)
     }
}
