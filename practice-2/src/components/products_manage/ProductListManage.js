import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {Button} from './../../common_components/button/Button';
import ProductListHeader from './product_list_header/ProductListHeader';
import ProductList from './product_list/ProductList';
import {ProductListData, ManufacturersData, CategoriesData} from './../../data-service/dataService';

class ProductListManage extends React.Component {
	constructor(props) {
		super(props);

    this.state = {
       products: ProductListData.data,
       originalProduct: ProductListData.data
    };
	}

  componentDidMount() {
  }

  handleSortAction = (target, sortBy) => {
    const sortIcon = target.getElementsByClassName('sort-icon')[0];
    const sortType = this.checkSortType(sortIcon);

    this.sortProductList(sortBy, sortType);
  }

  handleFillterAction = (target, fillterBy) => {
    const fillterValue = target.value;

    this.fillterProductList(fillterBy, fillterValue);
  }

  sortProductList = (sortBy, sortType) => {
    let productSort = this.state.products;

    productSort = _.sortBy(productSort, function(product){
      return product[sortBy];
    });

    this.setState({
      products: sortType === 'asc' ? productSort : productSort.reverse()
    });
  }

  fillterProductList = (fillterBy, fillterValue) => {
    let productFillter = this.state.products;

    productFillter = _.filter(productFillter, function(product){
      return product[fillterBy].toString().indexOf(fillterValue) !== -1;
    });

    this.setState({
      products: productFillter
    });
  }

  checkSortType = sortIcon => {
    if (sortIcon.classList.contains('asc-sort')) {
      sortIcon.classList.remove('asc-sort');
      sortIcon.classList.add('desc-sort');
      return 'desc';
    }else if (sortIcon.classList.contains('desc-sort')) {
      sortIcon.classList.remove('desc-sort');
      return null;
    }else {
      sortIcon.classList.add('asc-sort');
      return 'asc';
    }
  }

	render() {
		return (
      <table className="products-table">
        <ProductListHeader
          handleSortClick={this.handleSortAction}
          handleFiller={this.handleFillterAction}
          manufacturerOptions={ManufacturersData}
          categoryOptions={CategoriesData} />
        <ProductList
          handleFillterAction={this.handleFillterAction}
          handleSortAction={this.handleSortAction}
          manufacturerOptions={ManufacturersData}
          categoryOptions={CategoriesData}
          isEdit={false}
          products={this.state.products} />
      </table>
		);
	}
}

export default ProductListManage;
