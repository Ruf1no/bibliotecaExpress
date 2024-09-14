const porta = 3000
const express = require('express');
const app = express();
const routes = require('./routes');


//configurações da aplicação
app.use(
    express.urlencoded(
        {
            extended:true
        }
    )
)

//Entre a riquisição e a resposta existe o middleware, essa linha cadastra todos os que tem '/' com o route
app.use('/',routes); 


//Coloca o servidor no ar
app.listen(porta,()=>{
    console.log('Servidor Executando')
    console.log('Porta: ',porta)
    console.log('URL: ','http://localhost:' + porta)
})

