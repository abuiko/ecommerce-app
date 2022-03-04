import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { ShoppingCartOutlined, Menu, Favorite, FavoriteBorderOutlined, AccountCircleOutlined, SearchOutlined } from '@material-ui/icons';
import { device } from '../responsive'


const Container = styled.div`
   position: fixed;
   top: 0;
   width: 100%;
    padding: 15px 0px;  
    height: 60px;
    z-index: 99;
    background: white;  
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
    max-width: 1400px;
    margin: auto;
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

const NavItem = styled.span`
    margin-right: 30px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    font-size: 17px;

    &:hover {
        color: teal;
        font-weight: 500;
    }
`
// const Language = styled.span`
//     font-size: 14px;
//     cursor: pointer;
// `

// const SearchContainer = styled.div`
//     border: 1px solid lightgray;
//     display: flex;
//     align-items: center;
//     margin-left: 25px;
//     padding: 5px;
// `
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
    cursor: pointer;
    margin-left: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between; 

    position: ${props => props.type === "cart" && "relative"}
`
const Badge = styled.span`
    background-color: red;
    width: 17px;
    height: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    border-radius: 50%;
    position: absolute;
    bottom: -20%;
    right: -10%;
    color: white;
    font-weight: 700;
`



const Navbar = () => {

    const state = useSelector((state) => state.handleCart)

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
                    <Link to="/products" style={{ textDecoration: 'none', color: "black" }}><NavItem>Tops</NavItem></Link>
                    <Link to="/products" style={{ textDecoration: 'none', color: "black" }}><NavItem>Bottoms</NavItem></Link>
                    <Link to="/products" style={{ textDecoration: 'none', color: "black" }}><NavItem>Dresses</NavItem></Link>
                </Left>
                <Center>
                    <Logo><Link to="/" style={{ textDecoration: 'none', color: "black" }}>LOGO</Link></Logo>
                </Center>
                <Right>
                    <MenuItem>
                        <Link
                            to="/login"
                            style={{ textDecoration: 'none', color: "black" }}

                        >
                            <AccountCircleOutlined style={{ width: "25px", height: "25px" }} />
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/favorites" style={{ color: "black" }}>
                            <FavoriteBorderOutlined style={{ width: "25px", height: "25px" }} />
                        </Link>


                    </MenuItem>
                    <MenuItem type="cart">
                        <Link to="/cart" style={{ color: "black" }}>
                            <ShoppingCartOutlined style={{ width: "25px", height: "25px" }} />
                            <Badge>{state.length}</Badge>
                        </Link>


                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
