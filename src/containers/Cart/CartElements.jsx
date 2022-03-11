import styled from 'styled-components'
import { device } from '../responsive'


export const Container = styled.div`
    max-width: 1400px;
    margin: auto;
    padding-top: 90px;
    min-height: 80vh;
`

export const Wrapper = styled.div`
 
    margin-top: 30px;

    @media screen and ${device.tablet} {
        padding: 0px;
    }
`
export const Title = styled.h1`
    font-weight: 300;
    text-align: center;
    margin-bottom: 30px;

    @media screen and ${device.mobile} {
        font-size: 25px;
    }
`


export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and ${device.laptop} {
        flex-direction: column;
    }
`

export const Info = styled.div`
   flex: 2;

   @media screen and ${device.laptop} {
    flex: 1;
}
`
export const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;

    @media screen and ${device.laptop} {
        margin-top: 20px;
        flex: 1;
        border: none;
            
    }
    
`
export const SummaryTitle = styled.h2`
    font-weight: 200;
`

export const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "700"};
    font-size: ${props => props.type === "total" && "20px"};
`

export const SummaryItemText = styled.span``

export const SummaryItemPrice = styled.span``

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    border: none;
`


