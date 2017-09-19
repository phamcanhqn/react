import React from 'react';

import { Input } from 'pages/commons/input/'
import { Button } from 'pages/commons/button/'
import { DropdownSelect } from 'pages/commons/dropdown-select/'
import { ProductHelpers } from 'helpers/Products'

import './styles/ProductCell.css';

const ProductCell = props => {
  // Get data for dropdown
  const manufacturers = ProductHelpers.loadManufacturers();
  const categories = ProductHelpers.loadCategories();

  const handleClickButton = (id, name) => {
    props.cellActions.handleButtonClick(id, name);
  }
  
  const renderButton = (name, label, productId) => {
    let handleClick = handleClickButton.bind(this, productId, name)

    return (
      <Button
        name={'btn-' + name}
        className={'btn-' + name}
        handleClick={handleClick}
        label={label}
      />
    );
  }
  
  /**
   * Render element with type and name
   * @param {String} type
   * @param {String} name
   * @return {Element} React Element
  */
  const renderElementByType = (type, name) => {
    let element
    if (!props.cellAttributes.isEditMode) {
      return props.value
    }

    switch (type){
      case 'input':
        element = (
          <Input
            inputRef={props.refElement}
            name={name}
            isRequired={true}
            type={(name === 'quantity' || name === 'price') ? 'number' : 'text'}
            className={`value-input ${'input-' + name}`}
            value={props.value}
          />
        )
        break

      case 'dropdown':
        element = (
          <DropdownSelect
            selectRef={props.refElement}
            name={name}
            isRequired={true}
            className={`value-dropdown ${'input-' + name}`}
            options={name === 'manufacturer' ? manufacturers : categories}
            value={props.value}
          />
        )
        break

      default:
        element = null;
    }

    return element;
  }

  // Check render button for cell. If action cell then render button else render normal element
  if (props.cellAttributes.name === 'action') {
    return (
      <td className={props.cellAttributes.name + '-column ' + (props.cellAttributes.isEditMode ? ' edit-mode' : '')}>
        {props.cellAttributes.isEditMode && renderButton('save', 'Save',props.cellData.productId) }
        {props.cellAttributes.isEditMode && renderButton('cancel', 'Cancel', props.cellData.productId) }
        {!props.cellAttributes.isEditMode && renderButton('edit', 'Edit', props.cellData.productId) }
        {!props.cellAttributes.isEditMode && renderButton('delete', 'Delete', props.cellData.productId) }
      </td>
    )
  } else {
    return (
      <td className={props.cellAttributes.name + '-column ' + (props.cellAttributes.isEditMode ? ' edit-mode' : '')}>
        {renderElementByType(props.cellAttributes.elementType, props.cellAttributes.name)}
      </td>
    )
  }
}

export default ProductCell;
