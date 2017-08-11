import React from 'react';
import PropTypes from 'prop-types';

import {SortIcon} from './../../../common_components/sort_icon/SortIcon';
import {Input} from './../../../common_components/input/Input';
import {DropdownSelect} from './../../../common_components/dropdown_select/DropdownSelect';

import './style/ProductListHeader.css';

class ProductListHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	handleSortClick = (event) => {
		this.props.handleSortClick(event.target);
	}

	handleFiller = (event) => {
		this.props.handleFiller(event.target);
	}

	render() {
		return (
			<thead>
				<tr>
					<th>
						<span className="header-title" name="code" onClick={this.props.handleSortClick}>
							Code
							<SortIcon className="sort-icon asc-sort" />
						</span>
						<Input
							name="fillter-code"
							className="fillter-code"
							handleChange={this.props.handleFiller}/>
					</th>
					<th>
						<span className="header-title" name="name" onClick={this.props.handleSortClick}>
							Name
							<SortIcon className="sort-icon" />
						</span>
						<Input
							name="fillter-name"
							className="fillter-name"
							handleChange={this.props.handleFiller}/>
					</th>
					<th>
						<span className="header-title" name="manufacturer" onClick={this.props.handleSortClick}>
							Manufacturer
							<SortIcon className="sort-icon" />
						</span>
						<DropdownSelect
							name="fillter-manufacturer"
							className="fillter-manufacturer"
							options={this.props.manufacturerOptions}
							handleChange={this.props.handleFiller}/>
					</th>
					<th>
						<span className="header-title" name="description" onClick={this.props.handleSortClick}>
							Description
							<SortIcon className="sort-icon" />
						</span>
						<Input
							name="fillter-description"
							className="fillter-description"
							handleChange={this.props.handleFiller}/>
					</th>
					<th>
						<span className="header-title" name="category" onClick={this.props.handleSortClick}>
							Category
							<SortIcon className="sort-icon" />
						</span>
						<DropdownSelect
							name="fillter-category"
							className="fillter-category"
							options={this.props.categoryOptions}
							handleChange={this.props.handleFiller}/>
					</th>
					<th>
						<span className="header-title" name="price" onClick={this.props.handleSortClick}>
							Price
							<SortIcon className="sort-icon" />
						</span>
						<Input
							name="fillter-price"
							className="fillter-price"
							handleChange={this.props.handleChangePrice}/>
					</th>
					<th>
						<span className="header-title" name="quanity" onClick={this.props.handleSortClick}>
							Quanity
							<SortIcon className="sort-icon" />
						</span>
						<Input
							name="fillter-quanity"
							className="fillter-quanity"
							handleChange={this.props.handleFiller}/>
					</th>
					<th>
						<span>Action</span>
					</th>
				</tr>
			</thead>
		);
	}
}

export default ProductListHeader;