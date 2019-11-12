const Post = require('../models/Post')
const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

module.exports = {
    async index(req,res) {
        const posts = await Post.find().sort('-createdAt') // os posts mais recentes serão os primeiros
         return res.json(posts)
    
    },

    async store(req, res) {
        const {author,place,description, hashtags} = req.body
        const {filename: image} = req.file

        const [name] = image.split('.')
        const fileName = `${name}.jpg`

        
        await sharp(req.file.path) // caminho ate onde foi salvo
        .resize(500)
        .jpeg({quality: 70 })
        .toFile(
            path.resolve(req.file.destination, 'resized', fileName)  // chegar na pasta resized
            )
            fs.unlinkSync(req.file.path)
            
        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image: fileName,
        })

        req.io.emit('post', post) // dados envidos para usuarios conectados

        return res.json(post)
    }
}