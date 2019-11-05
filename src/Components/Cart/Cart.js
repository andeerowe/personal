import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {updateCart} from '../../ducks/reducer'
import CartItem from '../CartItem/CartItem'
import './cart.css'


class Cart extends Component{
    constructor(){
        super()

        this.state ={
        }   
}
componentDidMount = () => {
    axios.get('/api/cart')
    .then(res => {
        this.props.updateCart(res.data)
    })
    .catch(err => console.log(err))
}

    render(){
        if(this.props.cart[0]){
          console.log(this.props.cart[0].name)  
        }
        
        return(
            <div id="cart-page">
                <div id="cart-title">YOUR SHOPPING BAG <div id="placeholder">a </div> <i class="far fa-smile"></i></div>
                {this.props.cart[0] ? (
                    <div>{this.props.cart.map((e,i) => {
                        return (
                            <CartItem 
                                key={i}
                                candle={e}
                                />
                        )
                    })} </div>
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

const mapStateToProps = reduxState => {
    return{
        cart: reduxState.cart
    }
}

const mapDispatchToProps = {
    updateCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)