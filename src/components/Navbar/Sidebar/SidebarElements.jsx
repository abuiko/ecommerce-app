import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { device } from '../../responsive'
import { Link } from "react-router-dom"

export const SidebarContainer = styled.aside`
    
    position: fixed;
    z-index: 999;
    width: 25%;
    height: 100%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    right: 0;
    bottom: 0;
    transition: all 0.4s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`

export const CloseIcon = styled(FaTimes)`
    color: #000;
`

export const Icon = styled.div`
    position: absolute;
    top: 2rem;
    right: 1rem;
    background: transparent;
    font-size: 1.4rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
   height: 60%;
`

export const SidebarMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    padding: 0rem;
    height: 100%;
    
`

export const SidebarLink = styled(Link)`
   
    font-size: 2.1rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #000;
    cursor: pointer;
    

    &:hover {
        color: teal;
        transition: 0.2s ease-in-out;
    }

`

export const Badge = styled.span`
    background-color: red;
    width: 17px;
    height: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    border-radius: 50%;
    position: absolute;
    bottom: -3%;
    right: -10%;
    color: white;
    font-weight: 700;
`