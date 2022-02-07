// ADD ITEM TO CART

export const addToCart = (product) => {
    return {
        type: "ADD_TO_CART",
        payload: product
    }
}

// REMOVE ITEM FROM CART

export const removeFromCart = (product) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: product
    }
}