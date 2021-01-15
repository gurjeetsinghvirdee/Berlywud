import React,{useEffect, useState} from 'react'
import "./Home.css"
import axios from 'axios';
import Product from "./Product"
import {useDispatch,useSelector} from 'react-redux'
import { allProducts } from './redux/allProducts'
import Sidebar from "./Sidebar"
import Loadingmsg from "./Loadingmsg";
import Errormsg from "./Errormsg";

function Home() {
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     const url = "https://raw.githubusercontent.com/mannywebdev/Burlywud/master/src/product.json";
    //         fetch(url)
    //             .then(res => res.json())
    //             .then(data => dispatch(allProducts(data)))       
    // },[])

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(()=>{
        const fetchData = async() => {
            try {
                setLoading(true)
                const data = await axios.get('/api/products')
                setLoading(false)
                dispatch(allProducts(data.data))
            }
            catch(error) {
                setError(error.message)
                setLoading(false)
            }
        }
        fetchData()
    },[])

    const  {AllProducts}= useSelector(state => state)
    
    const productitem  = AllProducts.map((item)=> {
        return <Product key={item.id} prop={item}/>
    })
    console.log("ProductItems",productitem)
    
    return (
        <div className="home">
            {
                loading ? (
                    <Loadingmsg />
                ) : error ? (
                    <Errormsg />
                ) : (
                    <>
                        <h3>OUR PRODUCTS</h3>
                        <div className="home__page">
                            <div className="home__sidebar">
                                <Sidebar/>
                            </div>
                            <div className="home__container">
                                {productitem}
                            </div>
                        </div>
                    </>
                )
            }
        </div>
            
        
    )
}

export default Home
