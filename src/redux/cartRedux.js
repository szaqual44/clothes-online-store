import {createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0
    },
    reducers:{
        addProduct: (state,action) =>{
            state.quantity +=1;   //amount of type of products in the cart => (3yellow t-shirt size M) + (3yellow t-shirt size S)  =>  quantity=2
            state.products.push(action.payload)
            state.total += action.payload.price*action.payload.quantity     //quantity of the same products =>    3yellow t-shirt size M       => quantity=3
        }
    }
})

export const {addProduct} =cartSlice.actions;
export default cartSlice.reducer