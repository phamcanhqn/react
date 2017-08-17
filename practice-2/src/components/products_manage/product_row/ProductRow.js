import React from 'react';
import PropTypes from 'prop-types';

import {Input} from './../../../common_components/input/Input';
import {Button} from './../../../common_components/button/Button';
import {DropdownSelect} from './../../../common_components/dropdown_select/DropdownSelect';

import './style/ProductRow.css';

class ProductRow extends React.Component {
  constructor(props) {
    super(props);
  }

  handleButtonEdit = event => {
    alert("edit product");
  }

  handleButtonDelete = event => {
    alert("delete product");
  }

  render() {
    const isEdit = this.props.isEdit;

    if (!isEdit) {
      return (
        <tr>
          <td>{this.props.row.code}</td>
          <td>{this.props.row.name}</td>
          <td>{this.props.row.manufacturer}</td>
          <td>{this.props.row.description}</td>
          <td>{this.props.row.category}</td>
          <td>{this.props.row.price}</td>
          <td>{this.props.row.quantity}</td>
          <td>
            <Button
              name="btn-edit"
              className="btn"
              handleClick={this.handleButtonEdit}
              label="Edit"/>
            <Button
              name="btn-delete"
              className="btn"
              handleClick={this.handleButtonDelete}
              label="Delete"/>
          </td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td>
            <Input
              name="product-code"
              className="code-input"
              handleChange="" />
          </td>
          <td>
            <Input
              name="product-name"
              className="name-input"
              handleChange="" />
          </td>
          <td>
            <DropdownSelect
              name="product-manufacturer"
              className="dropdown-select manufacturer-select"
              options={this.props.manufacturerOptions}
              handleChange=""/>
          </td>
          <td>
            <Input
              name="product-description"
              className="description-input"
              handleChange="" />
          </td>
          <td>
             <DropdownSelect
              name="product-category"
              className="dropdown-select category-select"
              options={this.props.categoryOptions}
              handleChange=""/>
          </td>
          <td>
            <Input
              name="product-price"
              className="price-input"
              handleChange="" />
          </td>
          <td>
            <Input
              name="product-quantity"
              className="quantity-input"
              handleChange="" />
          </td>
          <td>
            <Button
              name="btn-save"
              className="btn"
              handleClick={this.handleButtonEdit}
              label="Save"/>
            <Button
              name="btn-cancel"
              className="btn"
              handleClick={this.handleButtonDelete}
              label="Cancel"/>
          </td>
        </tr>
      );
    }
  }
}

export default ProductRow;
