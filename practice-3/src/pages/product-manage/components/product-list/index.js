import React from 'react'
import PropTypes from 'prop-types'

import ProductRow from 'pages/product-manage/containers/ProductItem'
import ProductHeader from 'pages/product-manage/components/product-header'

import './styles/ProductList.css'

const ProductList = props => {
  return (
    <table className="products-table">
      <ProductHeader 
        sortData={props.sortData} 
        handleSortClick={props.handleSortClick}
      />
      
      <tbody>
        {
          !props.products.length && 
          <tr>
            <td colSpan="8" className="no-found-message">No data found</td>
          </tr>
        }
        { 
          props.products.map((product) => {
            return <ProductRow key={product.id} product={product}/>
          })
        }
      </tbody>
    </table>
  )
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object)
}

ProductList.defaultProps = {
  products: []
}
export default ProductList
