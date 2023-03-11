const Message = require('../Models/Message')

const MessageCtrl = {}

MessageCtrl.getMessages =  async (req, res) => {
    const messages = await Message.find()
    res.json(messages)
}

MessageCtrl.createMessage =  async (req, res) => {
    const message = new Message (req.body)
    await message.save()
    res.json({
        'status': "Guardado"
    })
}

MessageCtrl.getMessage = async (req, res) => {
    const message = await Message.findOne({_id: req.params.id})
    res.send(message)
}
MessageCtrl.updateMessage = async (req, res) => {
    const message = await Message.findByIdAndUpdate(req.params.id, req.body)
    res.json(
        {status: 'Actualizado'}
    )
}
MessageCtrl.deleteMessage = async (req,res) =>{
    await Message.findByIdAndDelete({_id: req.params.id})
    res.json({
        'status': "Eliminado"
    })  
}

module.exports = MessageCtrl;