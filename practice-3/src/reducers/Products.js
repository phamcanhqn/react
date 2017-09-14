import { ProductHelpers } from '../helpers/Products'
import {
  ADD_PRODUCT,
  FILTER_PRODUCTS,
  CHANGE_PRODUCT_DATA,
  SAVE_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT
} from '../actions'

const products = (state = [], action) => {
  console.log('ffffffffffffffffff', state)
  switch (action.type) {
    case FILTER_PRODUCTS:
      let a = state.slice(0)
      return ProductHelpers.filterProducts(action.filterData, a)
    case ADD_PRODUCT:
      return state.concat(action.product)
    case DELETE_PRODUCT:
      return ProductHelpers.removeProduct(action.productId)
    default:
      return state;
  }
}

export default products
