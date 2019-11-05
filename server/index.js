require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET, AWSSecretKey} = process.env
const app = express()
const authCtrl = require('./controllers/authController')
const mainCtrl = require('./controllers/mainController')


// aws.config, require aws - sdk
app.use(express.json())

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie:{maxAge: 1000 * 60 * 60}
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
})

const port = SERVER_PORT

// Auth Endpoints
app.post('/auth/login', authCtrl.login)
app.post('/auth/register', authCtrl.register)
app.post('/auth/logout', authCtrl.logout)
app.get('/auth/getUser', authCtrl.getUser)

// Main Endpoints
app.get('/api/products', mainCtrl.getProducts)
app.get('/api/item/:id', mainCtrl.getSpecificProduct)
app.post('/api/cart', mainCtrl.addToCart)
app.get('/api/cart', mainCtrl.getCart)

app.listen(port, () => {console.log(`Server running on port: ${port}`)})