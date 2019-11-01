import React, {Component} from 'react'
import './nav.css'
import {Link} from 'react-router-dom'

class Nav extends Component{
    constructor(){
        super()

        this.state ={

        }   
}
    render(){
        return(
            <nav className="main-container">
                <div className="top-nav-container">
                    
                        <div className="logo-container">
                    <Link to="/"><img id="top-logo" src="https://coventry-candles.s3.us-east-2.amazonaws.com/Coventry.png"></img> </Link> 
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
    }
}

export default Nav