import { Favorite, FavoriteBorderOutlined } from '@material-ui/icons'
import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { device } from '../responsive'
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { addToWishlist, removeFromWishlist } from '../redux/action'
// import { Context } from '../Context'

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
    }
`
const Container = styled.div`
    min-width: 280px;
    height: 400px;
    position: relative;
    background: white;
    -webkit-box-shadow: 2px 5px 10px -9px #000000; 
    box-shadow: 2px 5px 10px -9px #000000;
    
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
const Icon = styled.div`
   cursor: pointer;
`
const DetailsButton = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    font-size: 20px;
    background-color: rgba(255,255,255,0.6);
    border-radius: 7px;
    transition: all 0.4s ease-in-out;

    &:hover {
        transform: scale(1.1);
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

    const dispatch = useDispatch()
    const addProduct = (product) => {
        dispatch(addToWishlist(product))
    }

    const removeProduct = (product) => {
        dispatch(removeFromWishlist(product))
    }


    // const { toggleFavorite } = useContext(Context)

    // function heartIcon() {
    //     if (item.isFavorite) {
    //         return <Favorite style={{ fontSize: "27px" }} onClick={() => toggleFavorite(item.id)} />
    //     } else {
    //         return <FavoriteBorderOutlined style={{ fontSize: "27px" }} onClick={() => toggleFavorite(item.id)} />
    //     }
    // }


    return (
        <Container>
            <CardTop>
                <Image src={item.url} />
                <Info>
                    <Link to={`/products/${item.id}`} style={{ color: "black", textDecoration: "none" }}>
                        <DetailsButton>
                            Details
                        </DetailsButton>
                    </Link>

                </Info>
            </CardTop>
            <CardBottom>
                <CardText>
                    <Title>{item.name}</Title>
                    <Text>${item.price}</Text>
                </CardText>

                <Icon onClick={() => console.log(item.isFavorite)}>
                    <FavoriteBorderOutlined style={{ fontSize: "29px" }} />
                    {/* <Favorite style={{ fontSize: "29px" }} /> */}
                </Icon>


            </CardBottom>


        </Container>
    )
}

export default Product
