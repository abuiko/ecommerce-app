import React from 'react'
import NewArrivals from '../components/NewArrivals'
import styled from 'styled-components'
import { newObj, jeanObj } from '../components/NewArrivals/data'



const Container = styled.div``

const Home = () => {
    return (
        <Container>
            <NewArrivals {...newObj} />
            <NewArrivals {...jeanObj} />
        </Container>
    )
}

export default Home
