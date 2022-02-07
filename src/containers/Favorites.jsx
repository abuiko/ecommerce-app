import React, { useContext } from 'react'
import Product from '../components/Product'
import styled from 'styled-components'
// import { Context } from '../Context'
import { Link } from 'react-router-dom'
import { FavoriteBorderOutlined } from '@material-ui/icons'
import { device } from '../responsive'
import EmptySection from '../components/EmptySection'
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
    // const { allClothes } = useContext(Context)
    // const favClothes = allClothes.filter(clothes => clothes.isFavorite === true)
    // const favorite = favClothes.map(item => <Product key={item.id} item={item} />)

    return (
        <Container>

            {/* {favorite.length > 0 ?
                <Wrapper>{favorite}</Wrapper> :
                <TextWrapper>
                    <Text>Want to save the items you love? Just click on the heart icon found on the product
        image and it will show up here.</Text>
                    <Button><Link to="/products" style={{ color: "#fff", textDecoration: "none" }}>Browse Now</Link></Button>
                </TextWrapper>
            } */}

            <EmptySection icon={<FavoriteBorderOutlined style={{ fontSize: "35px" }} />} title="Wishlist" />



        </Container>


    )
}

export default Favorites
