import React, {Component} from 'react'
import './nav.css'

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
                         
                    </div>
                    <div className="right-side-container">
                        <section id="user-login-container">
                            <div>
                            <i class="fas fa-user-circle fa-lg"></i>
                            </div>
                            <div>
                                LOGIN
                            </div>
                            
                            
                         </section>
                         
                        <section>
                            <i class="fas fa-search fa-lg"></i>
                        </section>
                        <section>
                            <i class="fas fa-shopping-bag fa-lg"></i>
                        </section>
                    </div>
                </div>
                
                <div className="menu-container">
                    <section id='shop'>
                        SHOP
                    </section>
                    <section id='discover'>
                        DISCOVER
                    </section>
                </div>
            </nav>
        )
    }
}

export default Nav