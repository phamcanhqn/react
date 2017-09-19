import React from 'react'
import PropTypes from 'prop-types'

import {ProductHelpers} from 'helpers/Products'
import ProductCell from 'pages/product-manage/components/product-cell'

import './styles/ProductItem.css'

import { visualizeRender } from 'react-global-render-visualizer'

if (process.env.NODE_ENV !== 'production') {
  React.Component = visualizeRender()(React.Component);
  React.PureComponent = visualizeRender()(React.PureComponent);
}

class ProductItem extends React.Component {
  // Get columns data 
  columns = ProductHelpers.loadColumns()

  /**
   * Check sort type when user click on header of table
   * Return sort type
   * @param {String} id
   * @param {Strings} sortIcon 
  */
  handleClickButton = (id, name) => {
    switch (name) {
      case 'save':
        const productData = this.collectData()
        if (this.validateDataObject(productData))
          this.props.handleSaveAction({id, ...productData})
        break

      case 'edit':
        this.props.handleEditAction(id)
        break

      case 'cancel':
        this.props.handleCancelAction(id)
        break

      case 'delete':
        this.props.handleDeleteAction(id)
        break

      default:
        break
    }
  }

  /**
   * Collect data input on product row
   * @return {Object} product data 
  */
  collectData = () => {
    let data={}

    this.columns.map(col => {
      if (col.name !== 'action') {
        return data[col.name] = this[col.name + 'Element'].value
      }

      return null
    })
    
    return data
  }

  /**
   * Validate product data
   * @param {object} objectData
   * @return {bool}
  */
  validateDataObject = objectData => {
    for (let property in objectData) {
      if (objectData.hasOwnProperty(property)) {
        if (!objectData[property] || !objectData[property].trim()) {
          let element = this[property + 'Element']

          //highlight required field and focus on it
          element.focus()
          element.classList.add('input-error')

          return false
        }
      }
    }
    return true
  }

  render(){
    return (
      <tr className="product-item">
        {
          this.columns.map(col => {
            // Get cell attributes
            const cellAttributes = {
              ...col,
              isEditMode: this.props.product.isEditMode
            }
            
            // Get cell data
            const cellData = {
              productId: this.props.product.id
            }
            
            // Get cell actions
            const cellActions = {
              handleButtonClick: this.handleClickButton
            }

            return (
              <ProductCell
                key={col.name}
                refElement={el => {this[col.name + 'Element'] = el}}
                cellAttributes={cellAttributes}
                cellData={cellData}
                cellActions={cellActions}
                value={
                  this.props.product[col.name] ? 
                  this.props.product[col.name].toString() : 
                  null
                }
              />
            )
          })
        }
      </tr>
    )
  } 
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  handleButtonClickOnRow:  PropTypes.func
}

ProductItem.defaultProps = {
  handleChangeCancel: null
}

export default ProductItem
