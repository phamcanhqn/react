import React, { Component } from 'react'

import { ProductHelpers } from '../helpers/Products'
import VisibleProductFilter from '../containers/ProductFilter'
// import ProductCell from './components/product-cell'
// import ProductItem from './components/product-item'
import VisibleHeader from '../containers/ProductHeader'
import VisibleProductList from '../containers/ProductList'
import { Button } from './commons/button'

const ProductApp = (props) => {
  const handleAddProductAction = () => {
    props.handleAddProductAction(ProductHelpers.createEmptyProduct())
  }
  return (
    <div className="products-manage">
      <h2>Product List Management</h2>
      
      <VisibleProductFilter />
      <Button
        name="btn-add"
        className="btn-add"
        handleClick={handleAddProductAction}
        label="Add New Product"
      />
      <table className="products-table">
        <VisibleHeader />
        <VisibleProductList />
      </table>
    </div>
  )
}

export default ProductApp
