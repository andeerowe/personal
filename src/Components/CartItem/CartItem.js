import React, {Component} from 'react'
import './cartItem.css'

class CartItem extends Component{
    constructor(){
        super()

        this.state ={

        }   
}
    render(){
        return(
            <div id="cart-item-container">
                {this.props.candle.name}
                <br/>
                {this.props.candle.scent}
                <br />
                {this.props.candle.quantity}

            </div>
        )
    }
}

export default CartItem