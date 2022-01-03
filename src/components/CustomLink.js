import styled from "styled-components"
import { Link } from 'react-router-dom'

const LinkStyled = styled(Link)`
    text-decoration: none;
    height:100%;
    white-space: nowrap;
    color:#d1d1d1;
    font-size: ${props=>props.brandText ? '28px' : '18px'};
    font-weight: 700;
    padding:0 10px;
    display:flex;  
    align-items: center;
    position: relative;

    &:hover{
        color:white;
        background-color: rgb(25,25,25);
    }
`

export const CustomLink = ({ children, to, brandText }) => (
    <LinkStyled  to={to} brandText={brandText} >
      {children}
    </LinkStyled>
  );