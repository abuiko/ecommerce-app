import { Facebook, Instagram, Twitter } from '@material-ui/icons'
import styled from 'styled-components'
import { device } from '../responsive'


const Container = styled.div`
    margin: auto;
    padding: 3rem 0rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
     text-align: center;
`

const Logo = styled.p`
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1.5rem;

    @media screen and ${device.laptop} {
        font-size: 1.4rem;
    }
`

const SocialContainer = styled.div`
    display: flex;
    width: 150px;
    justify-content: space-between;
    margin-top: 1rem;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #000; 


    @media screen and ${device.laptop} {
        width: 30px;
        height: 30px;
    }
`


const Footer = () => {
    return (
        <Container>
            <Wrapper>

                <Logo>LOGO</Logo>

                <SocialContainer>
                    <SocialIcon>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon>
                        <Twitter />
                    </SocialIcon>
                </SocialContainer>


            </Wrapper>
        </Container>
    )
}

export default Footer
