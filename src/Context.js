import React, { useState, useEffect, createContext } from 'react'

const Context = createContext()

function ContextProvider(props) {
    const [allClothes, setAllClothes] = useState([])

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



    return (
        <Context.Provider
            value={{
                allClothes,
                toggleFavorite,

            }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }