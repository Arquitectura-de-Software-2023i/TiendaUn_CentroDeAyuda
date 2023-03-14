const mongoose = require('mongoose')

const URI = 'mongodb+srv://AngelSilva2002:TiendaUnCentroAyudaDB@cluster0.vjkqt.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    
})
    .then(db=> console.log('DB is connected'))
    .catch(err => console.error(err))
module.exports = mongoose; 