const mongoose = require('mongoose');



const {Schema} = mongoose

const ChatSchema = new Schema({
    Usuario_id: {type: Number, required: true},
    Administrador_id: {type: Number, required: true},
    Mensaje: {type: String, required: true},

},{
    timestamps: true,
    versionKey: false
}
);

module.exports = mongoose.model('Chat', ChatSchema);