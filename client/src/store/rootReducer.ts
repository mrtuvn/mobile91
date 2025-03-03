// store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit'
//import compareReducer from '../slices/compare/compareSlice'
//import authReducer from '../redux/slices/auth/authSlice'
import cartReducer from '../redux/slices/cart/cartSlice'
//import wishlistReducer from '../redux/slices/wishlist/wishlistSlice'

const rootReducer = combineReducers({
  //auth: authReducer,
  //wishlist: wishlistReducer,
  cart: cartReducer,
})

export default rootReducer
