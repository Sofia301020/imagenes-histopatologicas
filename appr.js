require('dotenv').config()
const express = require('express')

const app = express()

app.get('/',(req,res) => {
console.log('Peticion recibida')

res.send('<h1>Hola mundo </h1>')
})

const puerto = process.env.puerto || 4000

app.listen(puerto, () => {
   console.log('Servidor escucha en el puerto 4000')

  }) 