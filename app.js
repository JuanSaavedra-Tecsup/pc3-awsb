const express = require('express');
const app = express();
const morgan = require('morgan');
const moongose = require('mongoose');
// conectar a la bd
moongose.connect('mongodb://localhost/examenubes').then(db => console.log('DB connected')).catch(err => console.log(err));

// importar routes
const indexRoutes = require('./routes/index');

// configuracion
const path = __dirname + '/views/';
const port = 3000;
app.engine('html', require('ejs').renderFile);
app.set('view engine','ejs');
// middlewares

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/',indexRoutes);


// iniciando el servidor
app.listen(port, () =>{
    console.log('Servidor en el puerto 3000')
});