import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import SpecialOfferTop from './SpecialOfferTop'


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
    z-index: 10;
`
const Container = styled.div`
    width:90%; 
    display:flex;
    justify-content: space-between;
    align-items: center;
`
const Left = styled.div`
   
`
const BrandText = styled.h1`
    font-size: 28px;
    color:#d1d1d1;

`
const Center = styled.div`
    

`
const Menu = styled.ul`
    

`
const Right = styled.div`
      height:100%;
      display:flex;
`
const CustomLink = styled.a`  
    height:100%;
    color:#d1d1d1;
    padding:10px;
    display:flex;  
    align-items: center;
    &:hover{
        color:white;
        background-color: rgb(25,25,25);
    }
`

export default function Navbar() {
    return (
        <header>
            <SpecialOfferTop/>
            <Background>
                <Container>
                    <Left>
                        <Link to='/'>
                            <BrandText>
                                Shoppuuu
                            </BrandText>
                        </Link>
                    </Left>
                    <Center>
                        <Menu>
                            All products
                        </Menu>
                    </Center>
                    <Right>
                        <CustomLink href="#">
                            <Link to={``}>
                                Login
                            </Link>
                        </CustomLink>
                        <CustomLink href="#">
                            Sign Up
                        </CustomLink>
                        <Link to='/add-products'>
                            <CustomLink href="#">                            
                                Add Product                            
                            </CustomLink>
                        </Link>
                    </Right>
                </Container>
            </Background>
        </header>
    )
}




