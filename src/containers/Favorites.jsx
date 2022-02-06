import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Product from '../components/Product'
import styled from 'styled-components'
// import { Context } from '../Context'
import { Link } from 'react-router-dom'
import { FavoriteBorderOutlined } from '@material-ui/icons'
import { device } from '../responsive'
import Announcement from '../components/Announcement'
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
const EmptyFavWrapper = styled.div`
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
const EmptyFavText = styled.p`
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


const Favorites = () => {
    // const { allClothes } = useContext(Context)
    // const favClothes = allClothes.filter(clothes => clothes.isFavorite === true)
    // const favorite = favClothes.map(item => <Product key={item.id} item={item} />)

    return (
        <Container>
            <Announcement />
            <Navbar />
            {/* {favorite.length > 0 ?
                <Wrapper>{favorite}</Wrapper> :
                <TextWrapper>
                    <Text>Want to save the items you love? Just click on the heart icon found on the product
        image and it will show up here.</Text>
                    <Button><Link to="/products" style={{ color: "#fff", textDecoration: "none" }}>Browse Now</Link></Button>
                </TextWrapper>
            } */}

            <EmptyFavWrapper>
                <Icon>
                    <FavoriteBorderOutlined style={{ fontSize: "35px" }} />
                </Icon>
                <EmptyFavText>Your Shopping Bag is Empty</EmptyFavText>
                <ButtonContainer>
                    <ButtonMenu type="leftBtn">Shop Women's</ButtonMenu>
                    <ButtonMenu>Shop Men's</ButtonMenu>
                </ButtonContainer>

            </EmptyFavWrapper>


            <Footer />
        </Container>


    )
}

export default Favorites
