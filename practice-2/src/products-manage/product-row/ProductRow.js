import React from 'react';
import PropTypes from 'prop-types';

import {Input} from './../../commons/input/Input';
import {Button} from './../../commons/button/Button';
import {DropdownSelect} from './../../commons/dropdown-select/DropdownSelect';
import {ProductHelpers} from './../../helpers/Products';

import './style/ProductRow.css';

class ProductRow extends React.Component {
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
      !ProductHelpers.compareObject(this.props.product, nextProps.product);
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
              type={(name === 'quantity' || name === 'price') && 'number'}
              className={`value-input ${'input-' + name}`}
              value={this.props.product[name]}
              handleChange={this.handleChangeValue} />
          );
        break;
      case 'dropdown':
        element = (
          <DropdownSelect
            name={name}
            className={`value-dropdown ${'input-' + name}`}
            options={this.props[name + 'Options']}
            value={this.props.product[name]}
            handleChange={this.handleChangeValue} />
        );
        break;
      default:
        element = null;
    }

    return element;
  }

  /*
  * HOC: Create button with name and handle click action
  * Return new component
  */
  renderButton = (Button, productId, name) => {
    let handleClickButton;
    let buttonName;

    switch(name) {
      case 'edit':
        handleClickButton = this.handleButtonEdit.bind(this, productId);
        buttonName = 'Edit';
        break;
      case 'delete':
        handleClickButton = this.handleButtonDelete.bind(this, productId);
        buttonName = 'Delete';
        break;
      case 'save':
        handleClickButton = this.handleButtonSave.bind(this, productId);
        buttonName = 'Save';
        break;
      case 'cancel':
        handleClickButton = this.handleButtonCancel.bind(this, productId);
        buttonName = 'Cancel';
        break;
      default:
        handleClickButton = null;
        buttonName= '';
    }

    return class extends React.Component {
      render() {
        return (
          <Button
            name={'btn-' + name}
            className={'btn-' + name}
            handleClick={handleClickButton}
            label={buttonName}/>
        );
      }
    }
  }

  render() {
    return (
      <tr>
        {
          this.props.dataColumns.map(col => {
            if (col.name !== 'action') {
              if (!this.props.isEditMode) {
                return (<td key={col.name}>{this.props.product[col.name]}</td>);
              } else {
                return (<td key={col.name}>{this.renderElementByType(col.elementType, col.name)}</td>);
              }
            } else {
              if (!this.props.isEditMode) {
                const EditButton = this.renderButton(Button, this.props.product.id, 'edit');
                const DeleteButton = this.renderButton(Button, this.props.product.id, 'delete');

                return (
                  <td>
                    <EditButton />
                    <DeleteButton />
                  </td>
                );
              } else {
                const SaveButton = this.renderButton(Button, this.props.product.id, 'save');
                const CancelButton = this.renderButton(Button, this.props.product.id, 'cancel');

                return (
                  <td>
                    <SaveButton />
                    <CancelButton />
                  </td>
                );
              }
            }
          })
        }
      </tr>
    );
  }
}

ProductRow.propTypes = {
  product: PropTypes.object.isRequired,
  handleButtonEdit: PropTypes.func.isRequired,
  handleButtonSave: PropTypes.func.isRequired,
  handleButtonDelete: PropTypes.func.isRequired,
  handleChangeCancel:  PropTypes.func
}

ProductRow.defaultProps = {
  handleChangeCancel: null
}

export default ProductRow;
