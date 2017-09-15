import { ProductHelpers } from '../helpers/Products'
import {
  ADD_PRODUCT,
  FILTER_PRODUCTS,
  CHANGE_PRODUCT_DATA,
  SAVE_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  SORT_PRODUCT_LIST
} from '../actions'

const products = (state = [], action) => {
  switch (action.type) {
    case FILTER_PRODUCTS:
      let originalProducts = ProductHelpers.loadProductList()
      return ProductHelpers.filterProducts(action.filterData, originalProducts)
    case SORT_PRODUCT_LIST:
      console.log(action)
      return ProductHelpers.sortProductList(action.sortData, state)
    case ADD_PRODUCT:
      return ProductHelpers.addNewProduct(state.slice(0), {
        ...action.product,
        isEditMode: true
      })
    case EDIT_PRODUCT:
      console.log('action.productId', action.productId)
      const product = ProductHelpers.findProductById(action.productId, state)
    
      return ProductHelpers.saveProduct(state.slice(0), {...product, isEditMode: true})
    case SAVE_PRODUCT:
      return ProductHelpers.saveProduct(state.slice(0), {...action.product, isEditMode: false})
    case DELETE_PRODUCT:
      return ProductHelpers.removeProduct(action.productId)
    default:
      return state;
  }
}

export default products
