import React from 'react'
import { Container, Wrapper, Info, Title, Button, ImgWrap, Image, ShowLink } from './CategoryElements'
import Top from '../../assets/top.jpg'
import Bottom from '../../assets/bottom-cat.jpg'



const Category = () => {
    return (
        <Container>
            <Wrapper style={{ marginRight: "0.3rem" }}>
                <Info>
                    <Title>Tops</Title>
                    <Button>
                        <ShowLink to="/products">Show More</ShowLink>
                    </Button>
                </Info>
                <ImgWrap>
                    <Image src={Top} alt="top" />
                </ImgWrap>
            </Wrapper>
            <Wrapper style={{ marginRight: "0.3rem" }}>
                <Info>
                    <Title>Bottoms</Title>
                    <Button>
                        <ShowLink to="/products">Show More</ShowLink>
                    </Button>
                </Info>
                <ImgWrap>
                    <Image src={Bottom} alt="bottom" />
                </ImgWrap>
            </Wrapper>

        </Container>
    )
}

export default Category
