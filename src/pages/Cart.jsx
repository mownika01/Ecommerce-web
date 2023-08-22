import React from 'react'
import { styled } from 'styled-components'
import Navbar from '../components/Navbar'
import Offer from '../components/Offer'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 20px;
    margin-bottom:40px;
    @media only screen and (max-width:380px){
       padding :5px;
    }
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;

    
   @media only screen and (max-width:380px){
       display: none;
    }
`
const Top = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:20px;

`
const TopButton = styled.button`
    padding:10px;
    border:${props=>props.type ==='filled' && 'none'};
    background-color: ${props=>props.type ==='filled' ? 'black' : 'transparent'};
    color: ${props=>props.type ==='filled' && ' white'};
    font-weight:600;
    cursor: pointer;
`
const TopTexts = styled.div`
    @media only screen and (max-width:380px){
      display:none;
    }
`
const TopText = styled.span`
    margin:0px 10px;
    text-decoration:underline;
    cursor: pointer;
`
const Bottom = styled.div`
   display:flex;
   justify-content: space-between;

   @media only screen and (max-width:380px){
       flex-direction: column;
    }
`
const Info = styled.div`
      flex:3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom:40px;

    
   @media only screen and (max-width:380px){
       flex-direction: column;
    }
   
`
const ProductDetail = styled.div`
    flex:2;
    display: flex;
    
`
const Image = styled.img`
    width:200px;
`
const Details = styled.div`
    padding: 20px;
    display:flex;
    flex-direction:column;
    justify-content: space-around;

`
const ProductName = styled.span`
    
`
const ProductId = styled.span`
    
`
const ProductColor = styled.div`
      width:20px;
      height:20px;
      border-radius:50%;
      background-color:${props=>props.color};
`
const ProductSize = styled.span`
    
`
const PriceDetails = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ProductAmount = styled.div`
    display: flex;
    align-items: center;
    margin-bottom:20px;
`
const Amount = styled.div`
       font-size: 24px;
       margin: 5px;
       
   @media only screen and (max-width:380px){
       margin:10px;
    }
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`
const Hr = styled.hr`
    background-color:#eee;
    border:none;
    height: 1px;
`
const Summary = styled.div`
    flex:1;
    border:0.5px solid lightgray;
    height: 50vh;
    padding: 20px;
    
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
   display: flex;
   margin:30px 0px;
   justify-content: space-between;
   font-size: ${props=>props.type==='bold' && "24px"};
   font-weight: ${props=>props.type==='bold' && "600"};
`
const SummaryItemText = styled.span`
    
`
const SummaryItemPrice = styled.span`
    
`
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-size: 600;
`


const Cart = () => {
  return (
    <Container>
        <Offer />
        <Navbar />
        <Wrapper>
          <Title>Your Bag</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Your Cart(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type='filled'>CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                <Product>
                    <ProductDetail>
                        <Image src='images/p5.jpg'/>
                        <Details>
                            <ProductName><b>Product: </b> Sandals</ProductName>
                            <ProductId><b>Id: </b> 121</ProductId>
                            <ProductColor color='gray'/>
                            <ProductSize><b>Size: </b> 5</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetails>
                        <ProductAmount>
                            <Add />
                            <Amount>1</Amount>
                            <Remove />
                        </ProductAmount>
                        <ProductPrice>₹350</ProductPrice>
                    </PriceDetails>  
                </Product>
                <Hr />
                <Product>
                    <ProductDetail>
                        <Image src='images/p8.jpg'/>
                        <Details>
                            <ProductName><b>Product: </b> Crop Tops</ProductName>
                            <ProductId><b>Id: </b> 125</ProductId>
                            <ProductColor color='black'/>
                            <ProductSize><b>Size: </b> S</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetails>
                        <ProductAmount>
                            <Add />
                            <Amount>1</Amount>
                            <Remove />
                        </ProductAmount>
                        <ProductPrice>₹400</ProductPrice>
                    </PriceDetails>  
                </Product>
                </Info>
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>₹750</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>₹100</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>₹100</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type='bold'>
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>₹750</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart