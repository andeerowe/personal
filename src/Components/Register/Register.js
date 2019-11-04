import React, {Component} from 'react'
import './register.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateUser} from '../../ducks/reducer'

class Register extends Component{
    constructor(){
        super()

        this.state ={
            firstName:'',
            lastName: '',
            email: '',
            password:''
        }   
}

handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
    // console.log(this.state.password)
}
handleRegister = () => {
    axios.post('/auth/register', {
        email:this.state.email,
        password:this.state.password, 
        firstName:this.state.firstName, 
        lastName:this.state.lastName
    })
    .then(res => {
        this.setState({
            firstName:'',
            lastName: '',
            email: '',
            password: ''
        })
        this.props.updateUser(res.data)
        this.props.history.push('/')
    })
    .catch(err => console.log(err))
}
    render(){
        return(
            <div id="register-page"> 
                <section id='register-img'>
                    <div id='register-info-box'>
                        <h1>WELCOME TO COVENTRY CANDLES</h1>
                        <p>By creating an account, you can track your orders, update and save favorites, edit billing/shipping info and more.</p>
                        
                    </div>
                
                </section>
                <section id="register-inputs-container">
                        <h3>ALREADY HAVE AN ACCOUNT?</h3> 
                        
                        <h4 id="login-link"><Link to="/login">LOG IN</Link></h4>
                        <label> First Name: </label>
                        <br />
                        <input name="firstName" onChange={(e)=>{this.handleChange(e)}} placeholder="Enter your first name"/>
                        <br />
                        <label> Last Name: </label>
                        <input name="lastName" onChange={(e)=>{this.handleChange(e)}} placeholder="Enter your last name"/>
                        <br/>
                        <label> Email:</label>
                        <br />
                        <input name="email" onChange={(e)=>{this.handleChange(e)}} placeholder="Enter your email"/>
                        <br/>
                        <label> Password:</label>
                        <br />
                        <input name="password" onChange={(e)=>{this.handleChange(e)}} placeholder="Create a password"/>
                        <div id="extra-register-border">
                            <button onClick={this.handleRegister}> Register </button>
                        </div>
                        

                </section>
            </div>
        )
    }
}

const mapDispatchToProps = {
    updateUser
}

export default connect(null, mapDispatchToProps)(Register)