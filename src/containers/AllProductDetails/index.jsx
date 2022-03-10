import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/action'
import { useParams } from 'react-router-dom'
import { Container, Wrapper, ImgContainer, Image, InfoContainer, TitleContainer, IconBtn, Icon, Title, Desc, Price, FilterContainer, Filter, BtnWrapper, FilterTitle, FilterColor, FilterSize, FilterSizeOption, Button } from './AllDetailsElements'


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
                    <TitleContainer>
                        <Title>{product.name}</Title>

                        <Icon style={{ fontSize: "30px" }} />

                    </TitleContainer>

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
