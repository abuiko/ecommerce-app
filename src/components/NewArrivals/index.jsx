import React from 'react'
import { Container, Wrapper, Info, Title, Button, Left, Image, Right, ShowLink } from './NewArrivalElements'


const NewArrivals = ({ img1, img2, name, alt, bg }) => {
    return (
        <Container>

            <Wrapper>
                <Info>
                    <Title>{name}</Title>
                    <Button>
                        <ShowLink to="/products">Show More</ShowLink>
                    </Button>
                </Info>
                <Left bg={bg}>
                    <Image src={img1} alt={alt} />
                </Left>
                <Right bg={bg}>
                    <Image src={img2} alt={alt} />
                </Right>
            </Wrapper>

        </Container>
    )
}

export default NewArrivals
