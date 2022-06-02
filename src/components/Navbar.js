import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import styled from "styled-components"
import SpecialOfferTop from './SpecialOfferTop'

import { CustomLink } from './CustomLink'
import { BsFillCartFill }  from "react-icons/bs";
import { useNavigate } from 'react-router'
import { logoutStart } from '../redux/userRedux'
import { clearCart } from '../redux/cartRedux'


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

const Right = styled.div`
      height:100%;
      display:flex;
`
const QuantityInBasket = styled.div`
    position: absolute;
    right:-15px;
    top:5px;
    height:25px;
    width: 25px;
    border-radius:50%;
    font-size:12px;
    color:black;
    background: #d1d1d1;
    display:flex;
    justify-content:center;
    align-items:center;      
`
const UserText = styled.span`
    font-size: 14px;
    color:#d1d1d1;
    height: 100%;
    width:100%; 
    max-width:80px;
    text-align:center;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-left:25px; 
    &:hover{
        color:white;
        background-color: rgb(25,25,25);
    }
`

const Button = styled.button`
    background-color:inherit;
    border:none;
    text-decoration: none;
    height:100%;
    white-space: nowrap;
    color:#d1d1d1;
    font-size: ${props=>props.brandText ? '28px' : '18px'};
    font-weight: 700;
    padding:0 10px;
    display:flex;  
    align-items: center;
    position: relative;
    cursor:pointer;
    &:hover{
        color:white;
        background-color: rgb(25,25,25);
    }
`


export default function Navbar({setCategory}) {
    const quantity = useSelector(state=>state.cart.quantity)
    const currentUser = useSelector(state=>state.user.currentUser)
    const dispatch = useDispatch()
    const navigate=useNavigate()
    
    function handleLogout(e){

        e.preventDefault()
        dispatch(logoutStart())
        dispatch(clearCart())
        navigate('/')
    }
    return (
        <header>
            <SpecialOfferTop/>
            <Background>
                <Container>
                    <Left>
                        <CustomLink to='/'  brandText >
                                Shoppuuu
                        </CustomLink>
                    </Left>
                    <div>
                        <CustomLink to='/add-products'  >
                                Add Products
                        </CustomLink>               
                        <CustomLink to='/update-products'  >
                                Update Products
                        </CustomLink>               
                    </div>
                    <Right>
                        {currentUser===null && 
                            <CustomLink to='/register'  >
                                    Sign Up
                            </CustomLink> 
                        }                       
                        {currentUser===null && 
                            <CustomLink to='/login'  >
                                    Login
                            </CustomLink>
                        }
                        <CustomLink to='/cart'  >
                            <BsFillCartFill/>
                            <QuantityInBasket>
                               {quantity}
                            </QuantityInBasket>
                        </CustomLink>               
                        {currentUser!==null  ?<UserText> {`Hallo ${currentUser.email}`}</UserText>:null}
                        {currentUser!==null && 
                            <Button onClick={handleLogout} >
                                Logout
                            </Button>
   
                        }    
                    </Right>
                </Container>
            </Background>
        </header>
    )
}




