import React from 'react'
import styled from 'styled-components'
import { device } from '../responsive'

const EmptyFavWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
    background-color: #F8F8F8;
   
`
const Icon = styled.div`
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
const EmptyFavText = styled.p`
    font-size: 22px;
    font-weight: 300;
    margin-bottom: 20px;
`
const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
`
const ButtonMenu = styled.button`
    width: 200px;
    padding: 10px 20px;
    border: 1px solid #000;
    background: white;
    color: #000;
    font-weight: 500;
    font-size: 16px;
    margin-right: ${props => props.type === "leftBtn" && "10px"};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #000;
        color: white;
    }

    @media screen and ${device.mobile} {
        margin-right: 0px;
        margin-bottom: 10px;
      
    }
`

const EmptySection = (props) => {
    return (
        <EmptyFavWrapper>
            <Icon>
                {/* <FavoriteBorderOutlined style={{ fontSize: "35px" }} /> */}
                {props.icon}
            </Icon>
            <EmptyFavText>Your {props.title} is Empty</EmptyFavText>
            <ButtonContainer>
                <ButtonMenu type="leftBtn">Browse Women's</ButtonMenu>
                <ButtonMenu>Browse Men's</ButtonMenu>
            </ButtonContainer>

        </EmptyFavWrapper>
    )
}

export default EmptySection
