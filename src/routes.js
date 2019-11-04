import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Cart from './Components/Cart/Cart'

import Item from './Components/Item/Item'
import Landing from './Components/Landing/Landing'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import ShopAll from './Components/ShopAll/ShopAll'

export default(
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/cart' component={Cart}/>
        <Route exact path='/products' component={ShopAll}/>
        <Route exact path='/item' component={Item}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
    </Switch>
)