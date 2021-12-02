import styled from "styled-components"
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Background = styled.section`
    width:100%; 
    background-color: #e4e4e3;  
    min-height:300px;
    display: flex;
    justify-content: center;
`
const Container = styled.div`
    width:1440px;
    display: flex;
    flex-direction:column;
    align-items: center;
`
const Socials = styled.div`
     margin: 30px 0;
     font-size: 40px;
     display: flex;
     justify-content: center;
`
const Icon = styled.div`
   margin: 0 20px;
`
const Divider = styled.div`
   width: 90%;
   border:1px solid #808080;     
`
const MenuContainer = styled.nav`
   display:grid;
   margin-top: 30px;
   width: 50%;
  
   grid-template-columns: 1fr 1fr;
`
const MenuList = styled.ul`
    list-style: none;
    text-align: ${props=>props.right ? 'right' : null};
`
const MenuLink = styled.li`
    margin:5px 0;
`
const Brand = styled.span`
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    margin: 40px 0;
`
const CopyRight = styled.span`
    font-size: 16px;
    text-align: center;
    margin: 40px 0;
`

export default function Footer() {
    return (
        <Background>
            <Container>
                <Socials>
                    <Icon><BsFacebook /></Icon>
                    <Icon><BsTwitter /></Icon>
                    <Icon><BsYoutube /></Icon>
                    <Icon><BsInstagram /></Icon>
                </Socials>
                <Divider/>
                <MenuContainer>
                    <MenuList>                   
                        <MenuLink>
                            <Link to='/' className="link-dark">
                                Women
                            </Link>
                        </MenuLink>   
                        <MenuLink>
                            <Link to='/' className="link-dark">
                                Men
                            </Link>
                        </MenuLink>   
                        <MenuLink>
                            <Link to='/' className="link-dark">
                                Sport
                            </Link>
                        </MenuLink>   
                        <MenuLink>
                            <Link to='/' className="link-dark">
                                Shoes
                            </Link>
                        </MenuLink>   
                        <MenuLink>
                            <Link to='/' className="link-dark">
                                Accessories
                            </Link>
                        </MenuLink>   
                    </MenuList> 
                    <MenuList right >
                         <MenuLink>
                            <Link to='/' className="link-dark">
                            About Us
                            </Link>
                        </MenuLink>
                        <MenuLink>
                            <Link to='/' className="link-dark">
                            Delivery
                            </Link>
                        </MenuLink>
                        <MenuLink>
                            <Link to='/' className="link-dark">
                            Payment
                            </Link>
                        </MenuLink>
                        <MenuLink>
                            <Link to='/' className="link-dark">
                            FAQ
                            </Link>
                        </MenuLink>
                        <MenuLink>
                            <Link to='/' className="link-dark">
                                Contact
                            </Link>
                        </MenuLink>  
                    </MenuList>                      
                </MenuContainer>
                <Brand>
                    Shoppuuu
                </Brand>
                <CopyRight>
                        © 2021 The content of this site is copyright-protected. 
                </CopyRight>
            </Container>
        </Background>
    )
}
