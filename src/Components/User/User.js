import React from 'react'
import axios from 'axios'
import {updateCart, updateUser} from '../../ducks/reducer'
import {connect} from 'react-redux'

function User (props){
    const handleLogout = () => {
        
        axios.post("/auth/logout")
        .then(res => {
            
            props.updateCart([])
            props.updateUser({email: '', first_name: '', last_name: '', user_id: 0})
            props.history.push('/')
        })
        .catch(err => console.log(err))

    }
    return(
        <div>
            
            <br />
            <button onClick={() => handleLogout()}> LOG OUT</button>
        </div>

    )
}

const mapDispatchToProps = {
    updateCart,
    updateUser
}

export default connect(null, mapDispatchToProps)(User)