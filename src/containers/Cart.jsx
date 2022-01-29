import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { Add, Remove } from '@material-ui/icons'

import { device } from '../responsive'

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
    margin-top: 30px;

    @media screen and ${device.tablet} {
        padding: 0px;
    }
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;

    @media screen and ${device.mobile} {
        font-size: 25px;
    }
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

    @media screen and ${device.tablet} {
        padding-bottom: 0px;
    }
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
    border: ${props => props.type === "filled" && "none"};
`
const TopTexts = styled.div`
    @media screen and ${device.tablet} {
        display: none;
    }
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and ${device.tablet} {
        flex-direction: column;
    }
`

const Info = styled.div`
    flex: 3;
`

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
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
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

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;

    @media screen and ${device.tablet} {
        margin-top: 20px;
      
    }
    
`
const SummaryTitle = styled.h2`
    font-weight: 200;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "700"};
    font-size: ${props => props.type === "total" && "20px"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    border: none;
`

const Cart = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <Title>YOUR CART</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetails>
                                <Image src="https://img.abercrombie.com/is/image/anf/KIC_155-1252-2632-280_prod1?policy=product-medium&wid=350&hei=438" />
                                <Details>
                                    <ProductName><b>Product:</b> JEANS</ProductName>
                                    <ProductId><b>ID:</b> 6454745</ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize><b>Size:</b> M</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>
                                    $30
                                </ProductPrice>
                            </PriceDetails>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetails>
                                <Image src="https://img.abercrombie.com/is/image/anf/KIC_155-1252-2632-280_prod1?policy=product-medium&wid=350&hei=438" />
                                <Details>
                                    <ProductName><b>Product:</b> JEANS</ProductName>
                                    <ProductId><b>ID:</b> 6454745</ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize><b>Size:</b> M</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>
                                    $30
                                </ProductPrice>
                            </PriceDetails>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$60</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$5.65</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$-5.65</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$60</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart
