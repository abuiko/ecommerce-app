import React from 'react'
import styled from 'styled-components'
import { device } from '../responsive'
import { Link } from 'react-router-dom'

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 80vh; 
    position: relative;  

    @media screen and ${device.tablet} {
        margin: 0px;
    }
    
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and ${device.tablet} {
        height: 30vh;
    }
`
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button><Link to="/product_list" style={{ textDecoration: 'none', color: "black" }}>SHOP NOW</Link></Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
