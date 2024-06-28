import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    carts: []
}
const cartSlice = createSlice({
    name: "cartslice",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const ItemIndex = state.carts.findIndex((item) => item._id === action.payload._id)
            if (ItemIndex >= 0) {
                state.carts[ItemIndex].qunty += 1
            }
            else {
                const temp = { ...action.payload, qunty: 1 }
                state.carts = [...state.carts, temp]
            }
        },
        
        removeToCart: (state, action) => {
            state.carts= state.carts.filter((ele) =>ele._id !== action.payload);   
        },
        //decrease quqntqty items
        decreaseItems:(state,action)=>{
            const ItemIndexdec = state.carts.findIndex((item) => item._id === action.payload._id)
            if(state.carts[ItemIndexdec].qunty>=1)
            {
                state.carts[ItemIndexdec].qunty -= 1
            }
        },
        // increaseitems
        increaseItems:(state,action)=>{
            const ItemIndexdec = state.carts.findIndex((item) => item._id === action.payload._id)
            state.carts[ItemIndexdec].qunty += 1   
        },
        // empty carts
        emptyitem:(state,action)=>{
            state.carts = []
        }
    }
})
export const { addToCart, removeToCart,decreaseItems,increaseItems,emptyitem } = cartSlice.actions;
export default cartSlice.reducer;