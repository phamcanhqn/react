import React from 'react';
import PropTypes from 'prop-types';

import ProductListHeader from './../product_list_header/ProductListHeader';
import ProductRow from './../product_row/ProductRow';
import './style/ProductList.css';

class ProductList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
      <tbody>
        {this.props.products.map((product) => {
            return (
              <ProductRow
                isEdit={this.props.isEdit}
                key={product.id}
                row={product}
                manufacturerOptions={this.props.isEdit ? this.props.manufacturerOptions : []}
                categoryOptions={this.props.isEdit ? this.props.categoryOptions : []} />
            );
          })
        }
      </tbody>
		);
	}
}

export default ProductList;
