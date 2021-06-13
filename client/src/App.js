import React from 'react'
import {BrowserRouter as Router, Link, Route} from "react-router-dom"
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import "./index.css"
import { CartScreen } from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from './actions/userActions';
import RegisterScreen from './screens/register';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import { OrderHistoryScreen } from './screens/OrderHistoryScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import SignOutScreen from './screens/SignOutScreen';

function App() {

    const cart = useSelector(state=>state.cart)
    const {cartItems} = cart
    const signin = useSelector(state=>state.userSignin)
    const {userInfo} = signin
    const dispatch = useDispatch()
    const signoutHandler = ()=>{
        dispatch(signout())
    }

    return (
    <Router>
    <div className="grid-container">
        <header className="row">
            <div>
                <Link className="brand" to="/">E-Store</Link>
            </div>
            <div>
                <Link to="/cart">Cart
                {
                    cartItems.length > 0 && (
                        <span className="badge">{cartItems.length}</span>
                    )
                }
                </Link>
                {
                    userInfo ? 
                    <div className="dropdown">
                        <Link to="#">{userInfo.name} <i className="fa fa-caret-down"></i>{' '}</Link>
                        <ul className="dropdown-content">
                            <li><Link to="/profile">User Profile</Link></li>
                            <li><Link to="/orderHistory">Order History</Link></li>
                            <li><Link to="/signout" onClick={signoutHandler}>Sign Out</Link></li>
                        </ul>
                    </div>
                    : 
                    <Link to="/signin">Sign In</Link>
                }
            </div>
        </header>
        <main>
            <Route exact path = "/" component={HomeScreen} />
            <Route exact path = "/product/:id" component={ProductScreen} />
            <Route exact path = "/cart/:id?" component={CartScreen} />
            <Route exact path = "/signin" component={SigninScreen} />
            <Route exact path = "/register" component={RegisterScreen} />
            <Route exact path = "/shipping" component={ShippingAddressScreen} />
            <Route exact path = '/placeorder' component={PlaceOrderScreen} />
            <Route exact path = '/order/:id' component={OrderScreen} />
            <Route exact path = '/orderHistory' component={OrderHistoryScreen} />
            <Route exact path = '/profile' component={ProfileScreen} />
            <Route exact path = '/signout' component={SignOutScreen} />
        </main>
        <footer className="row center">All rights reserved</footer>
    </div>
    </Router>
  );
}

export default App;
