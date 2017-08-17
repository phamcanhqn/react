import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {Button} from './../commons/button/Button';
import FilterProduct from './filter-product/FilterProduct';
import ProductListHeader from './product-list-header/ProductListHeader';
import ProductList from './product-list/ProductList';
import {HeaderColumns, ProductListData, ManufacturersData, CategoriesData, DefaultProduct} from './../constants/DataObjects';

import './style/ProductListManage.css';

class ProductsManage extends React.Component {
	constructor(props) {
		super(props);

    this.state = {
      products: ProductListData.data,
      originalProducts:ProductListData.data,
      filterValue: {},
      sortBy:'',
      sortType: '',
      rowEditing: null,
      productEditing: {}
    };
	}

  //============== Handle Fillter ===============
  handleFillterAction = (event) => {
    const filterValue = this.state.filterValue;
    let products = this.state.originalProducts;

    _.forOwn(filterValue, function(value, key) {
      if (value !== '') {
        products = _.filter(products, function(product) {
          return product[key].toString().indexOf(value) !== -1;
        });
      }
    });

    this.setState({products});
  }

  handleChangeFilterValue = (value, filterBy) => {
    this.setState(preState => {
      let filterValue = preState.filterValue;
      filterValue[filterBy] = value;

      return {
        filterValue
      }
    });
  }
  //================== Handle sort==================
  handleSortAction = (target, sortBy) => {
    const sortIcon = target.getElementsByClassName('sort-icon')[0];
    const sortType = this.checkSortType(sortIcon);

    this.setState({
      sortType,
      sortBy: sortType ? sortBy : ''
    });

    this.sortProductList(sortBy, sortType);
  }

  //sort
  sortProductList = (sortBy, sortType) => {
    let productSort = this.state.products;

    productSort = _.sortBy(productSort, function(product){
      return product[sortBy];
    });

    this.setState({
      products: sortType === 'asc-sort' ? productSort : (!sortType ? this.state.originalProducts : productSort.reverse())
    });
  }

  checkSortType = sortIcon => {
    if (sortIcon.classList.contains('asc-sort')) {
      return 'desc-sort';
    }else if (sortIcon.classList.contains('desc-sort')) {
      return null;
    }else {
      return 'asc-sort';
    }
  }

  //============ Handle Edit Action =================
  handleEditAction = (id) => {
    this.setState(preState => {
      const productEditing = this.findProductById(id, preState.products);

      return {
        rowEditing: id,
        productEditing
      }
    });
  }

  handleCancelAction = id => {
    this.setState({
      rowEditing: null,
      productEditing: {}
    });
  }

  //=========== Handle Change Value ==========
  handleChangeValueAction = (value, fieldName) => {
    this.setState(preState => {
      let productEditing = preState.productEditing;
      productEditing[fieldName] = value;

      return {
        productEditing
      }
    });
  }

  //======== Handle save ============
  handleSaveAction = id => {
    const productEditing = this.state.productEditing;

    const index = _.findIndex(this.state.products, productEditing);

    this.setState(preState => {
      preState.products.splice(index, 1, productEditing);

      return {
        products: preState.products,
        productEditing: {},
        rowEditing: null
      }
    });
  }

  //========== Handle add new product========
  handleAddProductAction = () => {
    this.setState(preState => {
      preState.products.push(DefaultProduct);
      return {
        products: preState.products,
        rowEditing: DefaultProduct.id,
        productEditing: DefaultProduct
      }
    });
  }

  //==== Handle delete product ============
  handleDeleteAction = id => {
    this.setState(preState => {
      products: this.removeProduct(id, preState.products)
    });
  }

  removeProduct = (id, productList) => {
    _.remove(productList, function(product) {
      return product.id === id;
    });
  }

  findProductById = (id, productList) => {
    return _.find(productList, function(product) {
      return product.id === id;
    });
  }
	render() {
    console.log('this.state', this.state)
		return (
      <div className='products-manage'>
        <h1>
          Product List
        </h1>
        <FilterProduct
          filterValue={this.state.filterValue}
          manufacturerOptions={ManufacturersData}
          categoryOptions={CategoriesData}
          handleFilterClick={this.handleFillterAction}
          handleChangeFilterValue={this.handleChangeFilterValue} />
        <Button
          name="btn-add"
          className="btn"
          handleClick={this.handleAddProductAction}
          label="Add product"/>
        <table className="products-table">
          <ProductListHeader
            handleSortClick={this.handleSortAction}
            headerColumns={HeaderColumns}
            sortType={this.state.sortType}
            sortBy={this.state.sortBy} />
          <ProductList
            rowEditing={this.state.rowEditing}
            handleSortAction={this.handleSortAction}
            manufacturerOptions={ManufacturersData}
            categoryOptions={CategoriesData}
            products={this.state.products}
            productEditing={this.state.productEditing}
            handleChangeValueAction={this.handleChangeValueAction}
            handleEditAction={this.handleEditAction}
            handleSaveAction={this.handleSaveAction}
            handleCancelAction={this.handleCancelAction}
            handleDeleteAction={this.handleDeleteAction} />
        </table>
      </div>
		);
	}
}

export default ProductsManage;
