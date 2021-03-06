import React from 'react'
import { useSelector } from 'react-redux'
import { ShoppingCartOutlined, Menu, FavoriteBorderOutlined, AccountCircleOutlined } from '@material-ui/icons';
import { Container, MobileWrapper, Logo, MenuIcon, NavItem, MenuLink, RegisterLink, Wrapper, Left, Center, Right, MenuItem, Badge } from './NavbarElements'
import { InputItem, InputWrap, Search } from './NavbarElements'

const Navbar = ({ toggle }) => {

    const state = useSelector((state) => state.handleCart)

    return (
        <Container>
            <MobileWrapper>
                <Logo to="/">LOGO</Logo>
                <MenuIcon>
                    <Menu onClick={toggle} />
                </MenuIcon>
            </MobileWrapper>
            <Wrapper>
                <Left>
                    <NavItem to="/products">Tops</NavItem>
                    <NavItem to="/products">Bottoms</NavItem>
                    <NavItem to="/products">Dresses</NavItem>
                </Left>
                <Center>
                    <Logo to="/">LOGO</Logo>
                </Center>
                <Right>
                    <InputWrap>
                        <InputItem />
                        <Search />
                    </InputWrap>
                    <MenuItem>
                        <MenuLink to="/favorites">
                            <FavoriteBorderOutlined style={{ width: "25px", height: "25px" }} />
                        </MenuLink>
                    </MenuItem>
                    <MenuItem type="cart">
                        <MenuLink to="/cart">
                            <ShoppingCartOutlined style={{ width: "25px", height: "25px" }} />
                            <Badge>{state.length}</Badge>
                        </MenuLink>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
