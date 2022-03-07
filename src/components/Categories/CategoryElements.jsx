import styled from 'styled-components'
import { device } from '../../responsive'
import { Link as LinkR } from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    
    
`
export const Wrapper = styled.div`
    flex: 1;
    position: relative;
    margin: 0rem 0rem 0.3rem;   
`
export const Info = styled.div`
    width: 70%;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -80%);
    background-color: rgba(255,255,255,0.8);
    padding: 1.2rem 0rem;

    @media screen and ${device.mobile} {
        width: 100%;        
    }
`
export const Title = styled.p`
    text-align: center;
    font-size: 1.8rem;
    font-weight: 300;
    color: #000;
    letter-spacing: 5px;
    margin-bottom: 1rem;

    @media screen and ${device.mobile} {
        font-size: 1.2rem;
    }
`


export const ImgWrap = styled.div`
    height: 500px;

    @media screen and ${device.mobile} {
        height: 300px;
        
    }

`
export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`


export const Button = styled.button`
    border: none;
    text-decoration: underline;
    padding: 0.5rem 1rem;
    font-weight: 700;
    font-size: 1.1rem;
    margin: auto;
    display: block;
    background: transparent;

    @media screen and ${device.mobile} {
        font-size: 0.9rem;
    }

`

export const ShowLink = styled(LinkR)`
    text-decoration: none;
    color: black;

`

