import _ from 'lodash';
import {HeaderColumns, ProductListData, ManufacturersData, CategoriesData, DefaultProduct} from './../constants/DataObjects';

const ProductHelpers = {
  loadProductList: function() {
    return ProductListData;
  },

  loadCategories: function() {
    return CategoriesData
  },

  loadManufacturers: function() {
    return ManufacturersData
  },

  loadHeaderColumns: function() {
    return HeaderColumns
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

  addEmptyProduct: function(productList) {
    DefaultProduct.id = new Date().valueOf();
    productList.push(DefaultProduct);

    return {newProductList: productList, product: DefaultProduct};
  },

  removeProduct:function(id, productList){
    return _.remove(productList, function(product) {
      return product.id === id;
    });
  },

  filterProducts: function(filterData, productList) {
    _.forOwn(filterData, function(value, key) {
      if (value !== '') {
        productList = _.filter(productList, function(product) {
          return product[key].toString().indexOf(value) !== -1;
        });
      }
    });

    return productList;
  },

  sortProductList: function(sortBy, sortType, productList) {
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
  }
}

export {ProductHelpers};
