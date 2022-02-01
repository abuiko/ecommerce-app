import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import Product from './Product'
import { Context } from '../Context'

import { device } from '../responsive'



const Container = styled.div`     
`
const Wrapper = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-template-rows: auto; 
    grid-gap: 9px;  
`
const Title = styled.p`        
        text-align: center;
        margin: 20px 0px;
        font-size: 28px;
        font-weight: 300;
`

const Products = () => {

    const [slideIndex, setSlideIndex] = useState(0)
    const { allClothes } = useContext(Context)
    const shuffled = allClothes.sort(() => 0.5 - Math.random())
    let recommended = shuffled.slice(0, 6)

    return (
        <Container>
            <Title>Recommended Products</Title>

            <Wrapper>
                {recommended.map(item => (
                    <Product item={item} key={item.id} />
                ))}

            </Wrapper>



        </Container>
    )
}

export default Products
