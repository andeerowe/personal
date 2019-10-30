require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const {CONNECTION_STRING,SERVER_PORT, SESSION_SECRET} = process.env
const app = express()
const authCtrl = require('./controllers/authController')
const mainCtrl = require('./controllers/mainController')

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

// Main Endpoints

app.listen(port, () => {console.log(`Server running on port: ${port}`)})