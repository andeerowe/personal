import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {updateCart} from '../../ducks/reducer'
import CartItem from '../CartItem/CartItem'
import './cart.css'
import {Link} from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'
// import { ToastContainer, toast } from 'react-toastify'
// import "react-toastify/dist/ReactToastify.css"
const Swal = require('sweetalert2')



class Cart extends Component{
    constructor(){
        super()

        this.state ={
            total: 0,
            // test: 0
        }   
}
 componentDidMount (){
    axios.get('/api/cart')
    .then(res => {
        this.props.updateCart(res.data)
        this.calculateTotal()
    })
    .catch(err => console.log(err))
    // await this.calculateTotal()
    
}
// component did update check to see if redux updated, pass in this.prevProps if statement !== this.props.cart inside this.render()
componentDidUpdate(prevProps){
    if (this.props.cart !== prevProps.cart){
        console.log('component did update', prevProps.cart, this.props.cart)
        // this.render()
        this.calculateTotal()
    }
}

calculateTotal = () => {
    // console.log('hello world')
    let count = 0
    for (let i = 0; i < this.props.cart.length; i++){

               count += this.props.cart[i].price * this.props.cart[i].quantity
            //    console.log(count)
            }
    this.setState({
        total: count
    })

    this.render()
    

}

 handleToken = (token, addresses) => {
    // console.log({token, addresses})
    axios.post('/checkout')
    .then(res => {
        console.log('hit')
        console.log(this.props.cart)
        axios.delete('/api/checkout')
        this.props.updateCart(res.data)
        Swal.fire({
            title: 'Success!',
            text: 'Thank you for shopping Coventry Candles!',
            icon: 'success',
            confirmButtonText: 'OKAY'
          })

    })
    .catch(err => console.log(err))

}

    render(){
        console.log('this.props.cart', this.props.cart)
        // console.log(this.props.cart)
        // this.calculateTotal()
        let num = this.state.total * 0.08
        let tax = num.toFixed(2)
        if(this.props.cart === "OK" || !this.props.cart[0]){
            console.log('hit first render')
            return(
                <div>
                   
                    <br />
                    <div id="cart-title">YOUR SHOPPING BAG <div id="placeholder">a </div> <i className="far fa-smile"></i></div>
                    <Link id="start-shopping" to="/products"> 
                    <img id="empty-bag-img" src="https://coventry-candles.s3.us-east-2.amazonaws.com/YOUR+BAG+IS+EMPTY.png" alt="broke"/>
                    </Link>
                    
                </div>
            )
        } else {
        
        return(
            <div id="cart-page">
                
                <div id="cart-title">YOUR SHOPPING BAG <div id="placeholder">a </div> <i className="far fa-smile"></i></div>
                {this.props.cart[0] ? (
                    <div className="container">{this.props.cart.map((e,i) => {
                        return (
                            <div id="mapped-item-container">
                                <CartItem 
                                calculateTotal={this.calculateTotal}
                                key={i}
                                candle={e}
                                />
                            </div>
                        )
                    })} 
                   <div id="total-container">
                       <section >
                        <h2>ORDER SUBTOTAL :</h2>
                        
                       </section>

                       <h2 className="underline-me">${this.state.total}.00</h2>
                       <p id="free-shipping">CONGRATULATIONS, YOUR ORDER QUALIFIES FOR FREE SHIPPING!</p>
                       <h3>SHIPPING: $0.00</h3>
                       <h3 className="underline-me"> ESTIMATED TAXES: ${tax}</h3>
                       <h2>ORDER TOTAL :</h2>
                       <h2>${this.state.total + num}</h2>
                       <StripeCheckout 
                        stripeKey="pk_test_nQNj2a2l3mUcP32v4fKDKP5w00L4WSJzqs"
                        token={this.handleToken}
                        // billingAddress
                        // shippingAddress
                        amount={(this.state.total + num) * 100}
                        name="Coventry Candle Purchase"

                    />
                    <br />
                    <Link id="back-to-shopping" to="/products">CONTINUE SHOPPING</Link>
                    </div>
                    
                    
                    
                    </div>
                    
                ): (
                    <div>
                        Loading...
                    </div>
                )
            }
              
            </div>
        )
    }
}
}

const mapStateToProps = reduxState => {
    return{
        cart: reduxState.cart
    }
}

const mapDispatchToProps = {
    updateCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)