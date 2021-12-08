import axios from 'axios'
import React, {useState} from 'react'
import styled  from 'styled-components'
import LoadProductForm from '../components/LoadProductForm'
import Navbar from '../components/Navbar'



const Container = styled.div`
 
    margin-top: 120px;
   
`
const FormContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

   
`
const Form = styled.form`
    width:500px;
    min-height:400px;
    border: 2px solid grey;
    border-radius:10px;
    padding:20px;
    display:flex;
    flex-direction: column;
    background-color: #dcf7d2;

`
const Label = styled.label`
    font-size:20px;
    font-weight: bold;
    margin-bottom:5px;
    margin-top:20px;
`
const Input = styled.input`
    width:80%;
    line-height: 2;
`
const Button = styled.button`
    background: ${props => props.red ? "red" : "green"};
    color:yellow;
    font-weight: bold;
    padding:10px 20px;
    margin-top:20px;
    border-radius: 10px;
`


export default function LoadProducts() {
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
        <>
            <Navbar/>
            <LoadProductForm/>
        </>
    )
}
