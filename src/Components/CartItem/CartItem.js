import React, {Component} from 'react'
import './cartItem.css'
import axios from 'axios'
import {updateCart} from '../../ducks/reducer'
import {connect} from 'react-redux'

class CartItem extends Component{
    constructor(){
        super()

        this.state ={
            quantity: 0,
            cart: []
        }   
}

updateQuantity = (value) => {
    // console.log('updateQuantity function hit', value)
    // console.log(this.props.candle.product_id)
    axios.put('/api/cart',{id: this.props.candle.product_id, quantity: value})
    .then(res => {
        console.log('Quantity updated', res.data)
        this.props.updateCart(res.data)
    })
    .catch(err => console.log(err))
}

deleteItem = () => {
    axios.delete(`/api/cart/${this.props.candle.product_id}`)
    .then(res => {
        console.log('item deleted', res.data)
        this.props.updateCart(res.data)
    })
    .catch(err => console.log(err))
}
    render(){
        // console.log(this.props.candle.quantity)
        // console.log(this.state.quantity)
        return(
            <div id="cart-item-container">
                
                    <img id="cart-item-img" src={this.props.candle.img} alt="candle" />

                    <section id="cart-item-info">
                        <div><b>{this.props.candle.name}</b></div>
                        <div>{this.props.candle.size}</div>
                        <div>${this.props.candle.price}.00 ea</div>
                    </section>
                    
                

                <section id="edit-section">
                    <button id="x-button" onClick={() => this.deleteItem()}> X </button>
                    <div>
                        QUANTITY
                        <br />
                        <select onChange={(e) => this.updateQuantity(e.target.value)}>
                            <option> {this.props.candle.quantity} </option>
                            <option> 1 </option>
                            <option> 2 </option>
                            <option> 3 </option>
                            <option> 4 </option>
                            <option> 5 </option>
                            <option> 6 </option>
                        </select>
                    </div>
                </section>

            </div>
        )
    }
}

const mapDispatchToProps = {
    updateCart
}

export default connect(null, mapDispatchToProps)(CartItem)