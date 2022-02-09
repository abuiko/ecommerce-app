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

// ADD ITEM TO WISHLIST

export const addToWishlist = (product) => {
    return {
        type: "ADD_TO_WISHLIST",
        payload: product
    }
}

// REMOVE ITEM FROM WISHLIST

export const removeFromWishlist = (product) => {
    return {
        type: "REMOVE_FROM_WISHLIST",
        payload: product
    }
}