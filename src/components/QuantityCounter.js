import React, { useEffect } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from "styled-components"
import {BsChevronLeft,BsChevronRight} from "react-icons/bs";


const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;    
    font-weight: bold;
`
const Input = styled.input`
    /* ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }     */
    width:120px;
    padding:5px 2px;
    text-align: center;
    font-size:40px;
   
`;
const Icon = styled.div`
  cursor:pointer;
  font-size:50px;
`



export default function QuantityCounter({value, setValue}) {
    useEffect(() => {
       
    }, [])
    
    function decrease(){
        if (value>1){
            setValue(value-1)
        }
    }
    function increase(){      
            setValue(value+1)        
    }

    return (
        <Container>
            <Icon>
                <BsChevronLeft onClick={()=>{decrease()}} />
            </Icon>
            <Input value={value}/>
            <Icon>
                <BsChevronRight onClick={()=>{increase()}}/>
            </Icon>
        </Container>
    )
}
