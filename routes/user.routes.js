const router = require('express').Router();
const userCtrl= require('../controllers/usersController.js')
const User = require('../models/User.model.js');

// REGISTER
//---------------- patron PRG ----------------

// get nos redirige a la vista del form para el register.
router.get('/register', (req, res, next) => { 
    try { 
        console.log('VISTA DE CREAR')
        res.render('user/register')

    } catch (err) {
        console.log('error', err)
    }
})

// POST no hace la instancia en la DB.

router.post('/register', userCtrl.createUser);
// POST update user

// router.get('/:id', (req, res, next) => { 
//     try { 
//         const user = User.find(req.params.id)
//         res.render('/user/')
//     } catch (err) {
//         console.log('el error es ', err)
//     }
// })

router.get("/aa", (req, res, next) => {
    console.log(req.flash())
    req.flash('info', 'Flash is back!')
    res.redirect('/user/aaa');
})
router.get("/aaa", (req, res, next) => {
    console.log(req.flash())
    res.render('index', { message: req.flash('info') });
})
// router.get('/:id/edit',  
    
// )
router.post('/:id/edit', userCtrl.updateUser);

module.exports = router;