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
    const sortBy = event.target.getAttribute('name');
		this.props.handleSortClick(event.target, sortBy);
	}

	handleFillter = (event) => {
    const fillterBy = event.target.getAttribute('name');
		this.props.handleFiller(event.target, fillterBy);
	}

	render() {
		return (
			<thead>
				<tr>
					<th>
						<span className="header-title" name="code" onClick={this.handleSortClick}>
							Code
							<SortIcon className="sort-icon" />
						</span>
						<Input
							name="code"
							className="fillter-code"
              value={this.props.codeValue}
							handleChange={this.handleFillter}/>
					</th>
					<th>
						<span className="header-title" name="name" onClick={this.handleSortClick}>
							Name
							<SortIcon className="sort-icon" />
						</span>
						<Input
							name="name"
							className="fillter-name"
              value={this.props.nameValue}
							handleChange={this.handleFillter}/>
					</th>
					<th>
						<span className="header-title" name="manufacturer" onClick={this.handleSortClick}>
							Manufacturer
							<SortIcon className="sort-icon" />
						</span>
						<DropdownSelect
							name="manufacturer"
							className="fillter-manufacturer"
							options={this.props.manufacturerOptions}
              value={this.props.manufacturerValue}
							handleChange={this.handleFillter}/>
					</th>
					<th>
						<span className="header-title" name="description" onClick={this.handleSortClick}>
							Description
							<SortIcon className="sort-icon" />
						</span>
						<Input
							name="description"
							className="fillter-description"
              value={this.props.descriptionValue}
							handleChange={this.handleFillter}/>
					</th>
					<th>
						<span className="header-title" name="category" onClick={this.handleSortClick}>
							Category
							<SortIcon className="sort-icon" />
						</span>
						<DropdownSelect
							name="category"
							className="fillter-category"
              value={this.props.categoryValue}
							options={this.props.categoryOptions}
							handleChange={this.handleFillter}/>
					</th>
					<th>
						<span className="header-title" name="price" onClick={this.handleSortClick}>
							Price
							<SortIcon className="sort-icon" />
						</span>
						<Input
							name="price"
							className="fillter-price"
              value={this.props.priceValue}
							handleChange={this.handleFillter}/>
					</th>
					<th>
						<span className="header-title" name="quanity" onClick={this.handleSortClick}>
							Quanity
							<SortIcon className="sort-icon" />
						</span>
						<Input
							name="quantity"
							className="fillter-quantity"
              value={this.props.quanityValue}
							handleChange={this.handleFillter}/>
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
