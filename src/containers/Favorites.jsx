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

const Title = styled.h1`
    font-size: 30px;
    font-weight: 500;
    margin: 40px 0px 20px;
    text-align: center;
    letter-spacing: 1px;    
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
                <Wrapper>{itemsInWishlist}</Wrapper> :
                <EmptySection icon={<FavoriteBorderOutlined style={{ fontSize: "35px" }} />} title="Wishlist" />
            }


        </Container>
    )
}

export default Favorites
