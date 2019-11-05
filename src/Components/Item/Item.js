import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import './item.css'
import {Link} from 'react-router-dom'
import {updateCart} from '../../ducks/reducer'

class Item extends Component{
    constructor(){
        super()

        this.state ={
            name:'',
            collection:'',
            size: '',
            price: 0,
            scent: '',
            description: '',
            img: '',
            quantity: 1
        }   
}

componentDidMount = () => {
    axios.get(`/api/item/${this.props.id}`)
    .then(res => {
        this.setState({
            name: res.data.name,
            collection: res.data.collection,
            size: res.data.size,
            price: res.data.price,
            scent: res.data.scent,
            description: res.data.description,
            img: res.data.img,
            quantity: this.state.quantity
        })
        console.log(this.state.scent)
    })
    .catch(err => console.log(err))
}
handleAddToCart = () => {
    axios.post('/api/cart', {
        name: this.state.name,
        collection: this.state.collection,
        size: this.state.size,
        price: this.state.price,
        scent: this.state.scent,
        description: this.state.description,
        img: this.state.img,
        quantity: this.state.quantity
    })
    .then(res => {
        console.log('then hit', res.data)
        this.props.updateCart(res.data)
    })
    .catch(err => console.log(err))
}

handleQuantityChange = (value) => {
    this.setState({
        quantity: value
    })
}
    render(){
        console.log(this.props)
        return(
            <div id="item-container">
                <img id="product-img" src={this.state.img} alt="product"/>
                <div id="item-info-container">
                    <h1>{this.state.name}, {this.state.size}</h1>
                    <h3 id="item-collection">{this.state.collection} Collection</h3>
                    <h3>${this.state.price}.00</h3>
                </div>
                <div id="options-box">
                    <section id="quantity-container">
                        QUANTITY
                        <select onChange={(e) => console.log(e.target.value)}> 
                            <option value="1" >1</option>
                            <option value="2" >2</option>
                            <option value="3" >3</option>
                            <option value="4" >4</option>
                            <option value="5" >5</option>
                        </select> 
                    </section>
                    <div id="border-add-to-cart">
                        <button onClick={() => this.handleAddToCart()}>Add to Bag</button>
                    </div>
                </div>
                <div id="spacer">
                    <h5>ITEM DETAILS</h5>
                    <img id="underline-img" src="https://coventry-candles.s3.us-east-2.amazonaws.com/Untitled+design.png" alt="details"/>
                    <br/>
                    {this.state.description}
                    <br />
                    <br />
                    <Link id="back-to-shopping" to="/products">BACK TO SHOPPING</Link>
                </div>
                
                
                


            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        id: reduxState.selectedProductId
    }
    
}

const mapDispatchToProps = {
    updateCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)