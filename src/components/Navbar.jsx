import React from 'react'
import styled from 'styled-components'
import {Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Container = styled.div `
    height:60px;
    @media only screen and (max-width:380px){
       height:50px;
    }
`;
const Wrapapper = styled.div `
    padding:10px 20px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    @media only screen and (max-width:380px){
       padding:10px 0px;
    }
`;
const Left = styled.div `
    flex:1;
    display:flex;
    align-items:center;
`;

const Language = styled.span`
    font-size:14px;
    cursor: pointer;
    @media only screen and (max-width:380px){
       display:none;
    }
`;

const SearchContainer = styled.div `
    border: 0.5px solid lightgray;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;
  
` ;  
const Input = styled.input`
    border:none;
    @media only screen and (max-width:380px){
       width:50px;
    }
`;
const Center = styled.div`
    flex:1;
    text-align:center;
`;

const Logo = styled.h1`
    font-weight:bold;
    @media only screen and (max-width:380px){
       font-size:24px;
    }
`

const Right= styled.div`
    flex:1;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    text-decoration:none;
    @media only screen and (max-width:380px){
       justify-content: center;
       flex:2;
    }
    
`;

const MenuLinks = styled.div`
    font-size: 14px;
    cursor:pointer;
    margin-left:25px;
    text-decoration:none;
    
    @media only screen and (max-width:380px){
      font-size: 12px;
      margin-left:10px;
    }
`;

    

const Navbar = () => {
  return (
       <Container>
        <Wrapapper>

          <Left>
            <Language>EN</Language>
           <SearchContainer>
              <Input placeholder='Search'/>
             <Search style={{color:"gray",fontSize:"16px"}}/>
           </SearchContainer>
          </Left>
        
          <Center>
            <Logo>Shop.</Logo>
          </Center>

          <Right>
            <Link to={`/register`} style={{textDecorationLine: "none",color:"black"}}>
            <MenuLinks>REGISTER</MenuLinks>
            </Link>
            <Link to={`/login`} style={{textDecorationLine: "none",color:"black"}}>
            <MenuLinks>SIGN IN</MenuLinks>
            </Link>
            <Link to={`/cart`} style={{color:"black"}}>
             <MenuLinks>
               <Badge badgeContent={4} color="primary">
                  <ShoppingCartOutlined />
               </Badge> 
             </MenuLinks>
             </Link>
          </Right>

        </Wrapapper>
       </Container>
  )
}

export default Navbar;