import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { addToCart, removeFromCart } from '../actions/cartActions'
import { Link } from "react-router-dom"

export const CartScreen = (props) => {
    const { id } = useParams()
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    useEffect(() => {
        if (id) {
            dispatch(addToCart(id, qty))
        }
    }, [dispatch, id, qty])

    const removeFromCartHandler = (id)=>{
        dispatch(removeFromCart(id))
    }
    const checkOut = ()=>{
        props.history.push(`/signin?redirect=shipping`)
    }

    return (
        <div className="row top">
            <div className="col-2" style={{marginRight: "2%"}}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? <h2>Cart is Empty. <Link to="/">Go Shopping</Link></h2> : <ul>
                    {cartItems.map(item => {return <li key={item.product}>
                            <div className="row">
                                <div>
                                    <img src={item.image} alt={item.name} className="small"></img>
                                </div>
                                <div className="marginright-2">
                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                </div>
                                <div>
                                    <select
                                        value={item.qty}
                                        onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                                        {[...Array(item.countInStock).keys()].map(item => (
                                            <option key={item + 1} value={item + 1}>{item + 1}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    ${item.price}
                                </div>
                                <div>
                                    <button type="button" onClick={()=>removeFromCartHandler(item.product)}>Delete</button>
                                </div>
                            </div>
                        </li>
                    })}
                </ul>
                }
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <h2>Subtotal ({cartItems.reduce((a,c)=>a+c.qty,0)} items) : 
                            ${cartItems.reduce((a,c)=>a+c.qty*c.price,0)}
                            </h2>
                        </li>
                        <li>
                            <button type="button" onClick={checkOut} className="primary block" disabled={cartItems.length===0}>Proceed to Checkout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
