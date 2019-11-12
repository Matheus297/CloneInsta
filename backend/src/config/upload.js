const multer = require('multer')
const path = require('path') //formata caminhos entre windows


module.exports = {
    storage: new multer.diskStorage({ // salvar imagens
        destination: path.resolve(__dirname, '..', '..', 'uploads'), // local onde salvar e caminho 
        filename: function(req, file, cb) {
            cb(null,file.originalname) // pqassando ma callback pra ser o nome original
        }
    })
}