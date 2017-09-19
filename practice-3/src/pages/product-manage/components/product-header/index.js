import React from 'react'
import PropTypes from 'prop-types'

import { SortIcon } from 'pages/commons/sort-icon'
import { ProductHelpers } from 'helpers/Products'

import './styles/ProductHeader.css'

const ProductHeader = props => {
  // Get data columns
  const columns = ProductHelpers.loadColumns()

  /**
   * Handle sort action on product list
   * Check sort type and sort by field on product list and sorting products list
   * @param {Object} event 
  */
	const handleSortClick = (event) => {
    const currentTarget = event.currentTarget
    const sortIcon = currentTarget.getElementsByClassName('sort-icon')[0]
    const sortBy = currentTarget.getAttribute('name')
    const sortType = checkSortType(sortIcon)

		props.handleSortClick(sortBy, sortType)
  }

  /**
   * Check sort type when user click on header of table
   * Return sort type
   * @param {Element} sortIcon 
  */
  const checkSortType = sortIcon => {
    if (sortIcon.classList.contains('asc-sort')) {
      return 'desc-sort'
    }else if (sortIcon.classList.contains('desc-sort')) {
      return null
    }else {
      return 'asc-sort'
    }
  }

  /**
   * @return {Element} Header Product List React Element
  */
  return (
    <thead>
      <tr>
        {
          columns.map((col) => {
            return (
              <th
                key={col.name}
                className={col.name + "-column"}
                name={col.name}
                onClick={col.isAllowedSort ? handleSortClick : null}
              >
                <span className="header-title">
                  {col.display}
                  <SortIcon className={`sort-icon ${props.sortBy === col.name ? props.sortType : ""}`} />
                </span>
              </th>
            )
          })
        }
      </tr>
    </thead>
  )
}

ProductHeader.propTypes = {
  handleSortClick: PropTypes.func,
  sortType: PropTypes.string,
  sortBy: PropTypes.string
}

ProductHeader.defaultProps = {
  handleSortClick: null,
  sortType: '',
  sortBy: ''
}

export default ProductHeader
