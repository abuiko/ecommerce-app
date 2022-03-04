import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { device } from '../responsive'

const Container = styled.div`
    max-width: 1200px;
    margin: auto;
    min-height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    width: 100%;
    padding: 5rem 3rem 2rem; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`
const Left = styled.div`
  
    display: flex;
    flex-direction: column;
    
`
const Logo = styled.p`
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
`

const SocialContainer = styled.div`
    display: flex;
    margin-top: 1rem;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #000;
    
    margin-right: 20px;   
`
const List = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
   
    
`
const ListItem = styled.p`
    width: 50%;
    margin-bottom: 10px;   
`
const Right = styled.div`
   margin-top: 2rem;
    
`
const Desc = styled.div`
   margin-bottom: 1rem;
`
const InputContainer = styled.div`
    width: 100%;
    margin: 0rem;
`
const Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    padding: 0.7rem 0.4rem 1rem;
    margin-bottom: 1rem;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #000;
`
const Button = styled.button`
    display: inline-block;
    width: 100%;
    padding: 0.6rem;
    border: none;
    background-color: #000;
    color: #fff;
`


const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>LOGO</Logo>
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Sign In</ListItem>
                        <ListItem>Wishlist</ListItem>
                        <ListItem>Cart</ListItem>
                    </List>
                    <SocialContainer>
                        <SocialIcon>
                            <Facebook />
                        </SocialIcon>
                        <SocialIcon>
                            <Instagram />
                        </SocialIcon>
                        <SocialIcon>
                            <Twitter />
                        </SocialIcon>
                    </SocialContainer>
                </Left>
                <Right>
                    <Desc>Get updates from your favorite products!</Desc>
                    <InputContainer>
                        <Input placeholder="Your Email" />
                        <Button>Subscribe</Button>
                    </InputContainer>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Footer
