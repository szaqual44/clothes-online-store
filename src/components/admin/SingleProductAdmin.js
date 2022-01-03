import { useState, useEffect ,useRef } from 'react'
import styled from "styled-components"

const Container = styled.div`  
   margin-top: 10px;
   display:grid; 
   grid-template-columns: 50px 200px 200px 200px 200px;  
   gap: 10px;    
`
const Nr = styled.div`  
   
`
const Image = styled.img`  
   height: 100px;
  
`
const Name = styled.input`
    height: 30px;
    width: 80%;
   
`
const Desc = styled.div`  
  

`
const Price = styled.div`  
   
`
const Header = styled.div`  
   font-weight: 700;
`



export default function SingleProductAdmin({item, i}) {

    const [name, setName] = useState()

    function handleName(e){
       
    }
    useEffect(() => {
       setName()
       console.log(name)
    }, [])
    return (
        <Container>
            {item!==undefined 
            // RENDERING ITEMS
            ? <>
            <Nr>
                {i}
            </Nr>
            <Image src={item.img} alt={item.name} />
            <Name value={item.name} onChange={handleName}/>        
            <Desc>
                {item.desc}
            </Desc>
            <Price>
                {item.price}
            </Price>
        </>
         // RENDERING TABLE's HEADER 
            : <>
                <Header>
                   Nr
                </Header>
                <Header>
                    
                </Header>
                <Header>
                    Name
                </Header>
                <Header>
                    Description
                </Header>
                <Header>
                    Price
                </Header>
            </> 
   
             }
         



           
           
        </Container>
    )
}
