import { ProductHelpers } from 'helpers/Products'

import {
  ADD_PRODUCT,
  FILTER_PRODUCTS,
  SAVE_PRODUCT,
  CANCEL_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  SORT_PRODUCT_LIST
} from 'pages/actions'

const products = (state = [], action) => {
  let originalProducts = ProductHelpers.loadProductList()

  switch (action.type) {
    // Handle filter action
    case FILTER_PRODUCTS:
      return ProductHelpers.filterProducts(action.filterData, originalProducts)

    // Handle sort action
    case SORT_PRODUCT_LIST:
      return ProductHelpers.sortProductList(action.sortData, state) 

    // Handle add product action
    case ADD_PRODUCT:
      return ProductHelpers.addNewProduct(state.slice(0), {
        ...action.product,
        isEditMode: true,
        isNewProduct: true
      })
    
    // Handle edit product action
    case EDIT_PRODUCT:
      const product = ProductHelpers.findProductById(action.productId, originalProducts)
      return ProductHelpers.updateProduct(state.slice(0), {...product, isEditMode: true})
    
    // Handle save action
    case SAVE_PRODUCT:
      return ProductHelpers.updateProduct(originalProducts.slice(0), action.product)
    
    // Handle cancel action  
    case CANCEL_PRODUCT:
      const productEditing = ProductHelpers.findProductById(action.productId, state)

      return productEditing.isNewProduct ? 
        ProductHelpers.removeProduct(action.productId, originalProducts.slice(0)) : 
        ProductHelpers.updateProduct(originalProducts.slice(0), {...productEditing, isEditMode: false})
    
    // Handle delete action
    case DELETE_PRODUCT:
      return ProductHelpers.removeProduct(action.productId, originalProducts.slice(0))

    default:
      return state
  }
}

export default products
