import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import ProductApp from '../reducers'
import { ProductHelpers } from '../helpers/Products'

let INITIAL_STATE = {
    products: ProductHelpers.loadProductList(),
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
