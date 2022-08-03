//Forma antigua de importar paquetes
//const express = require('express')

//forma moderna de importar paquetes
import express from 'express'

//funcionalidad generica de express
const app = express() //express es una funcion

//Codificando los servicios, URI, funcion anonima
app.get('/comfama/api/v1', function (req, res) {
  res.send('Hello World')
})

//Levantar el servidor
app.listen(3000)