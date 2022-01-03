import {useState, useEffect } from 'react'
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Categories from "../components/Categories";

export default function HomePage() {
    const [category, setCategory] = useState()
    const [filters, setFilters] = useState()
    useEffect(() => {
       
    }, [category])
    return (
        <>
            <Navbar /> 
            <Slider/>
            <Categories category={category} setCategory={setCategory}/>
            <Products category={category}/>
            <Footer/>
        </>
    )
}
