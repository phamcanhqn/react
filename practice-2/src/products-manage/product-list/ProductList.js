import React from 'react';
import PropTypes from 'prop-types';

import ProductListHeader from './../product-list-header/ProductListHeader';
import ProductRow from './../product-row/ProductRow';
import './style/ProductList.css';

class ProductList extends React.PureComponent {
	constructor(props) {
		super(props);
	}

  handleEditAction = id => {
    this.props.handleEditAction(id);
  }

  handleCancelAction = id => {
    this.props.handleCancelAction(id);
  }

	render() {
    console.log('vao list')
		return (
      <tbody>
        {this.props.products.map((product) => {
          const mode = product.id === this.props.rowEditing ? 'edit' : 'view';

          return (
            <ProductRow
              id={product.id}
              mode={mode}
              key={product.id}
              row={product}
              manufacturerOptions={mode === "edit" ? this.props.manufacturerOptions : []}
              categoryOptions={mode === "edit"  ? this.props.categoryOptions : []}
              handleButtonEdit={this.handleEditAction}
              handleButtonCancel={this.handleCancelAction} />
            );
          })
        }
      </tbody>
		);
	}
}

export default ProductList;
