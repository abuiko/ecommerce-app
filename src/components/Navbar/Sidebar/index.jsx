import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, Badge } from './SidebarElements'
import { useSelector } from 'react-redux'
import { FaTshirt, FaShoppingCart } from 'react-icons/fa'
import { GiTrousers, GiDress } from 'react-icons/gi'
import { MdFavorite } from 'react-icons/md'

const Sidebar = ({ isOpen, toggle }) => {
    const state = useSelector((state) => state.handleCart)
    return (

        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink
                        to="/products"
                        onClick={toggle}
                        offset={-80}
                    ><FaTshirt /></SidebarLink>
                    <SidebarLink
                        to="/products"
                        onClick={toggle}
                        offset={-80}
                    ><GiTrousers /></SidebarLink>
                    <SidebarLink
                        to="/products"
                        onClick={toggle}
                        offset={-80}
                    ><GiDress /></SidebarLink>
                    <SidebarLink
                        to="/favorites"
                        onClick={toggle}
                        offset={-80}
                    ><MdFavorite /></SidebarLink>
                    <SidebarLink
                        style={{ position: "relative" }}
                        to="/cart"
                        onClick={toggle}
                        offset={-80}
                    >
                        <FaShoppingCart />
                        <Badge>{state.length}</Badge>
                    </SidebarLink>

                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>


    )
}

export default Sidebar
