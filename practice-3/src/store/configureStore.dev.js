import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'
import ProductApp from 'pages/product-manage/reducers'
import { ProductHelpers } from 'helpers/Products'

const productsData = ProductHelpers.loadProductList()

let INITIAL_STATE = {
  products: productsData,
  sortData: {}
}

const composeEnhancers =
typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(createLogger())
)

const storeDev = createStore(
  ProductApp, 
  INITIAL_STATE,
  enhancer
)

export default storeDev
