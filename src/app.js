require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override')
const path = require('path')

//ROUTERS
const indexRouter = require('./routes/indexRouter')
const detailRouter = require('./routes/detailRouter')

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, '../public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use('/', indexRouter);
app.use('/detail', detailRouter);



//Middlewares
app.use((req, res, next) => {

    next()
})

app.listen(process.env.PORT || 3000, function(){
    console.log('Servidor corriendo en el puerto 3000');
    console.log("http://localhost:3000");
})