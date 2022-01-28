import React from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'
import { categories } from '../data'
import { device } from '../responsive'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;

    @media screen and ${device.tablet} {
        flex-direction: column;
        padding: 0px;
    }
    
`
const Categories = () => {
    return (
        <Container>
            {categories.map(item => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Categories
