import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined, Menu, Favorite, FavoriteBorderOutlined } from '@material-ui/icons';
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
                <Logo><Link to="/" style={{ textDecoration: 'none', color: "black" }}>LOGO</Link></Logo>
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
                    <Logo><Link to="/" style={{ textDecoration: 'none', color: "black" }}>LOGO</Link></Logo>
                </Center>
                <Right>
                    <MenuItem><Link to="/register" style={{ textDecoration: 'none', color: "black" }}>REGISTER</Link></MenuItem>
                    <MenuItem><Link to="/register" style={{ textDecoration: 'none', color: "black" }}>SIGN IN</Link></MenuItem>
                    <MenuItem>
                        <Link to="/favorites">
                            <FavoriteBorderOutlined />
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/cart" style={{ color: "black" }}>
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </Link>

                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
