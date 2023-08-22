import React from 'react'
import { styled } from 'styled-components'
import {useHistory} from 'react-router-dom'

const Container = styled.div`
    width:100vw;
    height:100vh;
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
    background-image:linear-gradient(rgba(76, 75, 75, 0.5),rgba(186, 184, 184, 0.5)),url('images/girl.jpeg');
    background-repeat:no-repeat;
    background-size:cover;
`
const Wrapper = styled.div`
     padding: 20px;
     width:25%;
     background-color:white;

     @media only screen and (max-width:380px){
       width:75%;
    }
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.div`
    display: flex;
    flex-direction: column;

`
const Input = styled.input` 
    flex:1;
    min-width:25%;
    margin: 10px 0px;
    padding:10px;

`

const Button = styled.button`
    background-color:teal;
    color:white;
    cursor:pointer;
    border:none;
    width:40%;
    padding:15px 20px;
    font-size:15px;
    margin-bottom:10px;
`
const Link = styled.a`
    display: flex;
    align-items:center;
    justify-content:center;
    margin:10px 0px;
    text-decoration:underline;
    cursor: pointer;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder='username'></Input>
            <Input placeholder='password'></Input>
        </Form>
        <Button>LOGIN</Button>
        <Link>Forgot password?</Link>
        <Link>Create a new account</Link>
        </Wrapper>
    </Container>
  )
}

export default Login