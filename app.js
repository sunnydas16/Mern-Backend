const express = require('express');
const morgan = require('morgan');
const app = express();
const connection = require('./config/db')
const userModel = require('./models/user')

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
app.post('/form', (req,res) => {
    console.log(req.body) 
    res.send('submitted')
})


app.get('/register',(req,res) => {
    res.render('register')
})
app.post('/register', async (req,res) => {
    const { username , email , password , age, batch} = req.body
    console.log(req.body)

    const newUser = await userModel.create({
        username:username,   //2nd username is comming from req.body and 1st username is from userSchima
        email:email,         //2nd username is comming from req.body and 1st username is from userSchima
        password: password,  //2nd username is comming from req.body and 1st username is from userSchima
        age:age,              //2nd username is comming from req.body and 1st username is from userSchima
        batch:batch
    })

    res.send('Registered sucessfully')
})

app.get('/get-user', (req,res) => {
    userModel.findOne({
        username: 'a'
    }).then((user) => {
        res.send(user)
    })
})

app.get('/update-user', async (req,res) => {
    await userModel.findOneAndUpdate({
        username: 'a'
    },{
        email: "atz@gmail.com"
    })
    res.send("user Updated")
})

app.get('/delete-user', async (req,res) => {
    await userModel.findOneAndDelete({
        username: 'q'
    })
    res.send('user Deleted')
})


app.listen(3000)
