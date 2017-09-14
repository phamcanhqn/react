import React from 'react';

import { Input } from '../commons/input/';
import { Button } from '../commons/button/';
import { DropdownSelect } from '../commons/dropdown-select/';
import {ProductHelpers} from '../../helpers/Products'

import './styles/ProductCell.css';

const ProductCell = props => {
  const manufacturers = ProductHelpers.loadManufacturers();
  const categories = ProductHelpers.loadCategories();

  const handleClickButton = (id, name) => {
    props.cellActions.handleButtonClick(id, name);
  }

  const renderButton = (name, label, productId) => {
    let handleClick = handleClickButton.bind(this, productId, name);
    return (
      <Button
        name={'btn-' + name}
        className={'btn-' + name}
        handleClick={handleClick}
        label={label}
      />
    );
  }

  /*
  * Render element with type and name
  * Return a element
  */
  const renderElementByType = (type, name) => {
    let element;
    if (!props.cellAttributes.isEditMode) {
      return props.value;
    }

    switch (type){
      case 'input':
        element = (
          <Input
            name={name}
            type={(name === 'quantity' || name === 'price') && 'number'}
            className={`value-input ${'input-' + name}`}
            value={props.value}
          />
        );
        break;

      case 'dropdown':
        element = (
          <DropdownSelect
            name={name}
            className={`value-dropdown ${'input-' + name}`}
            options={name === 'manufacturer' ? manufacturers : categories}
            value={props.value}
          />
        );
        break;

      default:
        element = null;
    }

    return element;
  }
  return (
    <td className={'product-'+ props.cellAttributes.name + (props.cellAttributes.isEditMode ? ' edit-mode' : '')}>
      {renderElementByType(props.cellAttributes.elementType, props.cellAttributes.name)}
      {props.cellAttributes.name === 'action' && renderButton('save', 'Save',props.cellData.productId)}
      {props.cellAttributes.name === 'action' && renderButton('edit', 'Edit', props.cellData.productId)}
      {props.cellAttributes.name === 'action' && renderButton('cancel', 'Cancel', props.cellData.productId)}
      {props.cellAttributes.name === 'action' && renderButton('delete', 'Delete', props.cellData.productId)}
    </td>
  )
}

export default ProductCell;
