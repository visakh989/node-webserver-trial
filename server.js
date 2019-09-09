const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
console.log(__dirname + '/public');

hbs.registerHelper('hbsGetCurrYear', ()=>{
    return new Date().getFullYear();
})

app.get('/', (req, res) =>{
    res.send({
        name:'visakh',
        likes:[
            'biking',
            'cities'
        ]
    });
});

app.get('/about', (req, res)=>{
    res.render('pagetemplate.hbs',{
        hbsPageName: 'About'
    });
});

app.listen(3000, ()=>{
    console.log('server is running..');
});