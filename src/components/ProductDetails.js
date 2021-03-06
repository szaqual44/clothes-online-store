import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router'
import { useDispatch } from 'react-redux';
import styled from "styled-components"
import { addProduct } from '../redux/cartRedux';
import { backendURL } from '../serverMethods';
import QuantityCounter from './QuantityCounter';

const Background = styled.section`
    width:100%; 
    background-color: white;  
    display: flex;
    justify-content: center;
    margin:40px 0;  
`
const Container = styled.div`
    width:1440px; 
    display:flex;
`
const Image = styled.img`
    max-width: 500px;    
`
const DescriptionContainer = styled.div`
    margin-left:40px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    width:100%;
`
const Header = styled.div` 
    display:flex;
    flex-direction: column;
`
const Name = styled.span`
    font-weight: 700;
    font-size: 30px;
    text-transform: uppercase;
`
const Price = styled.span`
    font-weight: 700;
    font-size: 30px;
    text-transform: uppercase;
    color:grey;
    margin-top: 40px;
`
const Description = styled.span`
    font-size: 24px;
    margin-top: 80px;
`
const Button = styled.button`
    font-weight: 700;
    color:white;
    background: black;
    width:100%;
    padding:20px;
    cursor:grab;
`

export default function ProductDetails() {
    const [product,setProduct] = useState()
    const [quantity,setQuantity] = useState(1)
    const location = useLocation();
    const id=location.pathname.split('/')[2]    
    const dispatch = useDispatch()
    useEffect(() => {
            backendURL.get("/products/" + id)
            .then(res=>{
                setProduct(res.data)
            })
            .catch(err=>console.log(err))     
    }, [id]);

    function addToCart(id){  
        dispatch(addProduct({...product, quantity}))
          
    }

    return (        
            <Background>
                {product!==undefined &&
                <Container>
                    <Image src={product.img}></Image>
                    <DescriptionContainer>
                        <Header>
                            <Name>{product.name}</Name>
                            <Price>$ {product.price}</Price>
                        </Header>
                        <Description>{product.desc}</Description>
                        <QuantityCounter value={quantity} setValue={setQuantity}/>
                        <Button onClick={e=>addToCart(product._id)}>Add</Button>
                    </DescriptionContainer>
                </Container>
                }
            </Background>
    )
}
