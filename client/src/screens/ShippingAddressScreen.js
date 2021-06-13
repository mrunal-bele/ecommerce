import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';

export default function ShippingAddressScreen(props) {
    const usersignin = useSelector(state=>state.userSignin)
    const {userInfo} = usersignin
    if(!userInfo){
        props.history.push('/signin')
    }
    const shippingData = useSelector(state=>state.cart)
    const {shippingDetails} = shippingData
    const [fullName, setFullName] = useState(shippingDetails.fullName);
    const [address, setAddress] = useState(shippingDetails.address);
    const [city, setCity] = useState(shippingDetails.city);
    const [postalCode, setPostalCode] = useState(shippingDetails.postalCode);
    const [country, setCountry] = useState(shippingDetails.country);
    const dispatch = useDispatch()
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({fullName,address,city,postalCode,country}))
        props.history.push("/placeorder")
    }

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1 style={{textAlign:"center"}}>Shipping Address</h1>
                </div>
                <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        placeholder="Enter full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        placeholder="Enter address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        placeholder="Enter city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor="postalCode">Postal Code</label>
                    <input
                        type="text"
                        id="postalCode"
                        placeholder="Enter postal code"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <input
                        type="text"
                        id="country"
                        placeholder="Enter country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">
                        Continue
                    </button>
                </div>
            </form>
        </div>
    )
}