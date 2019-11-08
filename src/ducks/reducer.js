const initialState ={
    user:{
        email: '',
        first_name: '',
        last_name: '',
        user_id: 0
    },
    selectedProductId: 0,
    cart: []
}

const UPDATE_USER = 'UPDATE_USER'
const SELECT_PRODUCT_ID = 'SELECT_PRODUCT_ID'
const UPDATE_CART = 'UPDATE_CART'

export function updateUser (userObj){
    return {
        type: UPDATE_USER,
        payload: userObj
    }
}

export function selectProductId (productId){
    // console.log('action function fired')
    // console.log(productId)
    return {
        type: SELECT_PRODUCT_ID,
        payload: productId
    }
}

export function updateCart (newCart){
    // console.log('cart action function hit')
    return {
        type: UPDATE_CART,
        payload: newCart
    }
}

export default function reducer (state = initialState, action){
    const {type, payload} = action
    switch(type){
        case UPDATE_CART:
            return {...state, cart: payload}
        case SELECT_PRODUCT_ID:
            return {...state, selectedProductId: +payload}
        case UPDATE_USER:
            return {...state, user: payload}
        default:
            return state
    }
}