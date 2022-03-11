import React from 'react'
import styled from 'styled-components'
import { Add, Remove } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/action'
import { device } from './responsive'

const Container = styled.div``

const Product = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and ${device.tablet} {
        padding: 20px 0px;
    }
`
const ProductDetails = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 150px;
    padding: 20px;

    @media screen and ${device.tablet} {
        width: 100px;
        padding: 10px 20px;
    }
    
`
const Details = styled.div`
    margin: 15px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${props => props.color};

    @media screen and ${device.tablet} {
        width: 15px;
        height: 15px;
    }
`
const ProductSize = styled.span``

const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;

    @media screen and ${device.tablet} {
        font-size: 18px;
    }
`

const ProductPrice = styled.span`
    font-size: 30px;
    font-weight: 200;

    @media screen and ${device.tablet} {
        font-size: 22px;
    }
`

const RemoveItem = styled.span`
    cursor: pointer;
    color: red;
    font-size: 16px;
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const CartItem = ({ item }) => {

    const dispatch = useDispatch()
    const removeProduct = (product) => {
        dispatch(removeFromCart(product))
    }

    return (
        <Container>
            <Product>
                <ProductDetails>
                    <Image src={item.url} />
                    <Details>
                        <ProductName><b>Product:</b> {item.name.toUpperCase()}</ProductName>
                        <ProductId><b>ID:</b> {item.id}</ProductId>
                        <ProductColor color={item.color} />
                        <ProductSize><b>Size:</b> M</ProductSize>
                        <RemoveItem onClick={() => removeProduct(item)}>Remove Item</RemoveItem>
                    </Details>
                </ProductDetails>
                <PriceDetails>
                    <ProductAmountContainer>
                        <Add />
                        <ProductAmount>2</ProductAmount>
                        <Remove />
                    </ProductAmountContainer>
                    <ProductPrice>
                        ${item.price}
                    </ProductPrice>
                </PriceDetails>
            </Product>
            <Hr />
        </Container>

    )
}

export default CartItem
