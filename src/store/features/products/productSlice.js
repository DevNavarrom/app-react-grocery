import { createSlice } from "@reduxjs/toolkit"


export const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        discountProduct: (state, action) => {
            const { id, amount: amountCart } = action.payload

            let productFound = state.products.find(product => product.id === id)

            if (productFound) {

                state.products.splice(state.products.indexOf(productFound), 1)

                productFound.amount -= amountCart

                state.products.push(productFound)

            }
        },
        editProducts: (state, action) => {
            const { id, amount: amountCart } = action.payload

            state.products = state.products.map(product => {
                if (product.id === id) {
                    product = {
                        ...product,
                        amount: product.amount + amountCart
                    }
                }
                return product
            })
        }
    }
})

export const { setProducts, editProducts, discountProduct } = productSlice.actions