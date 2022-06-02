import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Categories from "../components/Categories";

export default function ProductList() {
    return (
        <>
            <Navbar/> 
            <Slider/>
       
            <Categories/>
            <Products/>
            <Footer/>
        </>
    )
}
