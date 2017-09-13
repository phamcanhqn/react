import React from 'react';
import PropTypes from 'prop-types';

import {Input} from '../commons/input';
import {DropdownSelect} from '../commons/dropdown-select';
import {Button} from '../commons/button';
import {ProductHelpers} from '../../helpers/Products';

import './styles/ProductFilter.css';

const ProductFilter = (props) => {
  let filterForm
  const manufacturers = ProductHelpers.loadManufacturers()
  const categories = ProductHelpers.loadCategories()

  const handleFilterAction = (event) => {
    event.preventDefault();
  }

  const handleClearAction = (event) => {
    event.preventDefault()
    filterForm.reset()
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
            className={`filter-input ${'filter-' + name}`}
          />
        );
        break;

      case 'dropdown':
        element = (
          <DropdownSelect
            name={name}
            className={`filter-dropdown ${'filter-' + name}`}
            options={name === 'manufacturer' ? manufacturers : categories}
            value={props.filterValue[name]}
            //handleChange={null}
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
            { ProductHelpers.loadColumns().map((col) => {
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
