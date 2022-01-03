import { useState, useEffect  } from 'react'
import styled from "styled-components"
import { backendURL } from '../../serverMethods'
import SingleProductAdmin from './SingleProductAdmin'




const Background = styled.section`
    margin:40px 0;
    margin-top:185px;
    width:100%; 
    min-height:500px;
    background-color: white;  
    display: flex;
    justify-content: center;
`
const Container = styled.div`
    width:1000px; 
    display:flex;
    flex-direction: column;
`
const Header = styled.h1`
  margin-bottom:60px;
`


const Alert = styled.div`
    position:absolute;
    bottom:70px;
    left:50%;
    transform:translateX(-50%);
    background-color: #d1e7dd;
    background-color: lightgrey ;
    border-color: #badbcc;  
    color: #0f5132;
    border-radius: 5px;
    font-size: 20px;
    padding:10px 20px; 
    text-align:center;
`
const Button = styled.button`
    margin-top: 120px;
    font-weight: 700;
    color:white;
    background: black;
    width:100%;
    padding:20px;
    cursor:grab;
`

export default function UpdateProductForm() {
    const [products, setProducts] = useState()
    useEffect(() => {
        const getAllProducts = async () => {
            const products = await backendURL.get('/products')
            setProducts(products.data)
        }
        getAllProducts()
    }, [])

    return (
        <Background>
            <Container>               
                <Header>Lista produktów w bazie danych:</Header>
                {/* RENDERING HEADER OF TABLE */}
                <SingleProductAdmin />
                
                {/* RENDERING ITEMS */}
                 {products && products.map((item,i)=>{
                     return <SingleProductAdmin key={i} item={item} i={i} />
                 })}
            </Container>
    </Background>
    )
}
