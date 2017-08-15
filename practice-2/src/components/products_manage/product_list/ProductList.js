import React from 'react';
import PropTypes from 'prop-types';

import ProductListHeader from './../product_list_header/ProductListHeader';
import ProductRow from './../product_row/ProductRow';
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
    console.log('vao list ne')
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
              manufacturerOptions={this.props.isEdit ? this.props.manufacturerOptions : []}
              categoryOptions={this.props.isEdit ? this.props.categoryOptions : []}
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
