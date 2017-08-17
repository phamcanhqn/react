import React from 'react';
import PropTypes from 'prop-types';

import {SortIcon} from './../../../common_components/sort_icon/SortIcon';
import {Input} from './../../../common_components/input/Input';
import {DropdownSelect} from './../../../common_components/dropdown_select/DropdownSelect';

import './style/ProductListHeader.css';

class ProductListHeader extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	handleSortClick = (event) => {
    const sortBy = event.target.getAttribute('name');
		this.props.handleSortClick(event.target, sortBy);
	}

	render() {
		return (
			<thead>
				<tr>
          {
            this.props.headerColumns.map((col) => {
              return (
                <th>
                  <span className="header-title" name={col.name} onClick={col.isAllowedSort ? this.handleSortClick : null}>
                    {col.display}
                    <SortIcon className={`sort-icon ${this.props.sortBy === col.name ? this.props.sortType : ""}`} />
                  </span>
                </th>
              );
            })
          }
				</tr>
			</thead>
		);
	}
}

export default ProductListHeader;
