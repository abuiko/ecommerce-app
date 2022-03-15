
import styled from 'styled-components'
import { device } from '../responsive'
import { FavoriteBorderOutlined } from '@material-ui/icons'

export const Container = styled.div`
    padding-top: 50px;
    max-width: 1280px;
    margin: auto;

`
export const Wrapper = styled.div`
    padding: 70px 0px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    @media screen and ${device.mobile} {
        padding-bottom: 10px;
        padding-top: 15px;
    }
`
export const ImgContainer = styled.div`
    @media screen and ${device.tablet} {
        margin-bottom: 40px;
    }
`
export const Image = styled.img`
    width: 450px;
    
    @media screen and ${device.mobile} {
        width: 100%;
    }
    
`
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 480px;
  
    padding: 0px 50px;
    @media screen and ${device.tablet} {
        padding: 10px 20px;
    }
    @media screen and ${device.mobile} {
        width: 350px;
        padding: 10px 15px;
    }
`
export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Icon = styled(FavoriteBorderOutlined)`
    
    cursor: pointer;
`
export const Title = styled.h1`
    font-weight: 300;
    text-transform: capitalize;

    @media screen and ${device.mobile} {
        font-size: 27px;
    }
`
export const Desc = styled.p`
    margin: 20px 0px; 
    text-align: justify; 
    @media screen and ${device.mobile} {
        font-size: 14px;
    }
`
export const Price = styled.span`
    font-weight: 100;
    font-size: 40px;

    @media screen and ${device.mobile} {
        font-size: 25px;
    }
`
export const FilterContainer = styled.div`
    width: 100%;
    margin: 30px 0px;
    
    @media screen and ${device.mobile} {
        width: 100%;
    }
`
export const Filter = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;

`
export const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
export const FilterColor = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin-left: 10px;
    cursor: pointer;

    @media screen and ${device.mobile} {
        width: 20px;
        height: 20px;
    }
`
export const FilterSize = styled.select`
    padding: 15px;
    border: 1px solid lightgray;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    width: 50%;

    @media screen and ${device.mobile} {
        width: 100%;
    }
`
export const FilterSizeOption = styled.option``



export const Button = styled.button`
    display: block;
    padding: 15px;
    border: 1px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.5s ease;
    width: 50%;

    @media screen and ${device.mobile} {
        width: 100%;
    }

    

    &:hover {
        background-color: teal;
        color: white;
    }
`

