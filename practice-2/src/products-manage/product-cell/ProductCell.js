import React from 'react';

import {Input} from './../../commons/input/Input';
import {Button} from './../../commons/button/Button';
import {DropdownSelect} from './../../commons/dropdown-select/DropdownSelect';

import './style/ProductCell.css';

class ProductCell extends React.PureComponent {
  handleChangeValue = (event) => {
    const fieldName = event.target.getAttribute('name');

    this.props.handleChangeValue(event.target.value, fieldName);
  }

  handleClickButton = (id, name) => {
    this.props.handleButtonClick(id, name);
  }

  renderButton = (name, label, productId) => {
    let handleClickButton = this.handleClickButton.bind(this, productId, name);
    return (
      <Button
        name={'btn-' + name}
        className={'btn-' + name}
        handleClick={handleClickButton}
        label={label}
      />
    );
  }

  /*
  * Render element with type and name
  * Return a element
  */
  renderElementByType = (type, name) => {
    let element;
    if (!this.props.isEditMode) {
      return this.props.value;
    }

    switch (type){
      case 'input':
        element = (
          <Input
            name={name}
            type={(name === 'quantity' || name === 'price') && 'number'}
            className={`value-input ${'input-' + name}`}
            value={this.props.value}
            handleChange={this.handleChangeValue}
          />
        );
        break;

      case 'dropdown':
        element = (
          <DropdownSelect
            name={name}
            className={`value-dropdown ${'input-' + name}`}
            options={this.props[name + 'Options']}
            value={this.props.value}
            handleChange={this.handleChangeValue}
          />
        );
        break;

      default:
        element = null;
    }

    return element;
  }


  render() {
    return (
      <td className={'product-'+ this.props.name + (this.props.isEditMode ? ' edit-mode' : '')}>
        {this.renderElementByType(this.props.elementType, this.props.name)}
        {this.renderButton('save', 'Save', this.props.productId)}
        {this.renderButton('edit', 'Edit', this.props.productId)}
        {this.renderButton('cancel', 'Cancel', this.props.productId)}
        {this.renderButton('delete', 'Delete', this.props.productId)}
      </td>
    );
  }
}

export default ProductCell;
