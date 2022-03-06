
import React from 'react'
import styled from 'styled-components'
import { device } from '../responsive'

const Container = styled.div`
    height: 500px;
    background: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and ${device.mobile} {
        height: 400px;
    }
`

const Wrapper = styled.div`
    width: 40%;
    padding: 2rem 3rem; 

    @media screen and ${device.tablet} {
        width: 50%;
        
    }

    @media screen and ${device.mobile} {
        width: 70%;
        padding: 1.5rem 2rem;
        text-align: center;
    }
    
`
const Title = styled.h2`
    font-size: 38px;

    @media screen and ${device.mobile} {
        font-size: 28px;
    }
    
`
const Desc = styled.div`
    margin-bottom: 2rem;
    font-size: 18px;

    @media screen and ${device.mobile} {
        font-size: 14px;
    }
`
const InputContainer = styled.div`
    width: 100%;
    margin: 0rem;
`
const Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    padding: 1rem 0.8rem;
    margin-bottom: 2rem;
    border: none;
`
const Button = styled.button`
    display: inline-block;
    width: 30%;
    padding: 0.6rem;
    border: none;
    background-color: #000;
    color: #fff;
    cursor: pointer;
`


const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <Title>NewsLetter</Title>
                <Desc>Get updates from your favorite products!</Desc>
                <InputContainer>
                    <Input placeholder="Your Email" />
                    <Button>Subscribe</Button>
                </InputContainer>
            </Wrapper>
        </Container>
    )
}

export default Footer