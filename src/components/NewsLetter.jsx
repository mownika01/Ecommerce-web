import { Send } from '@mui/icons-material'
import { styled } from 'styled-components'

const Container = styled.div`
    height:60vh;
    background-color:#fae5e5;
    margin:25px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    @media only screen and (max-width:380px){
       font-size: 60px;
    }
`
const Desc = styled.div`
    margin-bottom:25px;
    font-size: 24px;
    font-weight: 300;

    @media only screen and (max-width:380px){
        font-size: 20px;
       text-align: center;
    }
`
const InputContainer = styled.div`
    border:1px solid lightslategray;
    width:50%;
    height:40px;
    display:flex;
    justify-content:space-between;
    background-color:white;

    @media only screen and (max-width:380px){
       width:80%;
    }
    
`
const Input = styled.input`
    border:none;
    padding-left: 20px;
    flex:8;
   
`
const Button = styled.button`
    cursor: pointer;
    background-color:teal;
    color:white;
    flex:1;
    border:none;
`

const NewsLetter = () => {
  return (
    <Container>
         <Title>Newsletter</Title>
         <Desc>Get Timely updates from your favourate products.</Desc>
         <InputContainer>
            <Input placeholder='Your E-Mail' />
            <Button>
             <Send />
            </Button>
         </InputContainer>
    </Container>
  )
}

export default NewsLetter