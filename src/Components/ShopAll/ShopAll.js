import React, {Component} from 'react'
import axios from 'axios'
import Product from '../Product/Product'
import './shopall.css'
// import {Link} from 'react-router-dom'
import {selectProductId} from '../../ducks/reducer'
import {connect} from 'react-redux'

class ShopAll extends Component{
    constructor(){
        super()

        this.state ={
            products: [
                {price:1},
                {price:2}
            ]
        }   
}

componentDidMount = () => {
    axios.get('/api/products')
    .then(res => {
        this.setState({
            products: res.data
        })
        // console.log(res.data)
    })
    .catch(err => console.log(err))
}

handleItemSelection = (productId) => {
    console.log('handleItemSelection function fired')
    console.log(productId)
    this.props.selectProductId(productId)
    this.props.history.push('/item')
}
    render(){

        return(
            <div id="shopAll-page">
                <div id="shopAll-img-container">
                    <section id="shopAll-info">
                        <div id="shopAll-path">Collections / Shop All</div>
                        
                        
                        <img id="candles" src="https://coventry-candles.s3.us-east-2.amazonaws.com/shopAllCandles.png" alt="candles"/>
                        
                        <div id="social-container">
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-pinterest"></i>
                        </div>
                        

                    </section>
                </div>
            <section id="shopAll-menu">
                
            </section>
                
            <div id="products-container">
                
                {this.state.products.map((element,i) => {
                    // console.log(e)
                    return (
                        <div key={i} onClick={() => this.handleItemSelection(element.product_id)}>
                        <Product
                        key={i}
                        product={element}
                            />
                        </div>
                    
                    )
                    
                    
                })}
                
            </div>
            
            </div>
        )
    }
}

const mapDispatchToProps = {
    selectProductId
}

export default connect(null, mapDispatchToProps)(ShopAll)