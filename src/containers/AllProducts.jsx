import React, { useState, useEffect, useRef } from 'react'
import Product from '../components/Product'
import styled from 'styled-components'
import NewsLetter from '../components/NewsLetter'
import Skeleton from 'react-loading-skeleton'
import { Oval } from 'react-loader-spinner'

// import { Link } from 'react-router-dom'

const Container = styled.div`
    
`

const LoadingWrapper = styled.p`
    text-align: center;
    display: flex;
    
`
const Title = styled.h1`
    margin: 40px 20px 40px;
    padding-left: 20px;
    font-weight: 300;
    text-align: center;
`

const FilterButtons = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
`

const Button = styled.button`
    background-color: transparent;
    border: 1px solid black;
    padding: 10px 20px;
   
    margin-right: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    font-size: 14px;

    &:hover {
        color: white;
        background: #000;
        
    }
`
const Wrapper = styled.div` 
    max-width: 2000px;
    margin: auto;
`
const ProductContainer = styled.div`
    
    padding: 20px 20px 50px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-template-rows: auto; 
    grid-gap: 9px;    
`

const LoadingText = styled.p``
const Spinner = styled.div``

const AllProducts = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    // let componentMounted = true



    const ref = useRef(false)

    const url = "https://my-c-store-api.herokuapp.com/clothes"

    useEffect(() => {

        const getProducts = async () => {
            ref.current = true
            setLoading(true)

            const response = await fetch(url)
            if (ref.current) {
                setData(await response.clone().json())
                setFilter(await response.json())
                setLoading(false)

            }

            return () => {
                ref.current = false
            }
        }
        getProducts()
    }, [])

    const Loading = () => {
        return (
            <LoadingWrapper>
                <Spinner>
                    <Oval color="#000" height={60} width={60} />
                </Spinner>

                <LoadingText>Loading...</LoadingText>
            </LoadingWrapper>

        )
    }

    const filterProduct = (name) => {
        const updatedList = data.filter((x) => x.name === name)
        setFilter(updatedList)
    }

    const ShowProducts = () => {
        return (
            <>
                <FilterButtons>
                    <Button onClick={() => setFilter(data)}>All</Button>
                    <Button onClick={() => filterProduct("top")}>Tops</Button>
                    <Button onClick={() => filterProduct("bottom")}>Bottoms</Button>
                    <Button onClick={() => filterProduct("dress")}>Dresses</Button>
                    <Button onClick={() => filterProduct("swimsuit")}>Swimsuits</Button>
                </FilterButtons>
                <Wrapper>
                    <ProductContainer>
                        {filter.map(item => (
                            <Product item={item} key={item.id} />
                        ))}
                    </ProductContainer>
                </Wrapper>
            </>

        )
    }

    return (
        <Container>


            <Title>Latest Trends</Title>
            {/* {loading ? <Loading /> : <ShowProducts />} */}
            <Loading />
            <NewsLetter />


        </Container>
    )
}

export default AllProducts
