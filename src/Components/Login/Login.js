import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './login.css'
import axios from 'axios'

class Login extends Component{
    constructor(){
        super()

        this.state ={
            email: 'Enter your email',
            password: 'Enter your password'
        }   
}

handleEmailChange = (value) => {
    this.setState({
        email: value
    })
    console.log(`This.state.email is = ${this.state.email}`)
}

handlePasswordChange = (value) => {
    this.setState({
        password: value
    })
    console.log(`This.state.password is =${this.state.password}`)
}
handleLogin = () => {
    axios.post('/auth/login', {email:this.state.email, password:this.state.password})
    .then(res => {
        this.setState({
            email: 'Enter your email',
            password: 'Enter your password'
        })
        // send res.data to redux through action function on this.props
        this.props.history.push('/')
    })
    .catch(err => console.log(err))
}
    render(){
        
        return(
            <div className="login-page">
                <section className="register-option">
                    <div id="brand">Brand</div>
                    <h2 id="new-customers">new customer?</h2>
                    <p> Register and create your personalized account. You can track your orders, update and save favorites, edit billing/shipping info and more.</p>
                    <div id="extra-div-border">
                        <Link to="/register">
                            <div id="create-account"> CREATE ACCOUNT </div>
                        </Link>
                    </div>
                    
                    <br/>
                    <div className="login-box">
                        <h2>My Account Log In:</h2>
                        <input 
                            onChange={(e) => {this.handleEmailChange(e.target.value)}}
                            placeholder={this.state.email}
                            />
                        <input 
                            onChange={(e) => {this.handlePasswordChange(e.target.value)}}
                            placeholder={this.state.password}
                            type="password"
                            />
                        <div className="extra-button-border">
                            <button onClick={this.handleLogin}>LOG IN</button>
                        </div>
                        
                    </div>
                </section>
                
            </div>
        )
    }
}

export default Login