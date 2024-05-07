import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload)
    },
    clearCart: (state) => {},
    removeItem: (state) => {},
    editItem: (state, action) => {},
  },
})

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions

export default cartSlice.reducer
