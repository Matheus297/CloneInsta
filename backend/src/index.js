const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')


const app = express();

const server = require('http').Server(app)
const io = require('socket.io')(server) // invia requisiçoes para usuariuos conectados

mongoose.connect('mongodb+srv://insta:insta@cluster0-azi2w.mongodb.net/insta?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use((req,res, next) => {
    req.io = io

    next() // pra ele n parar
})

app.use(cors())

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized'))) // 

app.use(require('./routes'))

server.listen(3001)