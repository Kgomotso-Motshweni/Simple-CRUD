const express = require('express')
const app = express();
const bodyparser = require('body-parser')

const {register} = require('../controllers/register');
const {login} = require('../controllers/login');
const {createPost} = require('../controllers/createPost');
const {getPost} = require('../controllers/getPost')
const {deletePost} = require('../controllers/deletePost');
const { editPost } = require('../controllers/editPost');


app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());



app.post('/register',register)
app.post('/login',login)
app.post('/createPost',createPost)
app.get('/getPost/:id',getPost)
app.post('/deletePost',deletePost)
app.put('/editPost',editPost)



module.exports = app