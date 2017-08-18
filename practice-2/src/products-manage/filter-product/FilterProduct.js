import React from 'react';
import PropTypes from 'prop-types';

import {Input} from './../../commons/input/Input';
import {DropdownSelect} from './../../commons/dropdown-select/DropdownSelect';
import {Button} from './../../commons/button/Button';
import {ProductHelpers} from './../../helpers/Products';

import './style/FilterProduct.css';

class FilterProduct extends React.Component {
  handleChangeFilterValue = (event) => {
    const fillterBy = event.target.getAttribute('name');

    this.props.handleChangeFilterValue(event.target.value, fillterBy);
  }

  handleFilterAction = (event) => {
    event.preventDefault();
    this.props.handleFilterAction();
  }

  handleClearAction = (event) => {
    event.preventDefault();
    this.props.handleClearAction();
  }

  shouldComponentUpdate(nextProps) {
    return !ProductHelpers.compareObject(this.props.filterValue, nextProps.filterValue);
  }

  /*
  * Render element with type and name
  * Return a element
  */
  renderElementByType = (type, name) => {
    let element;

    switch (type){
      case 'input':
        element = (
            <Input
              name={name}
              className={`filter-input ${'filter-' + name}`}
              value={this.props.filterValue[name]}
              handleChange={this.handleChangeFilterValue} />
          );
        break;
      case 'dropdown':
        element = (
          <DropdownSelect
            name={name}
            className={`filter-dropdown ${'filter-' + name}`}
            options={this.props[name + 'Options']}
            value={this.props.filterValue[name]}
            handleChange={this.handleChangeFilterValue} />
        );
        break;
      default:
        element = null;
    }

    return element;
  }

  render() {
    return (
      <form className="filter-form" ref={this.props.formRef}>
        <fieldset>
          <legend>Filter Products</legend>
            <div className="filter-value">
            { this.props.filterColumns.map((col) => {
              if (!col.isAllowedFilter) return null;

                return (
                  <label key={col.name}>
                    {col.display}
                    {this.renderElementByType(col.elementType, col.name)}
                  </label>
                );
              })
            }
            </div>
            <div className="filter-button">
              <Button
                name="btn-filter"
                className="btn"
                handleClick={this.handleFilterAction}
                label="Filter"/>
              <Button
                name="btn-clear"
                className="btn"
                handleClick={this.handleClearAction}
                label="Clear"/>
            </div>
          </fieldset>
      </form>
    );
  }
}

FilterProduct.propTypes = {
  formRef: PropTypes.func,
  handleClearAction: PropTypes.func,
  handleFilterAction: PropTypes.func,
  handleChangeFilterValue: PropTypes.func,
  filterColumns: PropTypes.arrayOf(PropTypes.object),
  filterValue: PropTypes.object,
  categoryOptions: PropTypes.arrayOf(PropTypes.object),
  manufacturerOptions: PropTypes.arrayOf(PropTypes.object)
};

FilterProduct.defaultProps = {
  formRef: null,
  handleClearAction: null,
  handleFilterAction: null,
  handleChangeFilterValue: null,
  filterColumns: [],
  filterValue: {},
  categoryOptions: [],
  manufacturerOptions: []
};

export default FilterProduct;
