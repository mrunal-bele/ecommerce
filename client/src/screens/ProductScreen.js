import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import StarRating from '../components/StarRating'
import "../index.css"
import { detailsProduct } from '../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'

const ProductScreen = (props) => {
    const productDetails = useSelector(state => state.productDetails)
    const { product, error, loading } = productDetails
    const [Qty, setQty] = useState(1)
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(detailsProduct(id))
    }, [dispatch, id])

    const addToCart = ()=>{
        props.history.push(`/cart/${id}?qty=${Qty}`)
    }

    return (
        <>
            {loading ? <h1 style={{ textAlign: 'center' }}>...Loading</h1> : error ? <h1>{error}</h1> : <><Link to="/">Back</Link>
                <div className="row top">
                    <div className="col-2">
                        <img className="large" src={product.image} alt={product.name} />
                    </div>
                    <div className="col-1" style={{ marginLeft: "10px" }}>
                        <ul>
                            <li>
                                <h1>{product.name}</h1>
                            </li>
                            <li className="rating">
                                <span><StarRating rating={product.rating} /></span>
                            </li>
                            <li>
                                Price: ${product.price}
                            </li>
                            <li>
                                Description: {product.description}
                            </li>
                        </ul>
                    </div>
                    <div className="col-1" style={{ marginRight: "5px" }}>
                        <div className="card card-body">
                            <ul>
                                <li>
                                    <div className="row">
                                        <div>Price</div>
                                        <div className="price">${product.price}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>Status</div>
                                        <div className="price">{product.countInStock > 0 ? (<span className="success">In stock</span>) : (<span className="danger">Out of stock</span>)}</div>
                                    </div>
                                </li>
                                {product.countInStock > 0 && (<>
                                    <li>
                                        <div className="row">
                                            <div>Qty</div>
                                            <div>
                                                <select value={Qty} onChange={e => setQty(e.target.value)}>
                                                    {[...Array(product.countInStock).keys()].map(item => (
                                                        <option key={item + 1} value={item + 1}>{item + 1}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <button onClick={addToCart} className="primary block">Add to Cart</button>
                                    </li></>)}

                            </ul>
                        </div>
                    </div>
                </div></>}
        </>
    )
}

export default ProductScreen
