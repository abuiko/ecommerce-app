import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { device } from '../responsive'
import { Link } from 'react-router-dom'

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 320px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    background-color: rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;

    @media screen and ${device.mobile} {

        opacity: 1;
        background-color: transparent;
        align-items: end;
        justify-content: center;     
    }
`

const Container = styled.div`
    min-width: 280px;
    height: 400px;
    position: relative;
    
    &:hover ${Info} {
        opacity: 1;
    }

`

const CardTop = styled.div`
    width: 100%;
    height: 320px;       
`

const Image = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
`
const HeartIcon = styled.div`
   
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    background: rgba(255,255,255,0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: all 0.4s ease-in-out;

    &:hover {
        transform: scale(1.2);
    }
`

const CardBottom = styled.div`
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const CardText = styled.div`
    
`

const Title = styled.p`
    font-size: 20px;
    text-transform: capitalize;
    margin-bottom: 5px;
`

const Text = styled.p``


const Product = ({ item }) => {
    return (
        <Container>
            <CardTop>
                <Image src={item.url} />


                <Info>
                    <Icon type="search" style={{ marginRight: "10px" }}>
                        <Link to="/product_details" style={{ color: "black" }}><SearchOutlined /></Link>
                    </Icon>
                    <Icon>
                        <Link to="/cart" style={{ color: "black" }}>
                            <ShoppingCartOutlined />
                        </Link>

                    </Icon>
                </Info>
            </CardTop>
            <CardBottom>
                <CardText>
                    <Title>{item.name}</Title>
                    <Text>{item.price}</Text>
                </CardText>

                <HeartIcon>
                    <FavoriteBorderOutlined style={{ fontSize: "27px" }} />
                </HeartIcon>


            </CardBottom>


        </Container>
    )
}

export default Product
