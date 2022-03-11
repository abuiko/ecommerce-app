import { Favorite, FavoriteBorderOutlined } from '@material-ui/icons'
import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { device } from './responsive'
import { Link as LinkR } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToWishlist, removeFromWishlist } from '../redux/action'
import { CgEnter } from 'react-icons/cg'


const Container = styled.div`
     
    position: relative;
    background: white;   
`
const CardTop = styled.div`
    width: 100%;
    height: 450px;  
    position: relative;
    
    @media screen and ${device.mobile} {
        height: 300px;
    }
`
const Image = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
`
const Icon = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 10px 15px;
`
const FavEmpty = styled(FavoriteBorderOutlined)`
   cursor: pointer;

`

const FavFull = styled(Favorite)`
   cursor: pointer;
`
const DetailsButton = styled(LinkR)`
    color: #000;
    text-decoration: none;
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px 15px;
    font-size: 28px;
    display: flex;
    align-items: center;
    background-color: rgba(255,255,255,0.3);
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
    margin-bottom: 7px;

    @media screen and ${device.mobile} {
        font-size: 17px;
    }
`

const Price = styled.p`
    font-weight: bold;
    margin-bottom: 7px;
`

const Color = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${props => props.color};

    @media screen and ${device.tablet} {
        width: 20px;
        height: 20px;
    }
`



const Product = ({ item }) => {

    const dispatch = useDispatch()
    const addProduct = (product) => {
        dispatch(addToWishlist(product))
        console.log(`added ${product.id}`)
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
                <DetailsButton to={`/products/${item.id}`}>
                    <CgEnter />
                </DetailsButton>
                <Icon>
                    <FavEmpty style={{ fontSize: "30px" }} onClick={() => addProduct(item)} />
                </Icon>
            </CardTop>
            <CardBottom>
                <CardText>
                    <Title>{item.name}</Title>
                    <Price>${item.price}</Price>
                    <Color color={item.color}></Color>
                </CardText>
            </CardBottom>


        </Container >
    )
}

export default Product
