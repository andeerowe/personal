import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import './item.css'

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
            img: ''
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
            img: res.data.img
        })
        console.log(this.state.scent)
    })
    .catch(err => console.log(err))
}
    render(){
        return(
            <div>
                {/* <img id="product-img" src={this.state.img} alt="product"/> */}
                {this.state.scent}
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        id: reduxState.selectedProductId
    }
    
}

export default connect(mapStateToProps)(Item)