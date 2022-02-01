import React, { useContext } from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Product from '../components/Product'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

import styled from 'styled-components'
import { device } from '../responsive'

import { Context } from '../Context'

const Container = styled.div``
const Title = styled.h1`
    margin: 20px;
    padding-left: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 2000px;
    margin: auto;
    padding: 0px 20px;
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
    max-width: 2000px;
    margin: auto;
`
const ProductContainer = styled.div`
    
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-template-rows: auto; 
    grid-gap: 9px;

    
`

const ProductList = () => {

    const { allClothes } = useContext(Context)

    return (
        <Container>
            <Announcement />
            <Navbar />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled defaultValue>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                        <Option disabled defaultValue>Size</Option>
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
                        <Option defaultValue>Newest</Option>
                        <Option>Price (lower to higher)</Option>
                        <Option>Price (higher to lower)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Wrapper>
                <ProductContainer>
                    {allClothes.map(item => (
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
