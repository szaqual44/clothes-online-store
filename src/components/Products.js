import axios from 'axios';
import {useState, useEffect } from 'react'
import styled from "styled-components"
import { backendURL } from '../serverMethods';
import SingleProduct from './SingleProduct';


const Background = styled.section`
    width:100%; 
    background-color: #f4edde;  
    display: flex;
    justify-content: center;
  
`
const Container = styled.div`
    width:1440px; 
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;  
`

export default function Products({category}) {
    const [products, setProducts] = useState([]);
    
    
    useEffect(() => {
       async function fetchProducts(){
            try {
                let products = await backendURL.get( category?`/products?category=${category}` :'/products')
                setProducts(products.data)
            } catch(err){
                // console.log(err)
            }        
       }
        fetchProducts()
        
    }, [category])

    return (
        <Background>
            <Container>
                {products!==undefined 
                ? products.map(product=>{
                    return <SingleProduct key={product._id} product={product} />
                })
                : '' }              
            </Container>
        </Background>
    )
}
