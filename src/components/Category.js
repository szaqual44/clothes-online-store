import axios from 'axios';
import {useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components"
import { backendURL } from '../serverMethods';
import SingleProduct from './SingleProduct';
import { useLocation } from 'react-router-dom'

const Background = styled.section`
    width:100%; 
    background-color: lightblue;  
    display: flex;
    justify-content: center;
  
`
const Container = styled.div`
    width:1440px; 
    display:flex;
    justify-content: space-between;  
`
const ImageContainer = styled.div`
    width: 450px; 
    height: 600px;
    position:relative;
    margin:10px 0;
    cursor: grab;
    transition: all 0.4s;
    &:hover{
        scale:1.02;
    }
`

const Image = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover; 
`
const HeaderBackground = styled.div`
    position:absolute;
    height: 50px;
    width:100%;
    background: white;
    left:0;
    bottom:0;
    opacity:0.9;
    display: flex;
    align-items: center;
    justify-content: center;
    & span{
        font-size:30px;
        text-transform: uppercase;
        color:red;
    }
`


export default function Category({item, setCategory}) {
    const catRef = useRef()
   
    return (
        <ImageContainer onClick={()=> setCategory(catRef.current.innerHTML)}>                      
            <Image src={item.img} />  
            <HeaderBackground> 
                <span ref={catRef}>
                    {item.title}
                </span>
            </HeaderBackground>                      
        </ImageContainer>
    )
}
