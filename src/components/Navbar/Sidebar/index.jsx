import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements'

import { FaTshirt, FaShoppingCart } from 'react-icons/fa'
import { GiTrousers, GiDress } from 'react-icons/gi'
import { MdFavorite, MdAccountCircle } from 'react-icons/md'

const Sidebar = ({ isOpen, toggle }) => {
    return (

        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink
                        onClick={toggle}
                        offset={-80}
                    ><FaTshirt /></SidebarLink>
                    <SidebarLink
                        onClick={toggle}
                        offset={-80}
                    ><GiTrousers /></SidebarLink>
                    <SidebarLink
                        onClick={toggle}
                        offset={-80}
                    ><GiDress /></SidebarLink>
                    <SidebarLink
                        onClick={toggle}
                        offset={-80}
                    ><MdFavorite /></SidebarLink>
                    <SidebarLink
                        onClick={toggle}
                        offset={-80}
                    ><FaShoppingCart /></SidebarLink>
                    <SidebarLink
                        onClick={toggle}
                        offset={-80}
                    ><MdAccountCircle /></SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>


    )
}

export default Sidebar
