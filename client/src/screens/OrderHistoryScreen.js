import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listOrder } from '../actions/orderActions'

export const OrderHistoryScreen = (props) => {
    const orderList = useSelector(state=>state.orderList)
    const {error,orders,loading} = orderList
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(listOrder())
    },[dispatch])
    return (
        <div>
            <h1>Order History</h1>
            {loading ? <h1>...Loading</h1> : error ? <h1>{error}</h1> : (
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DATE</th>
                            <th>TOTAL</th>
                            <th>PAID</th>
                            <th>DELIVERED</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(item=> 
                            (<tr key = {item._id}>
                                <td>{item._id}</td>
                                <td>{item.createdAt.substring(0,10)}</td>
                                <td>{item.totalPrice}</td>
                                <td>{item.isPaid ? item.paidAt.substring(0,10) : 'No'}</td>
                                <td>{item.isDelivered ? item.deliveredAt.substring(0,10) : 'No'}</td>
                                <td>
                                    <button type="button" className="small" onClick={()=> props.history.push(`/order/${item._id}`)}>
                                        Details
                                    </button>
                                </td>
                            </tr>
                        )
                        )}
                    </tbody>
                </table>
            )}
        </div>
    )
}
