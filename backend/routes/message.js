const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')

const messageCtrl = require('../controllers/message')

router.post('/', auth, multer, messageCtrl.createMessage)
router.post('/:id/like', auth, messageCtrl.likeMessage)
router.get('/', auth, messageCtrl.readAllMessage)
router.put('/:id', auth, multer, messageCtrl.modifyMessage)
router.delete('/:id', auth, messageCtrl.deleteMessage)

module.exports = router;