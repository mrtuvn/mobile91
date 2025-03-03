// src/slices/cart/cartSlice.ts
import { RootState } from '@/store'
import type { ICartItem, ICartState } from '@/types/ICart.d.ts'
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: ICartState = {
  items: [],
  total: 0,
  isEmpty: true,
  totalItems: 0,
}

const calculateTotals = (state: ICartState) => {
  const total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const totalItems = state.items.reduce((total, item) => total + item.quantity, 0)

  state.total = total
  state.totalItems = totalItems
  state.isEmpty = state.items.length === 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    ADD_ITEM(state, action: PayloadAction<{ product: ICartItem; quantity: number }>) {
      const { product, quantity } = action.payload
      const existingItem = state.items.find((item) => item.id === product.id)
      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        state.items.push({ ...product, quantity })
      }
      calculateTotals(state)
    },
    REMOVE_ITEM(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload)
      calculateTotals(state)
    },
    UPDATE_ITEM(state, action: PayloadAction<{ productId: number; quantity: number }>) {
      const { productId, quantity } = action.payload
      const itemIndex = state.items.findIndex((item) => item.id === productId)
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity = quantity
        calculateTotals(state)
      }
    },
    CLEAR_CART() {
      return { items: [], total: 0, isEmpty: true, totalItems: 0 }
    },
    LOAD_CART(state, action: PayloadAction<ICartState>) {
      return { ...state, ...action.payload }
    },
  },
})

// Selector for checking if product is in cart and its quantity
export const selectCartItemDetails = createSelector(
  [(state: RootState) => state.cart.items, (_state: RootState, productId: number) => productId],
  (cartItems, productId) => {
    const cartItem = cartItems.find((item) => item.id === productId)
    return {
      isInCart: !!cartItem,
      quantity: cartItem?.quantity || 0,
      maxQuantity: cartItem?.stock || 0,
    }
  },
)

export const { ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM, LOAD_CART, CLEAR_CART } = cartSlice.actions
export default cartSlice.reducer
