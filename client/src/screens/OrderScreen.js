import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { detailsOrder, payOrder } from '../actions/orderActions'
import {PayPalButton} from 'react-paypal-button-v2'
import Ecommerce from '../api/Ecommerce'

const OrderScreen = (props) => {
    const {id} = useParams() 
    const [sdkReady, setSdkReady] = useState(false)
    const orderDetails = useSelector(state=>state.orderDetail)
    const {order,loading,error} = orderDetails
    const orderPay = useSelector(state=>state.orderPay)
    const {loading: loadingPay, error:errorPay, success: successPay} = orderPay
    const dispatch = useDispatch();
    useEffect(()=>{
        const addPaypalScript = async () =>{
            const {data} = await Ecommerce.get('/api/config/paypal')
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.src = `https://www.paypal.com/sdk/js?client-id=${data}`
            script.async = true
            script.onload = ()=>{
                setSdkReady(true)
            }
            document.body.appendChild(script)
        }
        if(!order || successPay || (order && order._id!==id)){
            dispatch(detailsOrder(id))
        }else{
            if(!order.isPaid){
                if(!window.paypal){
                    addPaypalScript()
                }else{
                    setSdkReady(true)
                }
            }
        }
        
    },[dispatch,id,order,sdkReady, successPay])

    const successPaymentHandler = (paymentResult) => {
        dispatch(payOrder(order,paymentResult))
    }

    return loading ? <h1>...Loading</h1> : error ? <h1>{error}</h1> : (
        <div>
            <h1>Order {order._id}</h1>
        <div className="row top">
            <div className="col-2">
                <ul>
                    <li>
                        <div className="card card-body">
                            <h2>Shipping</h2>
                            <p>
                                <strong>Name: </strong>{order.shippingAddress.fullName}<br />
                                <strong>Address: </strong>{order.shippingAddress.address},{order.shippingAddress.city},{order.shippingAddress.postalCode},{order.shippingAddress.country}
                            </p>
                            {order.isDelivered ? <h2 className="signin-success">Delivered to {order.shippingAddress.fullName}</h2> : <h2 className="signin-error">Not Delivered</h2>}
                        </div>
                    </li>
                    <li>
                        <div className="card card-body">
                            <h2>Payment Method</h2>
                            <p>
                                <strong>Method: </strong>PayPal
                            </p>
                            {order.isPaid ? <h2 className="signin-success">Paid at {order.paidAt.slice(0,10)}</h2> : <h2 className="signin-error">Not Paid</h2>}
                        </div>
                    </li>
                    <li>
                        <div className="card card-body">
                            <h2>Order Items</h2>
                            {order.orderItems.length === 0 ? <h2>Cart is Empty. <Link to="/">Go Shopping</Link></h2> : <ul>
                                {order.orderItems.map(item => {
                                    return <li key={item.product}>
                                        <div className="row">
                                            <div>
                                                <img src={item.image} alt={item.name} className="small"></img>
                                            </div>
                                            <div className="marginright-2">
                                                <Link to={`/product/${item.product}`}>{item.name}</Link>
                                            </div>
                                            <div>
                                                {item.qty} x ${item.price} = {item.qty * item.price}
                                            </div>
                                        </div>
                                    </li>
                                })}
                            </ul>
                            }
                        </div>
                    </li>
                </ul>
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <h2>Order Summary</h2>
                        </li>
                        <li>
                            <div className="row">
                                <div>Items</div>
                                <div>${order.itemsPrice.toFixed(2)}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>Shipping</div>
                                <div>${order.shippingPrice.toFixed(2)}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>Tax</div>
                                <div>${order.taxPrice.toFixed(2)}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>
                                    <strong> Order Total</strong>
                                </div>
                                <div>
                                    <strong>${order.totalPrice.toFixed(2)}</strong>
                                </div>
                            </div>
                        </li>
                        {!order.isPaid && <li>{!sdkReady ? <h1>...Loading paypal</h1> : (
                            <>
                            {errorPay && <h1>{errorPay}</h1>}
                            {loadingPay && <h1>...Loading</h1>}
                            <PayPalButton amount = {order.totalPrice} onSuccess = {successPaymentHandler} /></>
                        )}</li>}
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}

export default OrderScreen
