
import { useState  } from 'react'
import styled from "styled-components"
import { backendURL } from '../../serverMethods'




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
   color:grey;
   margin-top: 10px;
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
const CheckboxContainer = styled.div`
    border:1px solid black;
    margin-top: 30px;
    padding:20px;
    display: flex;
    flex-direction: column;
    align-items: start;
`
const SubHeader = styled.span`
   font-size: 24px;
   font-weight: 700;
   margin-bottom:10px;
`
const CheckBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-align:center;
    & label{
        margin-left: 20px;
        font-size:24px;
        padding:20px;
        cursor: pointer;
        margin-top: 0;
    };
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
    margin-top: 120px;
    font-weight: 700;
    color:white;
    background: black;
    width:100%;
    padding:20px;
    cursor:grab;
`

export default function AddProductForm() {
    const [response,setResponse] = useState()
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState();
    const [cat, setCat] = useState([]);
    
    const handleSubmit =  (e)=>{
        e.preventDefault()        
        const newProduct = {
            name:name,
            desc:description,
            img:image,
            price:price,
            cat:cat            
        }
        backendURL.post('/products/add', newProduct)
         .then(res=>{
             setResponse(res.data)
             if (res.data.name) clearForm()
            })
         .catch(err=>console.log(err))
    }
    const clearForm = () =>{
        setName('')
        setDescription('')
        setImage('')
        setPrice(0)
        setCat([])
        clearCategories()
        console.log('Formular has been cleared')
    }
//CREATING ARRAY OF CATEFGORIES

    function handleCategories(e){
        const checkboxContainer = document.querySelector('#checkboxContainer')
        const check = checkboxContainer.querySelectorAll('input')
        const array = []                
        for(let i=0; i<check.length; i++){
            if (check[i].checked) array.push(check[i].name)           
        }      
        setCat(array)
    }

    function clearCategories(){
        const checkboxContainer = document.querySelector('#checkboxContainer')
        const check = checkboxContainer.querySelectorAll('input')
        for(let i=0; i<check.length; i++){
           check[i].checked=false  
        }      
    }
  
    return (
        <Background>
            <Container> 
                <Form onSubmit={handleSubmit}>
                    <Header>Dodaj produkt do bazy danych:</Header>
                    <Label>Name:</Label>
                    <Input type='text' value={name}  onChange={(e)=>setName(e.target.value)} />
                    <Label>Description:</Label>
                    <Input type='text' value={description} onChange={(e)=>setDescription(e.target.value)} />    
                    <Label>Price:</Label>
                    <Input type='number'value={price} onChange={(e)=>setPrice(e.target.value)} />    
                    <Label>Image:</Label>
                    <Input type='text' value={image} onChange={(e)=>setImage(e.target.value)} />    
                    <CheckboxContainer id="checkboxContainer">
                        <SubHeader>Categories</SubHeader>
                        <CheckBox>
                            <Input type="checkbox" name="woman" id="woman" onClick={handleCategories}/>
                            <Label for="woman">woman</Label>
                        </CheckBox> 
                        <CheckBox> 
                            <Input type="checkbox" name="man" id="man" onClick={handleCategories}/>
                            <Label for="man">man</Label>
                        </CheckBox> 
                        <CheckBox> 
                            <Input type="checkbox" name="shoes" id="shoes" onClick={handleCategories}/>
                            <Label for="shoes">shoes</Label>
                        </CheckBox> 
                    </CheckboxContainer>
                    {response!==undefined ?<Alert>{response.name+` has been added to the database!`} </Alert>:null}
                    <Button type='submit'> Dodaj </Button>   
                </Form>
            </Container>
    </Background>
    )
}
