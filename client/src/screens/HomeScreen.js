import React, { useEffect } from 'react'
import StarRating from "../components/StarRating"
import {useDispatch, useSelector} from "react-redux"
import { listProducts } from '../actions/productActions'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {loading,error,products} = productList

    useEffect(()=>{
        dispatch(listProducts())
    },[dispatch])

    return (
        <div>
            {loading ? <h1 style={{textAlign: 'center'}}>...Loading</h1> : error ? <h1>{error}</h1> : <div className="row center">
                {products.map(item => {
                    return <div className="card" key={item._id}>
                        <Link to={`/product/${item._id}`}>
                            <img className="medium" src={item.image} alt="product" />
                        </Link>
                        <div className="card-body">
                            <Link to={`/product/${item._id}`}>
                                <h2>{item.name}</h2>
                            </Link>
                            <div className="rating">
                                <span><StarRating rating={item.rating} /></span><p>{item.numReviews} Reviews</p>
                            </div>
                            <div className="price">${item.price}</div>
                        </div>
                    </div>
                })}
            </div>}
            
        </div>
    )
}

export default HomeScreen
