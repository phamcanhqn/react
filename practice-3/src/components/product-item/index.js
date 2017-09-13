import React from 'react';
import PropTypes from 'prop-types';

import {ProductHelpers} from '../../helpers/Products';
import ProductCell from '../product-cell';

//import { visualizeRender } from 'react-global-render-visualizer';

import './styles/ProductItem.css';

// if (process.env.NODE_ENV !== 'production') {
//   React.Component = visualizeRender()(React.Component);
//   React.PureComponent = visualizeRender()(React.PureComponent);
// }

class ProductItem extends React.Component {
  handleClickButton = (id, name) => {
    alert(id + ' '+ name)
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
          ProductHelpers.loadColumns().map(col => {
            const cellAttributes = {
              ...col,
              isEditMode: this.props.isEditMode
            }

            const cellData = {
              productId: this.props.product.id
            }

            const cellActions = {
              handleChangeValue: this.handleChangeValue,
              handleButtonClick: this.handleClickButton
            }
            return (
              <ProductCell
                key={col.name}
                cellAttributes={cellAttributes}
                cellData={cellData}
                cellActions={cellActions}
                value={this.props.product[col.name]}
              />
            );
          })
        }
      </tr>
    );
  }
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  handleButtonClickOnRow:  PropTypes.func
}

ProductItem.defaultProps = {
  handleChangeCancel: null
}

export default ProductItem;
