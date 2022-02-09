import React, { useContext } from 'react'
import Product from '../components/Product'
import styled from 'styled-components'
// import { Context } from '../Context'
import { Link } from 'react-router-dom'
import { FavoriteBorderOutlined } from '@material-ui/icons'
import { device } from '../responsive'
import EmptySection from '../components/EmptySection'

import { useSelector } from 'react-redux'

const Container = styled.div`
    
`

const Title = styled.h1`
    font-size: 30px;
    font-weight: 500;
    margin: 40px 0px 20px;
    text-align: center;
    letter-spacing: 1px;    
`

const Wrapper = styled.div`
    min-height: 80vh;
    padding: 20px 20px 40px 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-template-rows: auto; 
    grid-gap: 9px;
`



const Favorites = () => {

    const items = useSelector(state => state.handleWishlist)
    const itemsInWishlist = items.map(item => <Product item={item} key={item.id} />)

    return (
        <Container>
            {items.length > 0 ?
                <Wrapper>{itemsInWishlist}</Wrapper> :
                <EmptySection icon={<FavoriteBorderOutlined style={{ fontSize: "35px" }} />} title="Wishlist" />
            }


        </Container>
    )
}

export default Favorites
