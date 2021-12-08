import React from 'react'
import styled from "styled-components"
import { CustomLink } from './CustomLink'

import SpecialOfferTop from './SpecialOfferTop'
import { BsFillCartFill }  from "react-icons/bs";

const Background = styled.nav`
    width:100%;
    height:55px;    
    background-color: black;
    color:#d1d1d1;
    display: flex;
    justify-content: center;
    position:fixed;
    top:0;
    margin-top:30px;  
    z-index: 1000;
`
const Container = styled.div`
    width:90%; 
    display:flex;
    justify-content: space-between;
    align-items: center;
`
const Left = styled.div`
  height:100%;
`
const BrandText = styled.h1`
    font-size: 28px;
    color:#d1d1d1;
    height: 100%;
    width:100%;
  
    &:hover{
        color:white;
        background-color: rgb(25,25,25);
    }

`
const Center = styled.div`
    

`
const Menu = styled.ul`
    

`
const Right = styled.div`
      height:100%;
      display:flex;
`

export default function Navbar() {
    return (
        <header>
            <SpecialOfferTop/>
            <Background>
                <Container>
                    <Left>
                        <CustomLink to='/' brandText >
                                Shoppuuu
                        </CustomLink>
                    </Left>
                    <Center>
                        <Menu>
                            All products
                        </Menu>
                    </Center>
                    <Right>
                        <CustomLink to='/register'  >
                                Sign Up
                        </CustomLink>
                        <CustomLink to='/login'  >
                                Login
                        </CustomLink>
                        <CustomLink to='/add-products'  >
                                Add Products
                        </CustomLink>               
                        <CustomLink to='/cart'  >
                            <BsFillCartFill/>
                        </CustomLink>               
                    </Right>
                </Container>
            </Background>
        </header>
    )
}




