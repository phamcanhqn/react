import React from 'react';
import PropTypes from 'prop-types';

import {Input} from '../commons/input';
import {DropdownSelect} from '../commons/dropdown-select';
import {Button} from '../commons/button';
import {ProductHelpers} from '../../helpers/Products';

import './styles/ProductFilter.css';

const ProductFilter = (props) => {
  let filterForm
  const columns = ProductHelpers.loadColumns()
  // let codeElement
  // let nameElement
  // let descriptionElement
  // let categoryElement
  // let manufacturerElement
  // let quanityElement
  // let priceElement

  const manufacturers = ProductHelpers.loadManufacturers()
  const categories = ProductHelpers.loadCategories()

  const handleFilterAction = event => {
    event.preventDefault()
    const dataFilter = collectFilterData(filterForm)
    console.log('dataFilter', dataFilter)
    props.handleFilterAction(dataFilter)
  }

  const handleClearAction = event => {
    event.preventDefault()
    filterForm.reset()
  }

  const collectFilterData = form => {
    let data={}
    columns.map(col => {
      data[col.name] = form[col.name].value
    })
    
    return data
  } 
  
  /*
  * Render element with type and name
  * Return a element
  */
  const renderElementByType = (type, name) => {
    let element;

    switch (type){
      case 'input':
        element = (
          <Input
            name={name}
            //inputRef={input => `${name + 'Element'} = input`}
            //value={`${name + 'Element'}.value`}
            
            className={`filter-input ${'filter-' + name}`}
            //handleChange={handleChangeFilterValue}
          />
        );
        break;

      case 'dropdown':
        element = (
          <DropdownSelect
            name={name}
            className={`filter-dropdown ${'filter-' + name}`}
            options={name === 'manufacturer' ? manufacturers : categories}
            value={props.filterData[name]}
            //handleChange={handleChangeFilterValue}
          />
        );
        break;

      default:
        element = null;
    }

    return element;
  }

    return (
      <form className="filter-form" ref={form => filterForm = form}>
        <fieldset>
          <legend>Filter Products</legend>
            <div className="filter-value">
            { columns.map((col) => {
              if (!col.isAllowedFilter) return null;

                return (
                  <label key={col.name}>
                    {col.display}
                    {renderElementByType(col.elementType, col.name)}
                  </label>
                );
              })
            }
            </div>
            <div className="filter-button">
              <Button
                type="submit"
                name="btn-filter"
                className="btn"
                handleClick={handleFilterAction}
                label="Filter"/>
              <Button
                type="button"
                name="btn-clear"
                className="btn"
                handleClick={handleClearAction}
                label="Clear"/>
            </div>
          </fieldset>
      </form>
    );
  }

  ProductFilter.propTypes = {
  formRef: PropTypes.func,
  handleClearAction: PropTypes.func,
  handleFilterAction: PropTypes.func,
  handleChangeFilterValue: PropTypes.func,
  filterColumns: PropTypes.arrayOf(PropTypes.object),
  filterValue: PropTypes.object,
  categoryOptions: PropTypes.arrayOf(PropTypes.object),
  manufacturerOptions: PropTypes.arrayOf(PropTypes.object)
}

ProductFilter.defaultProps = {
  formRef: null,
  handleClearAction: null,
  handleFilterAction: null,
  handleChangeFilterValue: null,
  filterColumns: [],
  filterValue: {},
  categoryOptions: [],
  manufacturerOptions: []
}

export default ProductFilter
