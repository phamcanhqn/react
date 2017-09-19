import React from 'react';
import PropTypes from 'prop-types';

import VisibleProductItem from '../../containers/ProductItem';

import './styles/ProductList.css';

const ProductList = props => {
    if (!props.products.length) {
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
        { 
          props.products.map((product) => {
            return <VisibleProductItem key={product.id} product={product}/>
          })
        }
      </tbody>
    )
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
