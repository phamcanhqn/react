import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {Input} from './../../commons/input/Input';
import {Button} from './../../commons/button/Button';
import {DropdownSelect} from './../../commons/dropdown-select/DropdownSelect';

import './style/ProductRow.css';

class ProductRow extends React.Component {
  constructor(props) {
    super(props);
  }

  handleButtonEdit = id => {
    this.props.handleButtonEdit(id);
  }

  handleButtonDelete = id => {
    this.props.handleButtonDelete(id);
  }

  handleButtonCancel = id => {
    this.props.handleButtonCancel(id);
  }

  handleButtonSave = id => {
    this.props.handleButtonSave(id);
  }

  handleChangeValue = (event) => {
    const fieldName = event.target.getAttribute('name');

    this.props.handleChangeValue(event.target.value, fieldName);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.isEditMode !== nextProps.isEditMode ||
      this.compareProductData(this.props.product, nextProps.product);
  }


  compareProductData = (oldProuct, newProduct) => {
    return _.isEqual(oldProuct, newProduct)
  }

  render() {
    if (!this.props.isEditMode) {
      return (
        <tr>
          <td>{this.props.product.code}</td>
          <td>{this.props.product.name}</td>
          <td>{this.props.product.manufacturer}</td>
          <td>{this.props.product.description}</td>
          <td>{this.props.product.category}</td>
          <td>{this.props.product.price}</td>
          <td>{this.props.product.quantity}</td>
          <td>
            <Button
              name="btn-edit"
              className="btn"
              handleClick={this.handleButtonEdit.bind(this, this.props.product.id)}
              label="Edit"/>
            <Button
              name="btn-delete"
              className="btn"
              handleClick={this.handleButtonDelete.bind(this, this.props.product.id)}
              label="Delete"/>
          </td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td>
            <Input
              name="code"
              value={this.props.product.code}
              className="code-input"
              handleChange={this.handleChangeValue} />
          </td>
          <td>
            <Input
              name="name"
              value={this.props.product.name}
              className="name-input"
              handleChange={this.handleChangeValue} />
          </td>
          <td>
            <DropdownSelect
              name="manufacturer"
              value={this.props.product.manufacturer}
              className="dropdown-select manufacturer-select"
              options={this.props.manufacturerOptions}
              handleChange={this.handleChangeValue} />
          </td>
          <td>
            <Input
              name="description"
              value={this.props.product.description}
              className="description-input"
              handleChange={this.handleChangeValue} />
          </td>
          <td>
             <DropdownSelect
              name="category"
              value={this.props.product.category}
              className="dropdown-select category-select"
              options={this.props.categoryOptions}
              handleChange={this.handleChangeValue} />
          </td>
          <td>
            <Input
              name="price"
              value={this.props.product.price}
              className="price-input"
              handleChange={this.handleChangeValue} />
          </td>
          <td>
            <Input
              name="quantity"
              value={this.props.product.quantity}
              className="quantity-input"
              handleChange={this.handleChangeValue} />
          </td>
          <td>
            <Button
              name="btn-save"
              className="btn"
              handleClick={this.handleButtonSave.bind(this, this.props.product.id)}
              label="Save"/>
            <Button
              name="btn-cancel"
              className="btn"
              handleClick={this.handleButtonCancel.bind(this, this.props.product.id)}
              label="Cancel"/>
          </td>
        </tr>
      );
    }
  }
}

export default ProductRow;
