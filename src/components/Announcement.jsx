import styled from 'styled-components'

const Container = styled.div`
    height: 100px;
    background-color: teal;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bolder;
    margin-bottom: 0.3rem;
`

const Announcement = () => {
    return (
        <Container>
            Super Deal! Free Shippings on Orders over 50$!
        </Container>
    )
}

export default Announcement
