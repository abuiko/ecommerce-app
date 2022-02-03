import React, { useState, useEffect, createContext } from 'react'

const Context = createContext()

function ContextProvider(props) {
    const [allClothes, setAllClothes] = useState([])
    const [cartItems, setCartItems] = useState([])

    const url = "https://my-c-store-api.herokuapp.com/clothes"

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllClothes(data))
    }, [])

    function toggleFavorite(id) {
        const updatedArr = allClothes.map(item => {

            if (item.id === id) {
                return {
                    ...item,
                    isFavorite: !item.isFavorite
                }
            }
            return item
        })
        setAllClothes(updatedArr)
    }

    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }
    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    function emptyCart() {
        setCartItems([])
    }

    return (
        <Context.Provider
            value={{
                allClothes,
                toggleFavorite,
                addToCart,
                removeFromCart,
                emptyCart,
                cartItems
            }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }