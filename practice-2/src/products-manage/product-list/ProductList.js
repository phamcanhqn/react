import React from 'react';
import PropTypes from 'prop-types';

import ProductRow from './../product-row/ProductRow';
import './style/ProductList.css';

class ProductList extends React.Component {
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
    if (!this.props.products.length) {
      return (
        <tbody>
          <tr>
            <td colSpan="8">No data found</td>
          </tr>
        </tbody>
      );
    }
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
              dataColumns={this.props.dataColumns}
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

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  productEditing: PropTypes.object,
  handleEditAction: PropTypes.func.isRequired,
  handleCancelAction: PropTypes.func,
  handleDeleteAction: PropTypes.func.isRequired,
  handleChangeValueAction: PropTypes.func,
  handleSaveAction: PropTypes.func
};

ProductList.defaultProps = {
  productEditing: {},
  handleCancelAction: null,
  handleChangeValueAction: null,
  handleSaveAction: null
};
export default ProductList;
