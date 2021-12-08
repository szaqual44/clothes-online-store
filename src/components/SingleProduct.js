
import { Link } from "react-router-dom"
import styled from "styled-components"


const Container = styled.div`
    width:300px; 
    height: 400px;
    margin:10px;
    position: relative;

    
`
const Image = styled.img` 
    width:100%;
    height: 100%;
    
`
const WhiteFilter = styled.div` 
    position:absolute;
    top:0;
    left:0;
    width: 100%;
    height:100%;
    background: white;
    cursor: pointer;
    opacity: 0.4;
    transition: 1s;
    &:hover{
        opacity: 0;
    }

`

export default function SingleProduct({ product}) {
    return (
        <Container>
            <Image src={product.img} />
            <Link to={`/products/${product._id}`}>   
            {/* <Link to={`/${product._id}`}>    */}
                <WhiteFilter/>            
            </Link>
            
        </Container>
    )
}
