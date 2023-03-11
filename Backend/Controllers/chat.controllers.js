const Chat = require('../Models/Chat')

const ChatCtrl = {}

ChatCtrl.getchats =  async (req, res) => {
    const chats = await Chat.find()
    res.json(chats)
}

ChatCtrl.createchat =  async (req, res) => {
    const chat = new Chat (req.body)
    await chat.save()
    res.json({
        'status': "Mensaje guardado"
    })
}

ChatCtrl.deletechat = async (req,res) =>{
    await Chat.findByIdAndDelete({_id: req.params.id})
    res.json({
        'status': "Eliminado"
    })  
}

module.exports = ChatCtrl;