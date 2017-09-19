import React from 'react'

import { ProductHelpers } from '../helpers/Products'

import ProductFilterForm from '../containers/ProductFilter'
import TableHeaderProduct from '../containers/ProductHeader'
import TableBodyProduct from '../containers/ProductList'

import { Button } from './commons/button'

import './styles/ProductApp.css'

const ProductApp = (props) => {
  const handleAddProductAction = () => {
    props.handleAddProductAction(ProductHelpers.createEmptyProduct())
  }
  
  return (
    <div className="products-manage">
      <h2 className="products-title">Product List Management</h2>
      
      <ProductFilterForm />

      <Button
        name="btn-add"
        className="btn-add"
        handleClick={handleAddProductAction}
        label="Add New Product"
      />

      <table className="products-table">
        <TableHeaderProduct />
        <TableBodyProduct />
      </table>
    </div>
  )
}

export default ProductApp
