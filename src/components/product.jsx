import { FavoriteBorder, Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'


const Info = styled.div`
    opacity:0;
    width:100%;
    height:100%;
    position:absolute;
    display:flex;
    background-color:rgba(0,0,0,0.2);
    align-items:center;
    justify-content:center;
    transition: all 0.5s ease;
`


const Container = styled.div`
    flex:1;
    min-width:280px;
    height:350px;
    margin:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#e9f7fc;
    position:relative;
    transition:0.5s ease;

    &:hover ${Info}{
        opacity:1;
    }
`
const Image = styled.img`
    height:75%;
    object-fit:cover;
`

const Icon = styled.div`
    background-color:white;
    color:black;
    border-radius:50%;
    padding:5px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;
    transition:0.5s ease;
    cursor: pointer;

    &:hover{
       transform:scale(1.3)
    }

`


const Product = ({item}) => {

  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Link to={`/cart`}>
            <Icon>
             <ShoppingCartOutlined />
            </Icon>
            </Link>
            <Link to={`/product`}>
            <Icon>
              <Search />
            </Icon>
            </Link>
            <Icon>
               <FavoriteBorder />
            </Icon>

        </Info>
    </Container>
  )
}

export default Product;