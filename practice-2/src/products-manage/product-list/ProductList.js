import React from 'react';
import PropTypes from 'prop-types';

import {ProductHelpers} from './../../helpers/Products';
import ProductRow from './../product-row/ProductRow';

import './style/ProductList.css';

class ProductList extends React.Component {
  handleChangeValueAction = (value, fieldName) => {
    this.props.handleChangeValueAction(value, fieldName);
  }

  handleButtonClickOnRow = (id, name) => {
    this.props.handleButtonOnRow(id, name);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.products !== nextProps.products ||
      !ProductHelpers.compareObject(this.props.productEditing, nextProps.productEditing);
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
export default ProductList;
