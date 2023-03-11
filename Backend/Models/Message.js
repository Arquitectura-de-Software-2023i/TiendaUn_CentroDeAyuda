const mongoose = require('mongoose');

const {Schema} = mongoose

const MessageSchema = new Schema({
    Solicitud: {type: String, required: true},
    Motivo: {type: String, required: true},
    Mensaje: {type: String, required: true},
    Usuario_id: {type: Number, required: true}

},{
    timestamps: true,
    versionKey: false
}
);

module.exports = mongoose.model('Bot', MessageSchema);