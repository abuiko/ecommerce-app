
import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { device } from '../responsive'
import { BsSearch } from 'react-icons/bs'


export const Container = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    padding: 15px 0px;  
    height: 80px;
    z-index: 99;
    background-color: #fff; 
    
`
export const MobileWrapper = styled.div`
    display: none;

    @media screen and ${device.tablet} {
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export const MenuIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    cursor: pointer;
`

export const Wrapper = styled.div`
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
export const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

`

export const NavItem = styled(LinkR)`
    text-decoration: none;
    color: #000;
    margin-right: 30px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    font-size: 17px;

    &:hover {
        color: teal;
        font-weight: 500;
    }
`


export const Center = styled.div`
    flex: 1;
    text-align: center;
`
export const Logo = styled(LinkR)`
    font-weight: 700;   
    text-decoration: none;
    color: #000;
    font-size: 31px;

    @media screen and ${device.mobile} {
        font-size: 28px;
    }
`

export const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;  
`
export const InputWrap = styled.div`
    border: 1px solid #000;
    padding: 5px;
    border-radius: 5px;
    width: 300px;
    position: relative;
    margin-right: 10px;

    @media screen and ${device.laptop} {
        display: none;
    }
    
`
export const InputItem = styled.input`
    border: none;
    width: 100%;
    padding: 5px;
    outline: none;
    font-size: 16px;
`
export const Search = styled(BsSearch)`
    position: absolute;
    right: 3%;
    top: 50%;
    transform: translate(-3%, -50%);
`
export const MenuItem = styled.div`
    cursor: pointer;
    margin-left: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between; 

    position: ${props => props.type === "cart" && "relative"}
`

export const MenuLink = styled(LinkR)`
    text-decoratioN; none;
    color: #000;
`
export const RegisterLink = styled.p``
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
    bottom: -20%;
    right: -10%;
    color: white;
    font-weight: 700;
`