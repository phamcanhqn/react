import { ProductHelpers } from '../helpers/Products'
import {
  ADD_PRODUCT,
  FILTER_PRODUCTS,
  SAVE_PRODUCT,
  CANCEL_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  SORT_PRODUCT_LIST
} from '../actions'

const products = (state = [], action) => {
  let originalProducts = ProductHelpers.loadProductList()

  switch (action.type) {
    case FILTER_PRODUCTS:
      return ProductHelpers.filterProducts(action.filterData, originalProducts)

    case SORT_PRODUCT_LIST:
      return action.sortData.sortType ? 
        ProductHelpers.sortProductList(action.sortData, state) :
        originalProducts

    case ADD_PRODUCT:
      return ProductHelpers.addNewProduct(state.slice(0), {
        ...action.product,
        isEditMode: true,
        isNewProduct: true
      })

    case EDIT_PRODUCT:
      const product = ProductHelpers.findProductById(action.productId, state)
      return ProductHelpers.updateProduct(state.slice(0), {...product, isEditMode: true})

    case SAVE_PRODUCT:
      return ProductHelpers.updateProduct(state.slice(0), action.product)

    case CANCEL_PRODUCT:
      const productEditing = ProductHelpers.findProductById(action.productId, state)

      return productEditing.isNewProduct ? 
        ProductHelpers.removeProduct(action.productId, state.slice(0)) : 
        ProductHelpers.updateProduct(state.slice(0), {...productEditing, isEditMode: false})

    case DELETE_PRODUCT:
      return ProductHelpers.removeProduct(action.productId, state.slice(0))

    default:
      return state
  }
}

export default products
