import React from 'react'
import { styled } from 'styled-components'
import Offer from '../components/Offer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'
import { Link } from 'react-router-dom'


const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding:50px;
    display:flex;   

    @media only screen and (max-width:380px){
       padding: 10px;
       flex-direction: column;
    }
`
const ImageContainer =  styled.div`
    flex:1;
`
const Image = styled.img`
     width:95%;
     height:70vh;
     object-fit:cover;

     @media only screen and (max-width:380px){
      height:40vh;
    }
`
const InfoContainer = styled.div`
    flex:1;
    padding:0px 50px;

    @media only screen and (max-width:380px){
       padding: 10px;
    }
`
const Title = styled.h1`
    font-weight: 100;
`
const Desc = styled.p`
    margin:20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    color:gray;
    font-size: 40px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content:space-between;
    margin:30px 0px;
    width:50%;

    @media only screen and (max-width:380px){
       width: 100%;
    }
`
const Filter = styled.div`
  display:flex;
  align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width:20px;
    height:20px;
    background-color:${props=>props.color};
    border-radius:50%;
    margin:0px 5px;
    cursor:pointer;
`
const FilterSize = styled.select`
    margin-left:10px;
    padding:5px;
`
const FilterSizeOption = styled.option`
    
`
const AddContainer = styled.div`
   display: flex;
   justify-content:space-between;
   width:50%;
   padding:20px 0px;

   @media only screen and (max-width:380px){
       width:100%;
    }
`
const AmountContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`
const Amount = styled.span`
    margin:0px 5px;
    width:30px;
    height:30px;
    border:1px solid teal;
    border-radius:10px;
    display: flex;
    align-items: center;
    justify-content:center;
`
const Button = styled.button`
    padding: 10px;
    border:2px solid teal;
    background-color:white;
    font-size: 15px;
    cursor: pointer;
    transition:0.5s;
    font-weight: 500;

    &:hover{
        background-color:#fcf4f2;
    }
`


const SingleProduct = () => {

  return (
    <Container>
        <Navbar />
        <Offer />
        <Wrapper>
          <ImageContainer>
            <Image src='images/p2.jpg'/>
          </ImageContainer>
          <InfoContainer>
             <Title>Denim Jeans</Title>
             <Desc>The upside of online shopping at TATA CLiQ online store, is that you'll save on time and most importantly
                     money with TataCliq offers. It's as simple as comparing products and prices online before making the right buy.
                     The upside of online shopping at TATA CLiQ online store, is that you'll save on time and most importantly
                     money with TataCliq offers. It's as simple as comparing products and prices online before making the right buy.
             </Desc>
             <Price>₹750</Price>
             <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color='black'/>
                    <FilterColor color='darkblue'/>
                    <FilterColor color='gray'/>
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                     <FilterSizeOption>XS</FilterSizeOption>
                     <FilterSizeOption>S</FilterSizeOption>
                     <FilterSizeOption>M</FilterSizeOption>
                     <FilterSizeOption>L</FilterSizeOption>
                     <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                </Filter>
             </FilterContainer>

             <AddContainer>
                
                <AmountContainer>
                    <Remove />
                    <Amount>1</Amount>
                    <Add />
                </AmountContainer>
                <Link to={`/cart`}>
                <Button>Add To Cart</Button>
                </Link>
             </AddContainer>
          </InfoContainer>
        </Wrapper>
        <NewsLetter />
        <Footer />
    </Container>
  )
}

export default SingleProduct;