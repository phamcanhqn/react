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

  render() {
    return (
      <form className="filter-form" ref={this.props.formRef}>
        { this.props.filterColumns.map((col) => {
          let element;

            switch (col.elementType){
              case 'input':
                element = (
                    <Input
                      name={col.name}
                      className={`filter-input ${'filter-' + col.name}`}
                      value={this.props.filterValue[col.name]}
                      handleChange={this.handleChangeFilterValue} />
                  );
                break;
              case 'dropdown':
                element = (
                  <DropdownSelect
                    name={col.name}
                    className={`filter-dropdown ${'filter-' + col.name}`}
                    options={this.props[col.name + 'Options']}
                    value={this.props.filterValue[col.name]}
                    handleChange={this.handleChangeFilterValue} />
                );
                break;
              default:
                element = null;
            }

            return (
              <label key={col.name}>
                {col.display}
                {element}
              </label>
            );
          })
        }

        <Button
          name="btn-filter"
          className="btn"
          handleClick={this.handleFilterAction}
          label="Filter"/>
        <Button
          name="btn-clear"
          className="btn"
          handleClick={this.handleClearAction}
          label="Clear filter"/>
      </form>
    );
  }
}

FilterProduct.propTypes = {
  filterColumns: PropTypes.arrayOf(PropTypes.object),
  filterValue: PropTypes.object,
  categoryOptions: PropTypes.arrayOf(PropTypes.object),
  manufacturerOptions: PropTypes.arrayOf(PropTypes.object)
};

FilterProduct.defaultProps = {
  filterColumns: [],
  filterValue: {},
  categoryOptions: [],
  manufacturerOptions: []
};

export default FilterProduct;
