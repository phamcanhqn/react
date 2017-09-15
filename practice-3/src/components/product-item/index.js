import React from 'react';
import PropTypes from 'prop-types';

import {ProductHelpers} from '../../helpers/Products';
import ProductCell from '../product-cell';
import './styles/ProductItem.css';
import { visualizeRender } from 'react-global-render-visualizer'

if (process.env.NODE_ENV !== 'production') {
  React.Component = visualizeRender()(React.Component);
  React.PureComponent = visualizeRender()(React.PureComponent);
}

class ProductItem extends React.Component {
  columns = ProductHelpers.loadColumns()

  dynamicProps = {
    codeRef: el => {this.codeElement = el},
    nameRef: el => {this.nameElement = el},
    descriptionRef: el => {this.descriptionElement = el},
    categoryRef: el => {this.categoryElement = el},
    manufacturerRef: el => {this.manufacturerElement = el},
    quantityRef: el => {this.quantityElement = el},
    priceRef: el => {this.priceElement = el}
  }

  handleClickButton = (id, name) => {
    switch (name) {
      case 'save':
        const productData = this.collectData()
        this.props.handleSaveAction({id, ...productData})
        break
      case 'edit':
        this.props.handleEditAction(id)
        this.bindingDataToElement()
        break
      case 'cancel':
        break
      case 'delete':
        break
      default:
        break
    }
  }

  collectData = () => {
    let data={}
    this.columns.map(col => {
      if (col.name !== 'action')
        return data[col.name] = this[col.name + 'Element'].value
      return null
    })
    
    return data
  } 
  
  bindingDataToElement = () => {
    var objectData = this.props.product
    for (let property in objectData) {
      if (objectData.hasOwnProperty(property)) {
          if ( property !== 'id') {
            console.log('type of',typeof(this))
            console.log('fffff', this, property + 'Element', this['codeElement'])
            
            //this[property + 'Element'].value = objectData[property]
          }
      }
  }
  }

  render(){
    return (
      <tr>
        {
          this.columns.map(col => {
            const cellAttributes = {
              ...col,
              isEditMode: this.props.product.isEditMode
            }
  
            const cellData = {
              productId: this.props.product.id
            }
  
            const cellActions = {
              handleButtonClick: this.handleClickButton
            }

            return (
              <ProductCell
                {...this.dynamicProps}
                key={col.name}
                cellAttributes={cellAttributes}
                cellData={cellData}
                cellActions={cellActions}
                value={this.props.product[col.name]}
              />
            );
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

export default ProductItem;
