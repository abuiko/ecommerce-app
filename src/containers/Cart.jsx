import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import styled from 'styled-components'

import CartItem from '../components/CartItem'
// import { Context } from '../Context'

import { device } from '../responsive'
import { ShoppingCartOutlined } from '@material-ui/icons'

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
const EmptyCartWrapper = styled.div`
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
const EmptyCartText = styled.p`
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
const Cart = () => {
    // const { cartItems } = useContext(Context)
    // const itemsInCart = cartItems.map(item => <CartItem item={item} key={item.id} />)


    return (
        <Container>
            <Announcement />
            <Navbar />
            <EmptyCartWrapper>
                <Icon>
                    <ShoppingCartOutlined style={{ fontSize: "35px" }} />
                </Icon>
                <EmptyCartText>Your Shopping Bag is Empty</EmptyCartText>
                <ButtonContainer>
                    <ButtonMenu type="leftBtn">Shop Women's</ButtonMenu>
                    <ButtonMenu>Shop Men's</ButtonMenu>
                </ButtonContainer>

            </EmptyCartWrapper>
            {/* <Wrapper>
                <Title>YOUR CART</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        
                        <TopText>Items In Cart (0)</TopText>

                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info></Info>
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
            </Wrapper> */}
            <Footer />
        </Container>
    )
}

export default Cart
