import React from 'react';
import PropTypes from 'prop-types'

import { Input } from 'pages/commons/Input'
import { DropdownSelect } from 'pages/commons/DropdownSelect'
import { Button } from 'pages/commons/Button'

import { ProductHelpers } from 'helpers/Products'

import './styles/ProductFilter.css'

const ProductFilter = (props) => {
  let filterForm

  // Get data columns
  const columns = ProductHelpers.loadColumns()

  // Get data for dropdown
  const manufacturers = ProductHelpers.loadManufacturers()
  const categories = ProductHelpers.loadCategories()

  /**
   * Handle filter action
   * @param {Object} event 
  */
  const handleFilterAction = event => {
    event.preventDefault()

    const dataFilter = collectFilterData(filterForm)
    props.handleFilterAction(dataFilter)
  }

  /**
   * Handle clear action
   * @param {Object} event 
  */
  const handleClearAction = event => {
    event.preventDefault()
    filterForm.reset()
  }

  /**
   * Collect all filter data on form
   * @param {Object} event
   * @return {Object} filter data
  */
  const collectFilterData = form => {
    let data={}
    
    columns.map(col => {
      return data[col.name] = form[col.name].value
    })
    
    return data
  } 
  
  /**
   * Render element with type and name
   * @param {String} type
   * @param {String} name
   * @return {Element} React Element
  */
  const renderElementByType = (type, name) => {
    let element

    switch (type){
      case 'input':
        element = (
          <Input
            name={name}
            className={`filter-input ${'filter-' + name}`}
          />
        )
        break

      case 'dropdown':
        element = (
          <DropdownSelect
            name={name}
            className={`filter-dropdown ${'filter-' + name}`}
            options={name === 'manufacturer' ? manufacturers : categories}
          />
        )
        break

      default:
        element = null
    }

    return element
  }

  /**
   * @return {Element} Filter Form React Element
  */
  return (
    <form className="filter-form" ref={form => filterForm = form}>
      <fieldset>
        <legend>Filter Products</legend>
          <div className="filter-value">
          { columns.map((col) => {
            if (!col.isAllowedFilter) return null

              return (
                <label key={col.name}>
                  {col.display}
                  {renderElementByType(col.elementType, col.name)}
                </label>
              )
            })
          }
          </div>
          <div className="filter-button">
            <Button
              type="submit"
              name="btn-filter"
              className="btn"
              handleClick={handleFilterAction}
              label="Filter"
            />
            <Button
              type="reset"
              name="btn-clear"
              className="btn"
              handleClick={handleClearAction}
              label="Clear"
            />
          </div>
        </fieldset>
    </form>
  )
}

ProductFilter.propTypes = {
  formRef: PropTypes.func,
  handleFilterAction: PropTypes.func.isRequired
}

ProductFilter.defaultProps = {
  formRef: null
}

export default ProductFilter
