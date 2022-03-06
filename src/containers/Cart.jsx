import React, { useContext } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
// import { Context } from '../Context'

import { device } from '../responsive'
import { ShoppingCartOutlined } from '@material-ui/icons'
import EmptySection from '../components/EmptySection'

const Container = styled.div`
    width: 1400px;
    margin: auto;
    padding-top: 90px;
    min-height: 80vh;
`

const Wrapper = styled.div`
    
    margin-top: 30px;

    @media screen and ${device.tablet} {
        padding: 0px;
    }
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
    margin-bottom: 30px;

    @media screen and ${device.mobile} {
        font-size: 25px;
    }
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

const Cart = () => {

    const items = useSelector(state => state.handleCart)
    const itemsInCart = items.map(item => <CartItem item={item} key={item.id} />)
    return (
        <Container>
            {items.length > 0 ?
                <Wrapper>
                    <Title>YOUR CART</Title>
                    <Bottom>
                        <Info>{itemsInCart}</Info>
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
                :
                <EmptySection title="Shopping Cart" icon={<ShoppingCartOutlined style={{ fontSize: "35px" }} />} />
            }



        </Container>
    )
}

export default Cart
