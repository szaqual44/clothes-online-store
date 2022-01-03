import {useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import styled from "styled-components"

import QuantityCounter from './QuantityCounter'

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
    width:80%; 
    display:flex;
`
const Header = styled.h1`
  margin-bottom:60px;
`
const ContentContainer = styled.div`
  display:flex;
  flex-direction:column;
  flex:4; 
`
const SingleProduct = styled.div`
    display:flex;  
    border:1px solid lightgrey;
    padding:10px;
    border-radius:10px;
    margin-right:10px;
    margin-bottom:20px;
`
const DescriptionContainer = styled.div`
    margin-left:10px;
    font-size:30px;
    font-weight:bold;
    flex:4;
`
const QuantituContainer = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
`
const ProductPrice = styled.span`
    font-weight:300;
    font-size:22px;
`
const SummaryContainer = styled.div`
    flex:1; 
`
const PriceContainer = styled.div`
    display:flex;  
    flex-direction:column;
    justify-content:space-between;
    border:1px solid lightgrey;
    padding:10px;
    border-radius:10px;
    min-height:470px;
`
const ImageContainer = styled.div`
  flex:1;
`
const Image = styled.img`     
    height: 200px;
`
const Text = styled.span` 
    font-size:20px;
    font-weight:300;
`
const TextBold = styled.span` 
    font-size:20px;
    font-weight:bold;
`
const TextContainer = styled.div` 
    display:flex;
    padding:30px 20px;
    justify-content:space-between;
    width:100%;
`
const Divider = styled.div`
   width: 80%;
   border-top:1px solid lightgrey;
   margin: auto;
`
const Button = styled.button`
    margin-top: 50px;
    font-weight: 700;
    color:white;
    background: black;
    width:100%;
    padding:20px;
    cursor:grab;
`

export default function Cart() {
    const cart = useSelector(state =>state.cart);
    const [price, setPrice] = useState(0)    //price for all products without shipping and discount
    useEffect(() => {
        setPrice(0)
        cart.products.map(item=>setPrice(prev=>prev+item.quantity*item.price))
    }, [cart])
    
console.log(cart)


    return (
        <Background>
            {cart.products.length==0 
            ? <span> Your cart is empty. </span> 
            : <Container>
                {/* <Header>Shopping bag</Header>    */}
                <ContentContainer>   
                    <Header>Shopping bag</Header>                   
                    {cart.products.map(item=> 
                       <SingleProduct>  
                            <ImageContainer>
                                <Image src={item.img}/>
                            </ImageContainer>
                            <DescriptionContainer>
                                {item.name} 
                            </DescriptionContainer>
                            <QuantituContainer>
                                <QuantityCounter value={item.quantity}/>
                                <ProductPrice>
                                    {item.price} $
                                </ProductPrice>
                            </QuantituContainer>
                        </SingleProduct>   
                    )}    
                </ContentContainer>
                <SummaryContainer>
                    <Header>Summary</Header>
                    <PriceContainer>
                        <div>
                            <TextContainer>
                                <Text>price</Text>
                                <TextBold>{price}$</TextBold>
                            </TextContainer>
                            <TextContainer>
                                <Text>shipping</Text>
                                <TextBold>4,5 $</TextBold>
                            </TextContainer>
                            <TextContainer>
                                <Text>discount</Text>
                                <TextBold>0 $</TextBold>
                            </TextContainer>
                            <Divider/>
                        </div>
                        <div>
                            <TextContainer>
                                <Text>total</Text>
                                <TextBold> {`${price+4.5}`} $</TextBold>
                            </TextContainer>
                        </div>
                        <Button>
                            Order
                        </Button>
                    </PriceContainer>
                </SummaryContainer>
            </Container>
             }
        </Background>
    )
}
