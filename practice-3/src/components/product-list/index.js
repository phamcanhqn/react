import React from 'react';
import PropTypes from 'prop-types';

import {ProductHelpers} from './../../helpers/Products';
import ProductItem from './../product-item';

import './styles/ProductList.css';

class ProductList extends React.Component {
  handleChangeValueAction = (value, fieldName) => {
    this.props.handleChangeValueAction(value, fieldName);
  }

  handleButtonClickOnRow = (id, name) => {
    this.props.handleButtonOnRow(id, name);
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
            <ProductItem
              id={product.id}
              //isEditMode={isEditMode}
              key={product.id}
              product={isEditMode ? productEditing : product}
              handleButtonClickOnRow={this.handleButtonClickOnRow}
              handleChangeValue={this.handleChangeValueAction}
            />
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
  handleChangeValueAction: PropTypes.func,
  handleButtonClickOnRow: PropTypes.func
};

ProductList.defaultProps = {
  productEditing: {},
  handleChangeValueAction: null
};
export default ProductList
