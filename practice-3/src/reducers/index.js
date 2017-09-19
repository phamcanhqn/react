import { combineReducers } from 'redux'

import sortData from './Sorts'
import products from './Products'

const ProductApp = combineReducers({
  products,
  sortData
})

export default ProductApp
