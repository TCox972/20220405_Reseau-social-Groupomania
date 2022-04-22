//Import des packages
const express = require('express')
const router = express.Router()

//Récupération de la logique métier
const strongPassword = require('../middleware/strong-password')
const userCtrl = require('../controllers/user')


//Mise en place des routes
router.post('/signup', strongPassword, userCtrl.signup)
router.post('/login', userCtrl.login)

module.exports = router