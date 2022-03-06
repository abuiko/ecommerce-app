import React from 'react'
import NewArrivals from '../components/NewArrivals'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Category from '../components/Categories'
import styled from 'styled-components'
import { newObj, jeanObj } from '../components/NewArrivals/data'


const Container = styled.div`
    max-width: 1400px;
    margin: auto;
    padding-top: 90px;
`

const Home = () => {
    return (
        <Container>
            <Announcement />
            <NewArrivals {...newObj} />
            <Category />
            <NewArrivals {...jeanObj} />
            <Newsletter />
        </Container>
    )
}

export default Home
