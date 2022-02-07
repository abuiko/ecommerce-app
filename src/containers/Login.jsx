import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    
    width: 600px;
    height: 400px;
    background-color: lightblue;

    display: flex;
    align-items: center;
    justify-content: center;

`
const Wrapper = styled.div`
        width: 60%;
        padding: 20px;
        
        
`
const Title = styled.h1`
        font-size: 24px;
        font-weight: 300;
`
const Form = styled.form`
        display: flex;
        flex-direction: column;
`
const Input = styled.input`
        flex: 1;
        min-width: 40%;
        margin: 10px 0px;
        padding: 10px;
`
const Button = styled.button`
        width: 40%;
        border: none;
        padding: 15px 20px;
        background-color: teal;
        color: white;
        cursor: pointer;
        argin-bottom: 10px;
`

const Link = styled.a`
        margin: 7px 0px;
        font-size: 12px;
        text-decoration: underline;
        cursor: pointer;
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="Username" />
                    <Input placeholder="Password" />
                    <Button>LOGIN</Button>
                    <Link>Forgot password?</Link>
                    <Link>Create a new account</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
