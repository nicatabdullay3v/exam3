import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getdata } from '../../../redux/slices';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from "react-helmet";
import "./Discover.scss"
import { handeleSort } from '../../../redux/slices';
import { addToBasket, increasecount } from '../../../redux/basketSlice';
const Discover = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.products)

    const [filteredData, setfilteredData] = useState(products)

    const handleAdd = (elem) => {
        let basket = JSON.parse(localStorage.getItem("basket")) || []
        let findElement = basket.find((x) => x._id == elem._id)
        let index = basket.findIndex((x) => x._id == elem._id)
        const [category, setcategory] = useState("")
        console.log(index);
        if (findElement) {
            alert("belesi var")

            dispatch(increasecount(index))
        }
        else {
            alert("artirildi")

            let obj = {
                name: elem.name,
                _id: elem._id,
                description: elem.description,
                category: elem.category,
                price: elem.price,
                count: 1
            }
            dispatch(addToBasket({
                basket, obj

            }))
        }
    }
    useEffect(() => {

        dispatch(getdata())
    }, [])
    console.log(products);

    return (
        <>
            <section id='discover'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>My Title</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
                <div className="container">
                    <div className="discover">
                        <div className="text">

                            <div className="name">
                                <p>OUR MENU</p>
                            </div>
                            <div className="title">
                                <h1>Discover Our Exclusive Menu</h1>
                            </div>
                            <div className="buttons">
                                <button onClick={() => {
                                    dispatch(handeleSort("Dessert"))
                                }}>breakfast</button>
                                <button onClick={() => {
                                    dispatch(handeleSort("yemey"))
                                }}>yemey</button>
                                <button
                                    onClick={() => {
                                        dispatch(handeleSort("breakfast"))
                                    }}>Dessert</button>
                            </div>
                        </div>
                        <div className="cards">

                            {products && products.map((elem) => {
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
                                    </div>
                                    <div className="delete">
                                        <button><svg onClick={() => {
                                            handleAdd(elem)
                                        }} xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path fill="#165cd4" d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z" /></svg></button>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Discover