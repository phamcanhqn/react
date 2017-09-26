import _ from 'lodash'

import {
  Columns,
  ProductListData,
  ManufacturersData,
  CategoriesData,
  EmptyProduct,
  updateProductData
} from 'constants/DataObjects';
 
import {
  filterCollection,
  sortCollection,
  findDataByIdCollection,
  findIndexByIdCollection
} from './Utility'

const ProductHelpers = {
  // Create an empty product
  createEmptyProduct: () => {
    return EmptyProduct
  },

  loadProductList: () => {
    return ProductListData
  },

  loadCategories: () => {
    return CategoriesData;
  },

  loadManufacturers: () => {
    return ManufacturersData
  },

  loadColumns: () => {
    return Columns
  },

  findProductById: (id, productList) => {
    return findDataByIdCollection(id, productList)
  },

  findIndexProductById: (id, productList) => {
    return findIndexByIdCollection(id, productList)
  },

  addNewProduct: (productList, newProduct) => {
    newProduct.id = new Date().valueOf()
    productList.push(newProduct)
    
    return productList
  },

  updateProduct: (productList, product) => {
    const index = _.findIndex(productList, productItem => {
      return product.id === productItem.id
    })
    if (index === -1) {
      productList.push(product)
    } else {
      productList.splice(index, 1, product)
    }

    //update new data for product list
    if (!product.isEditMode) {
      updateProductData(productList)
    }

    return productList
  },

  removeProduct: (id, productList) => {
    _.remove(productList, product => {
      return product.id === id
    })

    //update new data for product list
    updateProductData(productList)

    return productList
  },

  filterProducts: (filterData, productList) => {
    return filterCollection(filterData, productList)
  },

  sortProductList: ({ sortBy, sortType }, productList) => {
    return sortCollection({ sortBy, sortType }, productList)
  }
}

export {ProductHelpers}
