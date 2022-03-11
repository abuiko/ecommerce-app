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
