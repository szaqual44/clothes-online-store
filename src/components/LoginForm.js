
import {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import styled from "styled-components"
import { login } from '../redux/apiCalls'
import { backendURL } from '../serverMethods'

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
    width:440px; 
    display:flex;
    flex-direction: column;
`
const Header = styled.h1`
  margin-bottom:60px;
`
const Form = styled.form`
    display:flex;
    flex-direction: column;
    position:relative;
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
const Alert = styled.div`
    position:absolute;
    bottom:70px;
    left:50%;
    transform:translateX(-50%);
    background-color: #d1e7dd;
    background-color: lightgrey;
    border-color: #badbcc;  
    color: #0f5132;
    border-radius: 5px;
    font-size: 20px;
    padding:10px 20px; 
    text-align:center;
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
export default function LoginForm() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [response,setResponse] = useState()
    const dispatch = useDispatch()
    const currentUser = useSelector(state=>state.user.currentUser)
    const error = useSelector(state=>state.user.error)
    const isFetching = useSelector(state=>state.user.isFetching)
    useEffect(() => {
        setEmail('')
        setPassword('')
    }, [])

    const handleSubmit = (e)=>{
        e.preventDefault()        
        login(dispatch,{email,password})
    }

    return (
        <Background>
            <Container>
                <Header>Login</Header>
                <Form onSubmit={(e)=>handleSubmit(e)}>
                    <Label for="email">Email:</Label>
                    <Input type='text' name='email' id="email" value={email} onChange={e=>setEmail(e.target.value)} />
                    
                    <Label for="password">Password:</Label>
                    <Input type='password' name='password' id="password" value={password} onChange={e=>setPassword(e.target.value)} />
                          
                    {error ?<Alert> {error}</Alert>:null}
                    {currentUser!==null && currentUser.email!==undefined ?<Alert> {`${currentUser.email} has beed logged in`}</Alert>:null}
               
                    <Button type='submit'>Sign Up</Button>
                </Form>
                  
            </Container>
        </Background>
    )
}
