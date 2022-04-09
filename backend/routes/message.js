const express = require('express')
const router = express.Router()

const messageCtrl = require('../controllers/message')
const { route } = require('./user')

router.post('/', messageCtrl.createMessage)
router.post('/:id/like', messageCtrl.likeMessage)
router.get('/', messageCtrl.readAllMessage)
router.put('/:id', messageCtrl.modifyMessage)
router.delete('/:id', messageCtrl.deleteMessage)

module.exports = router;