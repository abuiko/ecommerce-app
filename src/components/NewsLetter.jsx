import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { device } from '../responsive'


const Container = styled.div`
    height: 60vh;
    background-color: #fdfdfd;
    display: flex; 
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and ${device.mobile} {
        height: 40vh;
    }
    
`
const Title = styled.h1`
    font-size: 4rem;
    font-weight: 500;
    margin-bottom: 20px;


    @media screen and ${device.mobile} {
        font-size: 1.9rem;
    }
`
const Desc = styled.div`
    font-size: 1.2rem;
    font-weight: 300;
    margin-bottom: 3rem;

    @media screen and ${device.mobile} {
        font-size: 0.9rem;
        margin-bottom: 2rem;
    }
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    @media screen and ${device.mobile} {
        width: 70%;
        height: 35px;
    }
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px; 

    @media screen and ${device.mobile} {
        padding-left: 10px;
    }
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
`

const NewsLetter = () => {
    return (
        <Container>
            <Title>NewsLetter</Title>
            <Desc>Get timely updates from your favorite products!</Desc>
            <InputContainer>
                <Input placeholder="Your Email" />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default NewsLetter
