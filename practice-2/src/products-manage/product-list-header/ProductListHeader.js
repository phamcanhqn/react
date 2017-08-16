import React from 'react';
import PropTypes from 'prop-types';

import {SortIcon} from './../../commons/sort-icon/SortIcon';
import {Input} from './../../commons/input/Input';
import {DropdownSelect} from './../../commons/dropdown-select/DropdownSelect';

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
