import React from 'react'
import styled from 'styled-components'
import image1 from '../assets/new_arrivals2.jpg'
import image2 from '../assets/new_arrivals.jpg'
import { Link } from 'react-router-dom'

const Container = styled.div``
const Wrapper = styled.div`
    height: 70vh;
    display: flex;
    justify-content: flex-between;
    position: relative;
`

const Left = styled.div`
    background-color: red;
    flex: 1;
    
`
const Right = styled.div`
    background-color: blue;
    flex: 1;
   
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;


`
const Info = styled.div`
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -80%);
    background-color: rgba(255,255,255,0.8);
    padding: 1.7rem 5rem;
`
const Button = styled.button`
    border: none;
    text-decoration: underline;
    padding: 0.5rem 1rem;
    font-weight: 700;
    font-size: 1.1rem;
    margin: auto;
    display: block;
    background: transparent;

`
const Title = styled.p`
    font-size: 2rem;
    font-weight: 300;
    color: #000;
    letter-spacing: 5px;
    margin-bottom: 1rem;
`

const NewArrivals = () => {
    return (
        <Container>

            <Wrapper>
                <Info>
                    <Title>Spring Collection</Title>
                    <Button><Link to="/products" style={{ textDecoration: 'none', color: "black" }}>Show More</Link></Button>
                </Info>

                <Left>
                    <Image src={image1} />
                </Left>
                <Right>
                    <Image src={image2} />
                </Right>
            </Wrapper>

        </Container>
    )
}

export default NewArrivals
