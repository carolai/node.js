var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');
var uuid = require('node-uuid');
var generarUsuario = function(){
  var randomUuid = faker.random.uuid();
  var randomName = faker.name.findName();
  var randomWords = faker.random.words();
  var randomDate = faker.date.past();
  var randomImage = faker.image.image();
  return {
    id: randomUuid,
    nombre: randomName,
    contenido: randomWords,
    fecha: randomDate,
    imagen: randomImage
  
  }

}

app.get('/', function (req, res) {
  res.send('Mi primer servidor!');
})

app.get('/friends', function (req, res) {
  var cantidad = _.random(3,5)
  var usuarios = _.times(cantidad, generarUsuario)
  res.json(usuarios);
})

app.get('/amigos', function (req, res) {
  res.send('Mis amigos');
})


app.listen(3000);
                      