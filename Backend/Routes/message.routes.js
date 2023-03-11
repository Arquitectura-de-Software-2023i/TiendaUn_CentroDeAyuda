const express = require('express')
const  MessageCtrl = require('../Controllers/message.controllers')
const router = express.Router()

router.get('/', MessageCtrl.getMessages)
router.post('/', MessageCtrl.createMessage)
router.get('/:id', MessageCtrl.getMessage)
router.put('/:id', MessageCtrl.updateMessage)
router.delete('/:id', MessageCtrl.deleteMessage)


module.exports = router