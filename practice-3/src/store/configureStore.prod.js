import { createStore } from 'redux'

import ProductApp from 'pages/product-manage/reducers'
import { ProductHelpers } from 'helpers/Products'

const INITIAL_STATE = {
  products: ProductHelpers.loadProductList(),
  sortData: {}
}

const storeProd = createStore(ProductApp, INITIAL_STATE)

export default storeProd
