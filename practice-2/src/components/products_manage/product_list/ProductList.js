import React from 'react';
import PropTypes from 'prop-types';

import ProductListHeader from '../product_list_header/ProductListHeader';
import './style/ProductList.css';

class ProductList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<table>
				<ProductListHeader
					handleSortClick={this.props.handleSortAction}
					handleFiller={this.props.handleFillterAction}

					manufacturerOptions={this.props.manufacturerOptions}
					categoryOptions={this.props.categoryOptions} />
			</table>
		);
	}
}

export default ProductList;