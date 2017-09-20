import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import ProductApp from 'pages/product-manage/reducers'
import { ProductHelpers } from 'helpers/Products'

const productsData = ProductHelpers.loadProductList()

let INITIAL_STATE = {
  products: productsData,
  sortData: {}
}

const storeDev = createStore(
  ProductApp, 
  INITIAL_STATE,
  applyMiddleware(createLogger())
)

export default storeDev
