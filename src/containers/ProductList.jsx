import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Product from '../components/Product'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

import styled from 'styled-components'
import { popularProducts } from '../data'
import { device } from '../responsive'

const Container = styled.div``
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 28px;
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`

const Option = styled.option`
`

const Wrapper = styled.div`  
`
const ProductContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;    
`

const ProductList = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (lower to higher)</Option>
                        <Option>Price (higher to lower)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Wrapper>
                <ProductContainer>
                    {popularProducts.map(item => (
                        <Product item={item} key={item.id} />
                    ))}
                </ProductContainer>
            </Wrapper>


            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default ProductList
