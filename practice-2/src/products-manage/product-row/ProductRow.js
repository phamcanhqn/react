import React from 'react';
import PropTypes from 'prop-types';

import {ProductHelpers} from './../../helpers/Products';
import ProductCell from './../product-cell/ProductCell';

import { visualizeRender } from 'react-global-render-visualizer';

import './style/ProductRow.css';

if (process.env.NODE_ENV !== 'production') {
  React.Component = visualizeRender()(React.Component);
  React.PureComponent = visualizeRender()(React.PureComponent);
}

class ProductRow extends React.Component {
  handleClickButton = (id, name) => {
    this.props.handleButtonClickOnRow(id, name);
  }

  handleChangeValue = (value, fieldName) => {
    this.props.handleChangeValue(value, fieldName);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.isEditMode !== nextProps.isEditMode ||
      !ProductHelpers.compareObject(this.props.product, nextProps.product);
  }

  render() {
    return (
      <tr>
        {
          //FIX ME: Need refactor code at here
          this.props.dataColumns.map(col => {
            return (
              <ProductCell
                key={col.name}
                name={col.name}
                productId={this.props.product.id}
                elementType={col.elementType}
                isEditMode={this.props.isEditMode}
                value={this.props.product[col.name]}
                categoryOptions={this.props.categoryOptions}
                manufacturerOptions={this.props.manufacturerOptions}
                handleChangeValue={this.handleChangeValue}
                handleButtonClick={this.handleClickButton} >
              </ProductCell>
            );
          })
        }
      </tr>
    );
  }
}

ProductRow.propTypes = {
  product: PropTypes.object.isRequired,
  handleButtonClickOnRow:  PropTypes.func
}

ProductRow.defaultProps = {
  handleChangeCancel: null
}

export default ProductRow;
