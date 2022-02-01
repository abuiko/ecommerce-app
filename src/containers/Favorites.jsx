import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Product from '../components/Product'
import styled from 'styled-components'
import { Context } from '../Context'
import { Link } from 'react-router-dom'

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
const TextWrapper = styled.div`
    min-height: 60vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`
const Text = styled.p`
    font-size: 22px;
    width: 80%;
    margin-bottom: 40px;
`
const Button = styled.button`
    background: #000;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 18px;
    cursor: pointer;
    font-weight: 500;
`
const Hr = styled.hr``


const Favorites = () => {
    const { allClothes } = useContext(Context)
    const favClothes = allClothes.filter(clothes => clothes.isFavorite === true)
    const favorite = favClothes.map(item => <Product key={item.id} item={item} />)

    return (
        <Container>
            <Navbar />
            <Title>Favorites</Title>
            {favorite.length > 0 ?
                <Wrapper>{favorite}</Wrapper> :
                <TextWrapper>
                    <Text>Want to save the items you love? Just click on the heart icon found on the product
        image and it will show up here.</Text>
                    <Button><Link to="/product_list" style={{ color: "#fff", textDecoration: "none" }}>Browse Now</Link></Button>
                </TextWrapper>
            }

            <Hr />
            <Footer />
        </Container>


    )
}

export default Favorites
