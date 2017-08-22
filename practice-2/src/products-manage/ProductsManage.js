import React from 'react';

import { Button } from './../commons/button/Button';
import FilterProduct from './filter-product/FilterProduct';
import ProductListHeader from './product-list-header/ProductListHeader';
import ProductList from './product-list/ProductList';
import { ProductHelpers } from './../helpers/Products';

import './style/ProductListManage.css';

class ProductsManage extends React.Component {
	constructor(props) {
		super(props);

    this.columns = ProductHelpers.loadColumns();
    this.manufacturers = ProductHelpers.loadManufacturers();
    this.categories = ProductHelpers.loadCategories();

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

  /*
  * Handle filter action
  * Query data in product list with filter values and update product list
  */
  handleFillterAction = () => {
    const filterData = this.state.filterData;
    let newProducts = ProductHelpers.filterProducts(filterData, this.state.originalProducts);

    this.setState({
      products: newProducts
    });
  }

  /*
  * Handle input value action on filter form
  * Get data from filter form and save data on this form
  */
  handleChangeFilterValue = (value, filterBy) => {
    this.setState(preState => {
      let filterData = Object.assign({}, preState.filterData);
      filterData = ProductHelpers.updateDataObject(value, filterBy, filterData);

      return {
        filterData
      }
    });
  }

  /*
  * Handle clear action on filter form
  * Remove filter data and reset filter form
  */
  handleClearAction = () => {
    this.filterForm.reset();
    this.setState({
      filterData: {}
    });
  }

  /*
  * Handle sort action on product list
  * Check sort type and sort by field on product list and sorting products list
  */
  handleSortAction = (target, sortBy) => {
    const sortIcon = target.getElementsByClassName('sort-icon')[0],
      sortType = this.checkSortType(sortIcon),
      productsSorted = ProductHelpers.sortProductList(sortBy, sortType, this.state.products);

    this.setState({
      sortType,
      sortBy: sortType ? sortBy : '',
      products: !sortType ? this.state.originalProducts : productsSorted
    });
  }

  /*
  * Check sort type when user click on header of table
  * Return sort type
  */
  checkSortType = sortIcon => {
    if (sortIcon.classList.contains('asc-sort')) {
      return 'desc-sort';
    }else if (sortIcon.classList.contains('desc-sort')) {
      return null;
    }else {
      return 'asc-sort';
    }
  }

  /*
  * Handle edit action on product row
  * Show editing product and user can update product value
  */
  handleEditAction = (id) => {
    if (this.state.actionType) {
      alert('Please save your current data!');
      return;
    }

    this.setState(() => {
      const product = ProductHelpers.findProductById(id, this.state.products);
      const productEditing = Object.assign({}, product);

      return {
        actionType: 'update',
        productEditing
      }
    });
  }

  /*
  * Handle cancel action on product row
  * Close editing form and show old data of product
  */
  handleCancelAction = id => {
    if (this.state.actionType === 'add') {
      this.handleDeleteAction(id);
    }

    this.setState({
      actionType: '',
      productEditing: {}
    });
  }

  /*
  * Handle change value action on product row
  * Save all data changed on product row
  */
  handleChangeValueAction = (value, fieldName) => {
    this.setState(preState => {
      let productEditing = Object.assign({}, preState.productEditing);
      productEditing = ProductHelpers.updateDataObject(value, fieldName, productEditing);

      return {
        productEditing
      }
    });
  }

  /*
  * Handle save action on product row
  * Save all value input on row and show new product list
  */
  handleSaveAction = id => {
    const productEditing = this.state.productEditing;

    const index = ProductHelpers.findIndexProductById(id, this.state.products)

    this.setState(preState => {
      preState.products.splice(index, 1, productEditing);

      return {
        products: preState.products,
        actionType: '',
        productEditing: {}
      }
    });
  }

  /*
  * Handle add new product action
  * Insert a product row in current product list and user can input value for new product
  */
  handleAddProductAction = () => {
    if (this.state.actionType) {
      alert('Please save your current data!');
      return;
    }

    this.setState(preState => {
      const dataReturn = ProductHelpers.addEmptyProduct(preState.products);

      return {
        actionType: 'add',
        products: dataReturn.newProductList,
        productEditing: Object.assign({},dataReturn.product)
      }
    });
  }

  /*
  * Handle delete action on product row
  * Remove product row and update product list
  */
  handleDeleteAction = id => {
    this.setState(preState => {
      let products = preState.products.slice(0);

      ProductHelpers.removeProduct(id, products);

      return {
        products
      }
    });
  }

  handleButtonOnRow = (id, name) => {
    switch(name) {
      case 'add':
        this.handleAddProductAction();
        break;
      case 'edit':
        this.handleEditAction(id);
        break;
      case 'save':
        this.handleSaveAction(id);
        break;
      case 'delete':
        this.handleDeleteAction(id);
        break;
      case 'cancel':
        this.handleCancelAction(id);
        break;
      default:
        return;
    }
  }

	render() {
		return (
      <div className='products-manage'>
        <h1>
          Products Management Application
        </h1>
        <FilterProduct
          formRef={form => {this.filterForm = form}}
          filterValue={this.state.filterData}
          filterColumns={this.columns}
          manufacturerOptions={this.manufacturers}
          categoryOptions={this.categories}
          handleFilterAction={this.handleFillterAction}
          handleClearAction={this.handleClearAction}
          handleChangeFilterValue={this.handleChangeFilterValue}
        />
        <Button
          name="btn-add"
          className="btn-add"
          handleClick={this.handleAddProductAction}
          label="Add New Product"
        />
        <table className="products-table">
          <ProductListHeader
            handleSortClick={this.handleSortAction}
            headerColumns={this.columns}
            sortType={this.state.sortType}
            sortBy={this.state.sortBy}
          />
          <ProductList
            manufacturerOptions={this.manufacturers}
            categoryOptions={this.categories}
            products={this.state.products}
            dataColumns={this.columns}
            productEditing={this.state.productEditing}
            handleChangeValueAction={this.handleChangeValueAction}
            handleButtonOnRow={this.handleButtonOnRow}
          />
        </table>
      </div>
		);
	}
}

export default ProductsManage;
