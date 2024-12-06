const express = require('express');
const morgan = require('morgan');
const app = express();
const connection = require('./config/db')  <------ Main part mongodb in app
const userModel = require('./models/user') <------ Main part mongodb in app

app.set('view engine','ejs')
app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended:true }))


app.get('/',(req,res) => {
    res.render('index')
})

app.post('/formhai', (req,res) => {
    console.log(req.body)
    res.send('Ho gaya submit')
})

app.get('/register',(req,res) => {
    res.render('register')
})



app.post('/form', (req,res) => {
    console.log(req.body) 
    res.send('submitted')
})







app.get('/about',(req,res) => {
    res.send('this is about page')
})

app.get('/company',(req,res) => {
    res.send('comapny this is')
})


app.listen(3000)
