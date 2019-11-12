const express = require('express')
const multer = require('multer')
const uploadsConfig = require('./config/upload')

const routes = express.Router()
const upload = multer(uploadsConfig)


const PostController = require('./controllers/PostController')
const LikeController = require('./controllers/LikeController')

routes.get('/posts', PostController.index)
routes.post('/posts', upload.single('image'), PostController.store)  // metodo e o arquivo


routes.post('/posts/:id/like', LikeController.store)

module.exports = routes