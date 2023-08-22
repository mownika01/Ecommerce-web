import React from 'react'
import { styled } from 'styled-components'


const Container = styled.div`
    width:100vw;
    height:100vh;
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
    background-image:linear-gradient(rgba(72, 71, 71, 0.5),rgba(255, 255, 255,0.5)),url('images/girl1.jpg');
    background-repeat:no-repeat;
    background-size:cover;
`
const Wrapper = styled.div`
     padding: 20px;
     width:40%;
     background-color:white;

     @media only screen and (max-width:380px){
       width:70%;
    }
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.div`
    display: flex;
    flex-wrap:wrap;

`
const Input = styled.input` 
    flex:1;
    min-width:40%;
    margin:20px 10px 0px 0px;
    padding:10px;

`
const Agreement = styled.div`
    font-size: 12px;
    margin:20px 0px;
`
const Button = styled.button`
    background-color:teal;
    color:white;
    cursor:pointer;
    border:none;
    width:40%;
    padding:15px 20px;
    font-size:15px;
`

const Register = () => {
  
  return (
    <Container>
        <Wrapper>
        <Title>Create An Account</Title>
        <Form>
            <Input placeholder='Name'></Input>
            <Input placeholder='Lastname'></Input>
            <Input placeholder='Username'></Input>
            <Input placeholder='email'></Input>
            <Input placeholder='password'></Input>
            <Input placeholder='Confirm password'></Input>
        </Form>
        <Agreement>By creating an account,I a consent to the processing of my personal data in accordance with <b>PRIVACY POLICY.</b></Agreement>
        <Button>CREATE</Button>
        </Wrapper>
    </Container>
  )
}

export default Register