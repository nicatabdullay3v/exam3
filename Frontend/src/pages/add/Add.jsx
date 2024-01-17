import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getdata } from '../../redux/slices';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
const Add = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.products)
    const [input, setinput] = useState(" ")

    const [filteredData, setfilteredData] = useState(products)
 

    useEffect(() => {

        dispatch(getdata())
        setfilteredData(input == " " ? products : products.filter((x) => x.name.includes(input)))
    }, [input])
    setTimeout(() => {
        setfilteredData(input == " " ? products : products.filter((x) => x.name.includes(input)))
        
    }, 100);
    console.log(products);
    return (
        <>
            <div style={{ textAlign: "center" }} className="container">
                <input onChange={(e) => {
                    setinput(e.target.value)

                }} type="text" />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Dessert (100g serving)</TableCell>
                                <TableCell align="right">Calories</TableCell>
                                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredData && filteredData.map((row) => (
                                <TableRow
                                    key={row._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                    <button onClick={() => {
                                        axios.delete(`http://localhost:3001/products/${row._id}`).then(() => {
                                            dispatch(getdata())
                                        })
                                    }}>delete</button>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        </>
    )
}

export default Add