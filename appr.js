const express = require('express')
require('dotenv').config()

const app = express()
app.use(express.static('public'));

app.get('/',(req,res) => {
console.log('Peticion recibida')

res.status(200).sendFile('index.html',{root: __dirname})
})

const puerto = process.env.puerto || 4000

app.listen(puerto, () => {
console.log('Servidor escucha en el puerto  4000')

  }) 