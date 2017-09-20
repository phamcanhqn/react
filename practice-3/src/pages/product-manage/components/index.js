import React from 'react'

import { ProductHelpers } from 'helpers/Products'

import ProductFilterForm from 'pages/product-manage/containers/ProductFilter'
//import TableHeaderProduct from 'pages/product-manage/containers/ProductHeader'
import ProductList from 'pages/product-manage/components/product-list'

import { Button } from 'pages/commons/Button'

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
        <ProductList 
          products={props.products} 
          sortData={props.sortData} 
          handleSortClick={props.handleSortClick}
        />
      </table>
    </div>
  )
}

export default ProductApp
