import React from 'react'
import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'
import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined, Menu } from '@material-ui/icons';
import { device } from '../responsive'


const Container = styled.div`
    height: 60px;    
`
const MobileWrapper = styled.div`
    display: none;

    @media screen and ${device.tablet} {
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

const MenuIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    cursor: pointer;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;


    @media screen and ${device.tablet} {
        display: none;
    }
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;    
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const Navbar = () => {
    return (
        <Container>
            <MobileWrapper>
                <Logo>LOGO</Logo>
                <MenuIcon>
                    <Menu />
                </MenuIcon>
            </MobileWrapper>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <AiOutlineSearch style={{ color: "gray", fontSize: '16px' }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>LOGO</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
