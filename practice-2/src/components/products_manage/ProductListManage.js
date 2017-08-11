import React from 'react';
import PropTypes from 'prop-types';

import {Button} from './../../common_components/button/Button';
import ProductList from './product_list/ProductList';

class ProductListManage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<table>
				<ProductList
					handleChangeCodeAction={null}
					handleChangeCodeAction={null}
					handleChangeCodeAction={null}
					handleChangeCodeAction={null}
					handleChangeCodeAction={null}
					handleChangeCodeAction={null}
					handleChangeCodeAction={null}

					manufacturerOptions={[]}
					categoryOptions={[]}
					/>
			</table>
		);
	}
}

export default ProductListManage;