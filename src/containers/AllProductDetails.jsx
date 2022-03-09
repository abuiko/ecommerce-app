import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/action'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Add, Remove } from '@material-ui/icons'
import { device } from '../responsive'

const Container = styled.div`
    padding-top: 50px;
    max-width: 1280px;
    margin: auto;

`
const Wrapper = styled.div`
    padding: 70px 0px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    @media screen and ${device.mobile} {
        padding-bottom: 10px;
        padding-top: 15px;
    }
`
const ImgContainer = styled.div`
    @media screen and ${device.mobile} {
        margin-bottom: 40px;
    }
`
const Image = styled.img`
    width: 450px;

    @media screen and ${device.mobile} {
        width: 100%;
    }
    
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 550px;
  
    padding: 0px 50px;
    @media screen and ${device.tablet} {
        padding: 10px 10px;
    }
    @media screen and ${device.mobile} {
        width: 350px;
        padding: 10px 15px;
    }
`
const Title = styled.h1`
    font-weight: 300;
    text-transform: capitalize;

    @media screen and ${device.mobile} {
        font-size: 27px;
    }
`
const Desc = styled.p`
    margin: 20px 0px;  
    @media screen and ${device.mobile} {
        font-size: 14px;
    }
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;

    @media screen and ${device.mobile} {
        font-size: 25px;
    }
`
const FilterContainer = styled.div`
    width: 100%;
    margin: 30px 0px;
    
    @media screen and ${device.mobile} {
        width: 100%;
    }
`
const Filter = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;

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
    margin-left: 10px;
    cursor: pointer;

    @media screen and ${device.mobile} {
        width: 20px;
        height: 20px;
    }
`
const FilterSize = styled.select`
    padding: 15px;
    border: 1px solid lightgray;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    width: 50%;

    @media screen and ${device.mobile} {
        width: 100%;
    }
`
const FilterSizeOption = styled.option``



const Button = styled.button`
    display: block;
    padding: 15px;
    border: 1px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.5s ease;
    width: 50%;

    @media screen and ${device.mobile} {
        width: 100%;
    }

    &:hover {
        background-color: teal;
        color: white;
    }
`
const AllProductDetails = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)


    const dispatch = useDispatch()
    const addProduct = (product) => {
        dispatch(addToCart(product))
    }

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
                    ut labore et dolore magna aliqua. </Desc>
                    <Price>${product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color={product.color} />
                        </Filter>
                        <Filter>
                            <FilterSize>
                                <FilterSizeOption>Select Size</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                        <Filter>
                            <Button onClick={() => addProduct(product)}>ADD TO CART</Button>
                        </Filter>

                    </FilterContainer>

                </InfoContainer>
            </Wrapper>
        )
    }

    return (
        <Container>

            {loading ? <Loading /> : <ShowProduct />}



        </Container>
    )
}

export default AllProductDetails
