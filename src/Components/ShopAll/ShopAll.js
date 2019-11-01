import React, {Component} from 'react'
import axios from 'axios'
import Product from '../Product/Product'
import './shopall.css'

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
        console.log(res.data)
    })
    .catch(err => console.log(err))
}
    render(){

        return(
            <div id="shopAll-page">
                <div id="shopAll-img-container">
                    <section id="shopAll-info">
                        Collections / Shop All
                        <br />
                        <img id="candles" src="https://coventry-candles.s3.us-east-2.amazonaws.com/shopAllCandles.png" alt="candles"/>
                        <br/>
                        We all know candles are the original joy-sparkers. We have fragrences for you, your mom & your son's second-grade teacher so get to shopping!
                        <br/>
                        <div id="social-container">
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-facebook-square"></i>
                            <i class="fab fa-pinterest"></i>
                        </div>
                        

                    </section>
                </div>
            <section id="shopall-menu">
                menu thing
            </section>
                
            <div id="products-container">
                
                {this.state.products.map((e,i) => {
                    // console.log(e)
                    return (
                    <Product
                        key={i}
                        product={e}
                         />
                    )
                    
                    
                })}
            </div>
            </div>
        )
    }
}

export default ShopAll