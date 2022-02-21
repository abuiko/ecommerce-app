import React from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'
import { categories } from '../data'
import { device } from '../responsive'
import NewArrivals from './NewArrivals'

const Container = styled.div`
    
`
const Wrapper = styled.div`
display: flex;
    
justify-content: space-between;

@media screen and ${device.tablet} {
    flex-direction: column;
    padding: 0px;
}
`
const Categories = () => {
    return (
        <Container>
            <NewArrivals />
            <Wrapper>
                {categories.map(item => (
                    <CategoryItem item={item} key={item.id} />
                ))}
            </Wrapper>

        </Container>
    )
}

export default Categories
