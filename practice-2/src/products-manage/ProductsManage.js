import React from 'react';
import PropTypes from 'prop-types';

import {Button} from './../commons/button/Button';
import FilterProduct from './filter-product/FilterProduct';
import ProductListHeader from './product-list-header/ProductListHeader';
import ProductList from './product-list/ProductList';
import {ProductHelpers} from './../helpers/Products';

import './style/ProductListManage.css';

class ProductsManage extends React.Component {
	constructor(props) {
		super(props);

    this.state = {
      products: ProductHelpers.loadProductList(),
      originalProducts: ProductHelpers.loadProductList(),
      filterData: {},
      sortBy:'',
      sortType: '',
      actionType: '',
      productEditing: {}
    };
	}

  //============== Handle Fillter ===============
  handleFillterAction = (event) => {
    const filterData = this.state.filterData;
    let newProducts = ProductHelpers.filterProducts(filterData, this.state.originalProducts);

    this.setState({products: newProducts});
  }

  handleChangeFilterValue = (value, filterBy) => {
    this.setState(preState => {
      let filterData = preState.filterData;
      filterData = ProductHelpers.updateDataObject(value, filterBy, filterData);

      return {
        filterData
      }
    });
  }
  //================== Handle sort==================
  handleSortAction = (target, sortBy) => {
    const sortIcon = target.getElementsByClassName('sort-icon')[0];
    const sortType = this.checkSortType(sortIcon);
    const productsSorted = ProductHelpers.sortProductList(sortBy, sortType, this.state.products);

    this.setState({
      sortType,
      sortBy: sortType ? sortBy : '',
      products: !sortType ? this.state.originalProducts : productsSorted
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
    this.setState(() => {
      const product = ProductHelpers.findProductById(id, this.state.products);
      const productEditing = Object.assign({}, product);
      return {
        actionType: 'update',
        productEditing
      }
    });
  }

  handleCancelAction = id => {
    if (this.state.actionType === 'add') {
      this.handleDeleteAction(id);
    }

    this.setState({
      actionType: '',
      productEditing: {}
    });
  }

  //=========== Handle Change Value ==========
  handleChangeValueAction = (value, fieldName) => {
    this.setState(preState => {
      let productEditing = preState.productEditing;
      productEditing = ProductHelpers.updateDataObject(value, fieldName, productEditing);

      return {
        productEditing
      }
    });
  }

  //======== Handle save ============
  handleSaveAction = id => {
    const productEditing = this.state.productEditing;

    const index = ProductHelpers.findIndexProductById(id, this.state.products)

    this.setState(preState => {
      preState.products.splice(index, 1, productEditing);

      return {
        products: preState.products,
        productEditing: {}
      }
    });
  }

  //========== Handle add new product========
  handleAddProductAction = () => {
    this.setState(preState => {
      const dataReturn = ProductHelpers.addEmptyProduct(preState.products);

      return {
        actionType: 'add',
        products: dataReturn.newProductList,
        productEditing: Object.assign({},dataReturn.product)
      }
    });
  }

  //==== Handle delete product ============
  handleDeleteAction = id => {
    this.setState(preState => {
      products: ProductHelpers.removeProduct(id, preState.products)
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
          filterValue={this.state.filterData}
          manufacturerOptions={ProductHelpers.loadManufacturers()}
          categoryOptions={ProductHelpers.loadCategories()}
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
            headerColumns={ProductHelpers.loadHeaderColumns()}
            sortType={this.state.sortType}
            sortBy={this.state.sortBy} />
          <ProductList
            handleSortAction={this.handleSortAction}
            manufacturerOptions={ProductHelpers.loadManufacturers()}
            categoryOptions={ProductHelpers.loadCategories()}
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
