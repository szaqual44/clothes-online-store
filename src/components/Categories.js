import axios from 'axios';
import {useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components"
import { backendURL } from '../serverMethods';
import SingleProduct from './SingleProduct';
import { useLocation } from 'react-router-dom'
import Category from './Category';

const Background = styled.section`
    width:100%; 
    background-color: lightblue;  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Container = styled.div`
    width:1440px; 
    display:flex;
    
    justify-content: space-between;  
`
const Button = styled.button`
    font-weight: 700;
    font-size: 30px;
    color:white;
    background: black;
    width:1440px; 
    padding:20px;
    margin:50px 0;
    cursor:grab;
`

export default function Categories({category, setCategory}) {
    const [catData, setCatData] = useState([]);
    
    useEffect(() => {
        // get cat from DB
       async function getAllCategories(){
            try {
                let input = await backendURL.get('/categories')
                setCatData(input.data)                
            } catch(err){console.log(err)}        
       }
        getAllCategories()
    }, [])
  
    return (
        <Background>
            <Container>
                {catData[0]!==undefined 
                ? <>            
                    {catData.map((item,i)=> 
                        <Category key={i} item={item} setCategory={setCategory}/>
                    )}                
                </>
                : null}      
            </Container> 
            {category && <Button onClick={()=>setCategory(null)}>Show all products </Button>}
            
        </Background>
    )
}
