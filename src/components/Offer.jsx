import { styled } from "styled-components"

const Container = styled.div`
    height:40px;
    background-color:teal;
    color:white;
    font-size:14px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-weight:500;
    @media only screen and (max-width:380px){
       width:100%;
    }
`

const Offer = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over ₹1000
    </Container>
  )
}

export default Offer