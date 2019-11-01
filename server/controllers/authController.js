const bcrypt = require('bcryptjs')

module.exports = {
    login: async (req,res) => {
        //first we destructure the information from the axios request so we can more easily reference it throughout the function
        const {email, password} = req.body
        const db = req.app.get('db')

        // in this section we make sure the email entered exists in our database, if not, we will send an error and tell the user to register 
        let foundUser = await db.check_email(email)
        foundUser = foundUser[0]
        if(!foundUser){
            res.status(401).send('Email not found, please check email and try again or Create New Account')
        }
        //if the email does exist, we will compare the password entered by the user to the encyrpted password stored in our database
        let authenticated = bcrypt.compareSync(password, foundUser.password)

        // if the passwords match, we set the users info to the session, if not we send an error

        if(authenticated){
            delete foundUser.password
            req.session.user = foundUser
            res.status(202).send(req.session.user)
        } else {
            res.status(401).send("Incorrect Password")
        }
        console.log(`req.session.user = ${req.session.user}`)
        
    },
    register: async (req, res) => {
        // first we destructure the information from the axios request so we can more easily reference it throughout the function

        const {email, password, firstName, lastName} = req.body
        const db = req.app.get('db')
        
        // this section checks to see if the entered email already exists in our database

        let foundUser = await db.check_email(email)
        foundUser = foundUser[0]
        if(foundUser){
            res.status(409).send('An account associated with this email already exists. Please Log In')
        }
        // if the email doesn't exist, we move down to encrypting the password the user entered for more secure database storage

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        // here we add the users info into our database and add the user to the session

        let newUser = await db.register(email, hash, firstName, lastName)
        newUser = newUser[0]
        req.session.user = newUser
        res.status(200).send(req.session.user)
    },
    logout: (req,res) => {
        // when the user logs out, their session is destroyed
        req.session.destroy()
        res.sendStatus(200)
    },
    getUser: (req,res) => {
        if(req.session.user){
            res.status(200).send(req.session.user)
        }
        res.sendStatus(200)
    }

}