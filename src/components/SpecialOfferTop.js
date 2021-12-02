import React from 'react'
import styled from "styled-components"
import CloseIcon from '@mui/icons-material/Close';


const Background = styled.div`
    width:100%;
    height:30px;    
    background-color: #60c4b9;
    color:#f4f786;
    display: flex;
    justify-content: center;
    position:fixed;
    top:0;
    z-index:10;
`
const Container = styled.div`
    width:90%;
    display: flex;
    justify-content: space-around;
    align-items: center;
   
`


const Header = styled.h1`
    font-size: 14px;

   
`
const DeliveryText = styled.h1`
    font-size: 14px;
    font-weight: 300;
`

export default function SpecialOfferTop() {
    return (
        <Background>
            <Container>
                <Header>Special offer!  Up to 60% discount!</Header>
                <DeliveryText>Free delivery!</DeliveryText>              
            </Container>          
        </Background>
    )
}
