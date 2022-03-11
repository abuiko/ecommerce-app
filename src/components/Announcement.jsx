import styled from 'styled-components'
import { device } from './responsive'

const Container = styled.div`
    height: 100px;
    background-color: teal;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 0.3rem;

    @media screen and ${device.mobile} {
        font-size: 16px;
        height: 70px;
    }
`

const Announcement = () => {
    return (
        <Container>
            Super Deal! Free Shippings on Orders over 50$!
        </Container>
    )
}

export default Announcement
