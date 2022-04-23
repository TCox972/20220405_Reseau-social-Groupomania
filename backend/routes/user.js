//Import des packages
const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
//Récupération de la logique métier
const strongPassword = require('../middleware/strong-password')
const userCtrl = require('../controllers/user')


//Mise en place des routes
router.post('/signup', strongPassword, userCtrl.signup)
router.post('/login', userCtrl.login)
router.get('/myaccount/:id', auth, userCtrl.getAccount)
router.put('/myaccount/:id',auth, userCtrl.modifyAccount)
router.delete('/myaccount/:id', auth, userCtrl.deleteAccount)

module.exports = router