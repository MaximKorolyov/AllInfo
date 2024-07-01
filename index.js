const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const homeRoutes = require('./routes/home');
const b_listRoutes = require('./routes/B_list');
const authRoutes = require('./routes/auth');
const regRoutes = require('./routes/reg');

const app = express();
const PORT = 4000;


const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    console.log(`path: ${req.path}`);
    console.log(`method: ${req.method}`);
    next();
})

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));


app.use('/', homeRoutes);
app.use('/boards-list', b_listRoutes);
app.use('/auth', authRoutes);
app.use('/reg', regRoutes);




app.listen(PORT, () => {
    console.log(`Сервер работает на ${PORT} порту`)
});