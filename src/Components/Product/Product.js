import React, {Component} from 'react'
import './product.css'

class Product extends Component {
    constructor(){
        super()

        this.state = {

        }
    }

    render(){
        return(
            
            <div className="all-products-container">
                
                    <img src={this.props.product.img} alt="candle"/>
                    <section id="product-details">
                        <div id="product-name">
                            {this.props.product.name}
                        </div>
                        
                        <div>
                            <b>${this.props.product.price}.00</b>
                        </div>
                        <div>
                            {this.props.product.scent}
                        </div>
                        
                    
                    </section>
                    

                
                

            </div>
            
        )
    }
}

export default Product