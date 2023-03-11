const express = require('express');

const app = express();
const morgan = require('morgan')
const {mongoose} = require('./database')
//Settings
app.set('port', 3000)

//Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
//Routes
app.use('/api/message', require('./Routes/message.routes'))
app.use('/api/chat', require('./Routes/chat.routes'))

//Star Server
app.listen(app.get('port'), ()=> {
    console.log('Server on port', app.get('port'))
});
