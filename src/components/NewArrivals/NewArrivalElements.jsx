import styled from 'styled-components'
import { device } from '../../responsive'
import { Link as LinkR } from 'react-router-dom'

export const Container = styled.div``
export const Wrapper = styled.div`
    height: 70vh;
    display: flex;
    justify-content: flex-between;
    position: relative;
`

export const Left = styled.div`
    background-color: red;
    flex: 1;
    
`
export const Right = styled.div`
    background-color: blue;
    flex: 1;

    @media screen and ${device.mobile} {
        display: none;
    }
   
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export const Info = styled.div`
    width: 500px;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -80%);
    background-color: rgba(255,255,255,0.8);
    padding: 1.7rem 0rem;

    @media screen and ${device.mobile} {
        width: 100%;
    }

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
export const Title = styled.p`
    text-align: center;
    font-size: 2rem;
    font-weight: 300;
    color: #000;
    letter-spacing: 5px;
    margin-bottom: 1rem;

    @media screen and ${device.mobile} {
        font-size: 1.2rem;
    }
`
