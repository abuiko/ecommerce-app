import React, { useState } from 'react'
import styled from 'styled-components'
import Product from './Product'
import { popularProducts } from '../data'
import { device } from '../responsive'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';


const Container = styled.div`
    
`
const TabletContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media screen and ${device.mobile} {
        display: none;
    }
`
const MobileContainer = styled.div`
    display: none;

    @media screen and ${device.mobile} {
        
        width: 100%;
        height: 30vh;
        display: flex;
        position: relative;
        overflow: hidden;
    }
`

const MobileTitle = styled.p`
    display: none;

    @media screen and ${device.mobile} {
        
        display: block;
        text-align: center;
        margin: 20px 0px;
        font-size: 24px;
        font-weight: 500;
    }
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw)
`

const Slide = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg}
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Products = () => {

    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 7 ? slideIndex + 1 : 0)
        }
    }

    return (
        <Container>
            <TabletContainer>
                {popularProducts.map(item => (
                    <Product item={item} key={item.id} />
                ))}
            </TabletContainer>
            <MobileTitle>Recommended Products</MobileTitle>
            <MobileContainer>

                <Arrow direction="left" onClick={() => handleClick("left")}>
                    <ArrowLeftOutlined />
                </Arrow>
                <Wrapper slideIndex={slideIndex}>
                    {popularProducts.map(item => (
                        <Slide key={item.id} bg={item.bg}>
                            <Product item={item} key={item.id} />
                        </Slide>

                    ))}
                </Wrapper>
                <Arrow direction="right" onClick={() => handleClick("right")}>
                    <ArrowRightOutlined />
                </Arrow>
            </MobileContainer>

        </Container>
    )
}

export default Products
