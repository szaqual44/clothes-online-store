import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductDetails from '../components/ProductDetails'
import Slider from '../components/Slider'

export default function ProductDetailsPage() {
    return (
        <>
            <Navbar/> 
            <Slider/>
            <ProductDetails  key={new Date()}/>
            <Footer/>
        </>
    )
}
