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
  createEmptyProduct: function() {
    return EmptyProduct
  },

  loadProductList: function() {
    return ProductListData;
  },

  loadCategories: function() {
    return CategoriesData;
  },

  loadManufacturers: function() {
    return ManufacturersData;
  },

  loadColumns: function() {
    return Columns;
  },

  findProductById: function(id, productList) {
    return _.find(productList, function(product) {
      return product.id === id;
    });
  },

  findIndexProductById: function(id, productList) {
    return _.findIndex(productList, function(product) {
      return product.id === id;
    });
  },

  addNewProduct: function(productList, newProduct) {
    newProduct.id = new Date().valueOf();
    productList.push(newProduct);

    return productList;
  },

  updateProduct: function (productList, product) {
    const index = this.findIndexProductById(product.id, productList)
  
    productList.splice(index, 1, product)

    //update new data for product list
    updateProductData(productList)

    return productList
  },

  removeProduct:function(id, productList){
    _.remove(productList, function(product) {
      return product.id === id;
    })

    //update new data for product list
    updateProductData(productList)

    return productList
  },

  filterProducts: function(filterData, productList) {
    _.forOwn(filterData, function(value, key) {
      if (value) {
        productList = _.filter(productList, function(product) {
          return product[key].toString().indexOf(value) !== -1;
        });
      }
    });

    return productList;
  },

  sortProductList: function({ sortBy, sortType }, productList) {
    let productsSorted = _.sortBy(productList, function(product){
      return product[sortBy];
    });

    return sortType === 'asc-sort' ? productsSorted : productsSorted.reverse();
  },

  updateDataObject: function(newValue, fieldName, curObject) {
    if (newValue) {
      curObject[fieldName] = newValue
    } else {
      curObject = _.omit(curObject, fieldName);
    }

    return curObject;
  },

  compareObject: function(firstObject, secondObject) {
    return _.isEqual(firstObject, secondObject);
  }
}

export {ProductHelpers};
