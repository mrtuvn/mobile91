import { IProduct } from './IProduct'

export interface ICartItem extends IProduct {
  quantity: number
}

export interface ICartState {
  items: CartItem[]
  total: number
  isEmpty: boolean
  totalItems: number
}
