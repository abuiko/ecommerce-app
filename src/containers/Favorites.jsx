import React, { useContext } from 'react'
import Product from '../components/Product'
import styled from 'styled-components'
// import { Context } from '../Context'
import { Link } from 'react-router-dom'
import { FavoriteBorderOutlined } from '@material-ui/icons'
import { device } from './responsive'
import EmptySection from '../components/EmptySection'

import { useSelector } from 'react-redux'

const Container = styled.div`
    max-width: 1400px;
    margin: auto;
    padding-top: 90px;
    min-height: 80vh;
`

export const Title = styled.h1`
    font-weight: 300;
    text-align: center;
    margin-bottom: 30px;

    @media screen and ${device.mobile} {
        font-size: 25px;
    }
`
const Favwrap = styled.div`
    margin-top: 30px;
`
const Wrapper = styled.div`
    min-height: 80vh;
    padding: 20px 10px 50px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 10px; 
    
    @media screen and ${device.mobile} {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`



const Favorites = () => {

    const items = useSelector(state => state.handleWishlist)
    const itemsInWishlist = items.map(item => <Product item={item} key={item.id} />)

    return (
        <Container>
            {items.length > 0 ?
                <Favwrap>
                    <Title>YOUR FAVORITES</Title>
                    <Wrapper>{itemsInWishlist}</Wrapper>
                </Favwrap>
                :
                <EmptySection icon={<FavoriteBorderOutlined style={{ fontSize: "35px" }} />} title="Wishlist" />
            }


        </Container>
    )
}

export default Favorites
