const express = require('express')
require('dotenv').config()

const app = express()

app.get('/',(req,res) => {
console.log('Peticion recibida')

res.status(200).send('<h1>Hola mundo!!! </h1>')
})

const puerto = process.env.puerto || 4000

app.listen(puerto, () => {
console.log('Servidor escucha en el puerto  4000')

  }) 