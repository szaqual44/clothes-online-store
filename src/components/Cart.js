
import {useState} from 'react'
import styled from "styled-components"
import { backendURL } from '../serverMethods'
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
    flex-direction: column;
`
const Header = styled.h1`
  margin-bottom:60px;
`

const Label = styled.label`
   font-size: 20px;
   margin-top: 10px;
   color:grey;
`
const Input = styled.input`
   font-size: 16px;
   border:0;
   border-bottom: 1px solid black;
   line-height: 2;
   &:-webkit-autofill {
        -webkit-box-shadow: inset 0 0 0px 9999px white;
    }
   &:focus, &:active{
    outline: none;
   }
`

const Button = styled.button`
    margin-top: 100px;
    font-weight: 700;
    color:white;
    background: black;
    width:100%;
    padding:20px;
    cursor:grab;
`

export default function Cart() {
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [response,setResponse] = useState()
    
    const handleSubmit =  (e)=>{
        e.preventDefault()        
        const loginData = {
            email:email,
            password:password,
        }
        backendURL.post('/login', loginData)
         .then(res=>setResponse(res.data))
         .catch(err=>console.log(err))
        
}


    return (
        <Background>
            <Container>
                <Header>Shopping bag</Header>
              
                  
            </Container>
        </Background>
    )
}
