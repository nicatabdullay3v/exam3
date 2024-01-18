import React, { useState } from 'react'
import "./Basket.scss"
import { useDispatch, useSelector } from 'react-redux';
import { increaseCountInBasket, decrease } from '../../redux/basketSlice';
const Basket = () => {
    const basket = useSelector((state) => state.basket.basket)
    const dispatch = useDispatch()
    const [newdaat, setnewdaat] = useState([])
    console.log(basket);
    return (
        <>
            <div className="cards">
                {basket && basket.map((elem) => {
                    return <div className="card">
                        <div className="card_image">
                            <img src="https://preview.colorlib.com/theme/tasty/images/dessert-1.jpg.webp" alt="" />
                        </div>
                        <div className="name_eng">
                            <div className="name">

                                <p>{elem.name}</p>
                            </div>
                            <div className="eng">
                                <p>Meat, Potatoes, Rice, Tomatoe</p>
                            </div>
                        </div>
                        <div className="price">
                            <p>${elem.price * elem.count}</p>
                        </div>
                        <div className="delete">
                            <button onClick={() => {
                                let basket = JSON.parse(localStorage.getItem('basket')) || []
                                let index = basket.findIndex((x) => x._id == elem._id)
                                let obj ={
                                    index,
                                    _id:elem._id
                                }
                                dispatch(decrease(obj))
                            }}>-</button> {elem.count} <button onClick={() => {
                                let basket = JSON.parse(localStorage.getItem('basket')) || []
                                let index = basket.findIndex((x) => x._id == elem._id)
                                dispatch(increaseCountInBasket(index))
                            }} >+</button>
                        </div>
                    </div>
                })}
            </div>


        </>
    )
}

export default Basket