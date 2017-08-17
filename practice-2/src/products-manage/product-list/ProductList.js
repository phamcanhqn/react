import React from 'react';
import PropTypes from 'prop-types';

import ProductListHeader from './../product-list-header/ProductListHeader';
import ProductRow from './../product-row/ProductRow';
import './style/ProductList.css';

class ProductList extends React.Component {
	constructor(props) {
		super(props);
	}

  handleEditAction = id => {
    this.props.handleEditAction(id);
  }

  handleCancelAction = id => {
    this.props.handleCancelAction(id);
  }

  handleDeleteAction = id => {
    this.props.handleDeleteAction(id);
  }

  handleChangeValueAction = (value, fieldName) => {
    this.props.handleChangeValueAction(value, fieldName);
  }

  handleSaveAction = id => {
    this.props.handleSaveAction(id);
  }

	render() {
    const productEditing = this.props.productEditing;

		return (
      <tbody>
        {this.props.products.map((product) => {
          const isEditMode = product.id === this.props.productEditing.id;

          return (
            <ProductRow
              id={product.id}
              isEditMode={isEditMode}
              key={product.id}
              product={isEditMode ? productEditing : product}
              manufacturerOptions={isEditMode ? this.props.manufacturerOptions : []}
              categoryOptions={isEditMode  ? this.props.categoryOptions : []}
              handleButtonEdit={this.handleEditAction}
              handleButtonSave={this.handleSaveAction}
              handleButtonCancel={this.handleCancelAction}
              handleButtonDelete={this.handleDeleteAction}
              handleChangeValue={this.handleChangeValueAction} />
            );
          })
        }
      </tbody>
		);
	}
}

export default ProductList;
