import React from 'react';
import PropTypes from 'prop-types';

import {SortIcon} from './../../commons/sort-icon/SortIcon';

import './style/ProductListHeader.css';

class ProductListHeader extends React.PureComponent {
	handleSortClick = (event) => {
    const sortBy = event.currentTarget.getAttribute('name');
		this.props.handleSortClick(event.currentTarget, sortBy);
	}

	render() {
		return (
			<thead>
				<tr>
          {
            this.props.headerColumns.map((col) => {
              return (
                <th
                  key={col.name}
                  className={col.name + "-column"}
                  name={col.name}
                  onClick={col.isAllowedSort ? this.handleSortClick : null}>
                  <span className="header-title">
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

ProductListHeader.propTypes = {
  headerColumns: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSortClick: PropTypes.func,
  sortType: PropTypes.string,
  sortBy: PropTypes.string
};

ProductListHeader.defaultProps = {
  handleSortClick: null,
  sortType: '',
  sortBy: ''
};

export default ProductListHeader;
