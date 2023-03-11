const express = require('express')
const  ChatCtrl = require('../Controllers/chat.controllers')
const router = express.Router()

router.get('/', ChatCtrl.getchats)
router.post('/', ChatCtrl.createchat)
router.delete('/:id', ChatCtrl.deletechat)


module.exports = router