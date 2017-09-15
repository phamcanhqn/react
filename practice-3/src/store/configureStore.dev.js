import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import ProductApp from '../reducers'
import { ProductHelpers } from '../helpers/Products'

const productsData = ProductHelpers.loadProductList()
let INITIAL_STATE = {
  //originalProducts: productsData,
  products: productsData,
  //product: {},
  sortData: {},
  filterData: {}
  }
const storeDev = createStore(
  ProductApp, 
  INITIAL_STATE,
  applyMiddleware(createLogger())
)

export default storeDev
