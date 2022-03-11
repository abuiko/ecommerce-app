
import styled from 'styled-components'
import { device } from '../responsive'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    background-color: #F8F8F8;
   
`
export const Icon = styled.div`
    border: 1px solid #000;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    background-color: white;
`
export const Text = styled.p`
    font-size: 22px;
    font-weight: 300;
    margin-bottom: 20px;
`
export const BtnContainer = styled.div`
    display: flex;
   justify-content: center;
    
`
export const BtnMenu = styled(Link)`
    width: 150px;
    padding: 10px;
    background-color: #000;
    border: 1px solid #000;
    color: white;
    text-decoration: none;
    text-align: center;
    font-weight: 500;
    font-size: 16px;
    margin-right: ${props => props.type === "leftBtn" && "10px"};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        
        background: white;
        color: #000;
    }

    @media screen and ${device.mobile} {
        margin-right: 0px;
        margin-bottom: 10px;
      
    }
`

