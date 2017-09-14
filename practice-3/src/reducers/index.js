import { combineReducers } from 'redux'
import filterData from './Filters'
import sortData from './Sorts'
import products from './Products'
import product from './Product'

const ProductApp = combineReducers({
  products,
  //product,
  filterData,
  sortData
})

export default ProductApp
