// features/wishlist/wishlistSlice.ts
import type { IProduct } from '@/types/IProduct'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface WishlistState {
  items: IProduct[]
}

const initialState: WishlistState = {
  items: JSON.parse(localStorage?.getItem('wishlists') || '[]'),
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist(state, action: PayloadAction<IProduct>) {
      const exists = state.items.some((item) => item.id === action.payload.id)
      if (!exists) {
        state.items.push(action.payload)
        localStorage.setItem('wishlists', JSON.stringify(state.items))
      }
    },
    removeFromWishlist(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload)
      localStorage.setItem('wishlists', JSON.stringify(state.items))
    },
    clearWishlist(state) {
      state.items = []
      localStorage.removeItem('wishlists')
    },
  },
})

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer
