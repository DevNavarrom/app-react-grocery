import { createSlice } from "@reduxjs/toolkit"


export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.products.push(action.payload)
        },
        deleteProduct: (state, action) => {
            const productFound = state.products.find(product => product.id === action.payload)
            if (productFound) {
                state.products.splice(state.products.indexOf(productFound), 1)
            }
        },
        cleanCart: (state, action) => {
            state.products = []
        }
    }
})


export const { addToCart, deleteProduct, cleanCart } = cartSlice.actions
//export default cartSlice.reducer