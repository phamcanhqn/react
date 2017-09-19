import _ from 'lodash';

import {
  Columns,
  ProductListData,
  ManufacturersData,
  CategoriesData,
  EmptyProduct,
  updateProductData
} from './../constants/DataObjects';

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
    return _.find(productList, product => {
      return product.id === id
    })
  },

  findIndexProductById: (id, productList) => {
    return _.findIndex(productList, product => {
      return product.id === id
    })
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
  
    productList.splice(index, 1, product)

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
    _.forOwn(filterData, (value, key) => {
      if (value) {
        productList = _.filter(productList, product=> {
          return product[key].toString().indexOf(value) !== -1;
        })
      }
    })

    return productList
  },

  sortProductList: ({ sortBy, sortType }, productList) => {
    let productsSorted = _.sortBy(productList, product => {
      return product[sortBy]
    })

    return sortType === 'asc-sort' ? productsSorted : productsSorted.reverse()
  },

  updateDataObject: (newValue, fieldName, curObject) => {
    if (newValue) {
      curObject[fieldName] = newValue
    } else {
      curObject = _.omit(curObject, fieldName)
    }

    return curObject
  },

  compareObject: (firstObject, secondObject) => {
    return _.isEqual(firstObject, secondObject);
  }
}

export {ProductHelpers}
