export const FILTER_PRODUCTS = 'FILTER_PRODUCT'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const CANCEL_PRODUCT = 'CANCEL_PRODUCT'
export const SAVE_PRODUCT = 'SAVE_PRODUCT'
export const EDIT_PRODUCT = 'EDIT_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'

export const SORT_PRODUCT_LIST = 'SORT_PRODUCT_LIST'

export const filterProducts = filterData => ({
  type: FILTER_PRODUCTS,
  filterData
})

export const addProduct = product => ({
  type: ADD_PRODUCT,
  product
})

export const saveProduct = product => ({
  type: SAVE_PRODUCT,
  product
})

export const editProduct = productId => ({
  type: EDIT_PRODUCT,
  productId
})

export const deleteProduct = productId => ({
  type: DELETE_PRODUCT,
  productId
})

export const cancelProduct = productId => ({
  type: CANCEL_PRODUCT,
  productId
})

export const sortProductList = (sortData) => ({
  type: SORT_PRODUCT_LIST,
  sortData
})
