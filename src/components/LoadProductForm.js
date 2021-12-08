import axios from 'axios'
import {useState} from 'react'
import styled from "styled-components"


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
    background-color: lightgrey ;
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


export default function LoadProductForm() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState();
    
    const handleSubmit =  (e)=>{
        e.preventDefault()        
        const newProduct = {
            name:name,
            desc:description,
            img:image,
            price:price,
        }
        axios.post('http://localhost:4000/api/products/add', newProduct)
         .then(data=>console.log(data))
         .catch(err=>console.log(err))
    }
    const clearForm = () =>{
        setName('')
        setDescription('')
        setImage('')
        setPrice(0)
    }
    
    return (
        <Background>
            <Container> 
                <Form onSubmit={e=>handleSubmit(e)}>
                    <Header>Dodaj produkt do bazy danych:</Header>
                    <Label>Name:</Label>
                    <Input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
                    <Label>Description:</Label>
                    <Input type='text' value={description} onChange={(e)=>setDescription(e.target.value)} />    
                    <Label>Price:</Label>
                    <Input type='number'value={price} onChange={(e)=>setPrice(e.target.value)} />    
                    <Label>Image:</Label>
                    <Input type='text' value={image} onChange={(e)=>setImage(e.target.value)} />    
                    <Button type='submit'> Dodaj </Button>   
                </Form>
                <Button red onClick={()=>clearForm()}> Wyczyść </Button>  
            </Container>
    </Background>
    )
}
