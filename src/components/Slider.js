import styled from "styled-components"
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";


const Container = styled.div`
    margin-top:85px;
    position: relative;
    height:90vh; 
`
const Image = styled.img`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height: 100%;
    object-fit:cover;
    z-index:-2;
    opacity:0.3;
`

const ContentContainer = styled.div`
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   position: relative;


`
const Header = styled.h1`
    color:black;
    size:40px; 
    font-weight:300;
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

`
function previousSlide(){
    console.log('previous')
}

export default function Slider() {
    return (
        <Container>   
            <Image src={images[4]}/>
            <ContentContainer>    
                <ArrowSetting left onClick={previousSlide}>
                    <BsArrowLeftSquare size={70}/>
                </ArrowSetting>
                <Header>
                    <h1>Summer is comming! </h1>
                </Header>
                <ArrowSetting right>
                    <BsArrowRightSquare size={70}/>
               </ArrowSetting>
    

            </ContentContainer>
      
        </Container>
    )
}




const images = [
    "https://images.pexels.com/photos/70845/girl-model-pretty-portrait-70845.jpeg?cs=srgb&dl=pexels-pixabay-70845.jpg&fm=jpg",
 //    "https://www.pexels.com/pl-pl/zdjecie/mezczyzna-ubrany-w-brazowa-koszula-sukienka-gospodarstwa-bialy-kapelusz-fedory-1036627/",
    "https://images.pexels.com/photos/235462/pexels-photo-235462.jpeg?cs=srgb&dl=pexels-pixabay-235462.jpg&fm=jpg",
 //    "https://www.pexels.com/pl-pl/zdjecie/mezczyzna-para-chodzenie-szczesliwy-8943650/",
 
 "https://images.pexels.com/photos/6964950/pexels-photo-6964950.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
 "https://images.pexels.com/photos/1202281/pexels-photo-1202281.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
 "https://images.pexels.com/photos/792772/pexels-photo-792772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
 ]
 