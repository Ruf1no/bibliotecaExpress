const express = require('express');
const route = express.Router(); 
const homeController = require('./controllers/homeController');
const livroController = require('./controllers/livroController');


//rotas da aplicação
//************************************/
route.get('/',homeController.homeView)

//rota do livro com parâmetros
route.get('/livro/:id',livroController.livroView)

module.exports = route;
