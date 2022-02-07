import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NewsLetter from '../components/NewsLetter'

import styled from 'styled-components'
import { Add, Remove } from '@material-ui/icons'
import { device } from '../responsive'

const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    max-width: 1280px;
    margin: auto;
   

    @media screen and ${device.mobile} {
        flex-direction: column;
    }
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    padding: 0px 50px;

    @media screen and ${device.tablet} {
        padding: 10px 10px;
    }
`
const Title = styled.h1`
    font-weight: 300;
    text-transform: capitalize;

`
const Desc = styled.p`
    margin: 20px 0px;
    
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 100%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;

    @media screen and ${device.mobile} {
        width: 100%;
    }
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 15px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 10px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    @media screen and ${device.mobile} {
        width: 100%;
    }
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 1px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.5s ease;

    &:hover {
        background-color: teal;
        color: white;
    }
`



const AllProductDetails = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const response = await fetch(`https://my-c-store-api.herokuapp.com/clothes/${id}`)
            setProduct(await response.json())
            setLoading(false)
        }

        getProduct()
    }, [])

    const Loading = () => {
        return (
            <>Loading...</>
        )
    }

    const ShowProduct = () => {
        return (
            <Wrapper>
                <ImgContainer>
                    <Image src={product.url} alt={product.name} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.name}</Title>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit.</Desc>
                    <Price>${product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color={product.color} />

                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>

            </Wrapper>
        )
    }

    return (
        <Container>


            {loading ? <Loading /> : <ShowProduct />}



            <NewsLetter />

        </Container>
    )
}

export default AllProductDetails
