import {useState , useEffect} from 'react'
import styled from "styled-components"
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import { width } from "@mui/system";

const Container = styled.div`
   
    margin-top:85px;
    position: relative;
    display:flex;   
    overflow: hidden;   
`
const ImgContainer = styled.div`
    display:flex;
    filter: opacity(0.6);
`
const Image = styled.img`
    height:100vh;
    width:100vw;
    object-fit: cover;
    display: block;   
    transition: all 0.5s ease-out;
    transform: translateX(${props=>props.swipe});
`
const ContentContainer = styled.div`
   height: 100%;
   display: relative;
   align-items: center;
   justify-content: center;
   position: absolute;
   width:100%;
   z-index:100; 
`
const Header = styled.h1`
    color:black;
    size:40px; 
    font-weight:300;
    position:absolute;
    text-align:center;
    top:50%;
    left:50%; 
    transform: translateX(-50%) translateY(-50%);
`
const ArrowSetting = styled.span`
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    left:${props=>props.left ? '20px' : null};
    right:${props=>props.right ? '20px' : null};
    size:80px;
    color:grey;
    cursor: pointer;
    z-index: 1;
`

export default function Slider() {
    const [imageNumber,setImageNumber] = useState(0)
    const [swipe,setSwipe] = useState('')
    

    // change img number into translateX string param
    useEffect(() => {   
        setSwipe(`-${imageNumber*100}%`);
    }, [imageNumber])

    function changeSlide(direction){
        if (direction==='previous'){
            if (imageNumber===0) setImageNumber(images.length)
            setImageNumber(imageNumber=>imageNumber-1)
        } else if (direction === 'next'){
            if (imageNumber===images.length-1) {
                setImageNumber(0)
                return
            }
            setImageNumber(imageNumber=>imageNumber+1)
        }       
        console.log(imageNumber)    
        console.log(images.length)
    }
    
    return (
        <Container>
            {/* SLIDER - FOTOS */}
            <ImgContainer>
                {images.map(img=>{
                  return <Image key={img} src={img} swipe={swipe} />
                })}                
            </ImgContainer>
          
            {/* SLIDER - ARROWS AND TEXT */}
            <ContentContainer>    
                <ArrowSetting left onClick={()=>changeSlide('previous')}>
                    <BsArrowLeftSquare size={70}/>
                </ArrowSetting>
                <Header>
                    <h1>Summer is comming! </h1>
                </Header>
                <ArrowSetting right onClick={()=>changeSlide('next')}>
                    <BsArrowRightSquare size={70}/>
               </ArrowSetting>
            </ContentContainer>
        </Container>
    )
}




const images = [
    "https://images.pexels.com/photos/70845/girl-model-pretty-portrait-70845.jpeg?cs=srgb&dl=pexels-pixabay-70845.jpg&fm=jpg",
    "https://images.pexels.com/photos/235462/pexels-photo-235462.jpeg?cs=srgb&dl=pexels-pixabay-235462.jpg&fm=jpg",
 
 "https://images.pexels.com/photos/6964950/pexels-photo-6964950.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
 "https://images.pexels.com/photos/1202281/pexels-photo-1202281.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//  "https://images.pexels.com/photos/792772/pexels-photo-792772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
 ]
 
















