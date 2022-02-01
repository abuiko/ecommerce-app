import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Product from '../components/Product'
import styled from 'styled-components'
import { Context } from '../Context'

const Container = styled.div`
    
`
const Wrapper = styled.div`
    min-height: 80vh;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-template-rows: auto; 
    grid-gap: 9px;
`
const Favorites = () => {
    const { allClothes } = useContext(Context)
    const favClothes = allClothes.filter(clothes => clothes.isFavorite === true)
    const favorite = favClothes.map(item => <Product key={item.id} item={item} />)

    return (
        <Container>
            <Navbar />
            <Wrapper>
                {favorite}
            </Wrapper>
            <Footer />
        </Container>


    )
}

export default Favorites
