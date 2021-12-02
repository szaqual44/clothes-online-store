import styled from "styled-components"
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Products from "../components/Products";
import Footer from "../components/Footer";
import SpecialOfferTop from "../components/SpecialOfferTop";

export default function HomePage() {
    return (
        <>
            <Navbar/> 
            <Slider/>
            <Products/>
            <Footer/>
        </>
    )
}
