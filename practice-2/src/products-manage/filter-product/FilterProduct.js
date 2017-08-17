import React from 'react';
import PropTypes from 'prop-types';

import {Input} from './../../commons/input/Input';
import {DropdownSelect} from './../../commons/dropdown-select/DropdownSelect';
import {Button} from './../../commons/button/Button';

import './style/FilterProduct.css';

class FilterProduct extends React.Component {
  constructor(props) {
    super(props);
  }

  handleFilterAction = (event) => {
    event.preventDefault();
    this.props.handleFilterClick(event);
  }

  handleChangeFilterValue = (event) => {
    const fillterBy = event.target.getAttribute('name');

    this.props.handleChangeFilterValue(event.target.value, fillterBy);
  }

  render() {
    return (
      <form className="filter-form">
        <label>
          Code
          <Input
            name="code"
            className="fillter-code"
            value={this.props.filterValue.code}
            handleChange={this.handleChangeFilterValue} />
        </label>
        <label>
          Name
          <Input
            name="name"
            className="fillter-name"
            value={this.props.filterValue.name}
            handleChange={this.handleChangeFilterValue} />
        </label>
        <label>
          Manufacturer
          <DropdownSelect
            name="manufacturer"
            className="fillter-manufacturer"
            options={this.props.manufacturerOptions}
            value={this.props.filterValue.manufacturer}
            handleChange={this.handleChangeFilterValue} />
        </label>
        <label>
          Description
          <Input
            name="description"
            className="fillter-description"
            value={this.props.filterValue.description}
            handleChange={this.handleChangeFilterValue} />
        </label>
        <label>
          Category
          <DropdownSelect
            name="category"
            className="fillter-category"
            value={this.props.filterValue.category}
            options={this.props.categoryOptions}
            handleChange={this.handleChangeFilterValue} />
        </label>
        <label>
          Price
          <Input
            name="price"
            className="fillter-price"
            value={this.props.filterValue.price}
            handleChange={this.handleChangeFilterValue} />
        </label>
        <label>
          Quantity
          <Input
            name="quantity"
            className="fillter-quantity"
            value={this.props.filterValue.quantity}
            handleChange={this.handleChangeFilterValue} />
        </label>
        <Button
          name="btn-filter"
          className="btn"
          handleClick={this.handleFilterAction}
          label="Filter"/>
      </form>
    );
  }
}

export default FilterProduct;
