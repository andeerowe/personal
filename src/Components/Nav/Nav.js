import React, {Component} from 'react'
import './nav.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import {updateUser} from '../../ducks/reducer'

class Nav extends Component{
    constructor(){
        super()

        this.state ={

        }   
}
    componentDidMount = () => {
        axios.get('/auth/getUser')
        .then(res => {
            this.props.updateUser(res.data)
        })
        
    }
    render(){
        console.log(this.props.user.user_id)
        if(!this.props.user.user_id){
            return(
                // IF NO SESSION.USER EXISTS
                <nav className="main-container">
                    <div className="top-nav-container">
                        
                            <div className="logo-container">
                                 <Link to="/">
                                 <img id="top-logo" src="https://coventry-candles.s3.us-east-2.amazonaws.com/logo114.png" alt="logo"/>    
                                </Link> 
                            </div>
                        
                        <div className="right-side-container">
                            <section id="user-login-container">
                                <div>
                                <i className="fas fa-user-circle fa-lg"></i>
                                </div>
                                
                               
                                        <Link to='./login'>
                                            <div id="login">
                                                LOGIN
                                            </div>
                                        </Link>
                                
                                
                                
                                
                             </section>
                             
                            <section>
                                <i className="fas fa-search fa-lg"></i>
                            </section>
                            <section>
                                <Link to="/cart">
                                    <i className="fas fa-shopping-bag fa-lg"></i>
                                </Link>
                                
                            </section>
                        </div>
                    </div>
                    
                    <div className="menu-container">
                        
                        <section id='shop'>
                            <Link to="/products">
                                SHOP
                            </Link>
                        </section>
                        
                        
                            <section id='discover'>
                                <Link to="/">
                                    DISCOVER
                                </Link>
                            </section>
                        
                    </div>
                </nav>
            )
        } else {
            return(
                // IF A SESSION.USER DOES EXIST
                <nav className="main-container">
                    <div className="top-nav-container">
                        
                            <div className="logo-container">
                                <Link to="/">
                                    <img id="top-logo" src="https://coventry-candles.s3.us-east-2.amazonaws.com/logo114.png" alt="logo"/> 
                                    
                                </Link> 
                            </div>
                        
                        <div className="right-side-container">
                            <section id="user-login-container">
                                <div>
                                <i className="fas fa-user-circle fa-lg"></i>
                                </div>
                                
                               
                                        <Link to="/user">
                                            <div id="login">
                                                {`${this.props.user.first_name} ${this.props.user.last_name}`}
                                                
                                                
                                            </div>
                                        </Link>
                                
                                
                                
                                
                             </section>
                             
                            <section>
                                <i className="fas fa-search fa-lg"></i>
                            </section>
                            <section>
                                <Link to="/cart">
                                    <i className="fas fa-shopping-bag fa-lg"></i>
                                </Link>
                                
                            </section>
                        </div>
                    </div>
                    
                    <div className="menu-container">
                        
                        <section id='shop'>
                            <Link to="/products">
                                SHOP
                            </Link>
                        </section>
                        
                        
                            <section id='discover'>
                                <Link to="/">
                                    DISCOVER
                                </Link>
                            </section>
                        
                    </div>
                </nav>
            )
        }
        
    }
}

const mapStateToProps = reduxState => {
    return {
        user: reduxState.user
    }
}

const mapDispatchToProps = {
 updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)