import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../../components/CartItem'
// import { Context } from '../Context'
import { ShoppingCartOutlined } from '@material-ui/icons'
import EmptySection from '../../components/EmptySection'
import { Container, Wrapper, Title, Info, Bottom, Summary, SummaryTitle, SummaryItem, SummaryItemText, SummaryItemPrice, Button } from './CartElements'

const Cart = () => {

    const items = useSelector(state => state.handleCart)
    const itemsInCart = items.map(item => <CartItem item={item} key={item.id} />)
    // subtotal
    const sum = items.map(item => item.price).reduce((prev, curr) => prev + curr, 0)
    const subtotal = +(sum).toFixed(2)


    // estimated shipping
    const num = 5.65
    const shipping = subtotal < 50 ? num : 0


    // total price
    const result = subtotal + shipping
    const total = result.toFixed(2)
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
                                <SummaryItemPrice>${subtotal}</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Estimated Shipping</SummaryItemText>
                                <SummaryItemPrice>${shipping}</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type="total">
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice>${total}</SummaryItemPrice>
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
