//configuração do servidor
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.set('view engine', 'ejs')

//multer
const multer = require('multer')
//storage
const storage = multer.diskStorage({
    //destino
    destination: (req,res,cb) => {
        cb(null,'uploads')
    },
    //nome do arquivo
    filename: (req,file,cb) => {
        cb(null,file.originalname
            )
    }
})

//rota padrão
app.get('/',(req,res) => {
    res.render('index.ejs')
})

//upload
//middleware
app.post('/',upload.single('arquivo'), (req,res) => {
    res.send("OK")
    console.log(req.body,req.file) //apoio a lógica
})

//escuta dos servidor
app.listen(port, () => {
    console.log('servidor escutando em http://localhost:${port}')
})