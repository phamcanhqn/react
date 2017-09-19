import React from 'react'
import PropTypes from 'prop-types'

import ProductRow from 'pages/product-manage/containers/ProductItem'

import './styles/ProductList.css'

const ProductList = props => {
  return (
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
  )
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object)
}

ProductList.defaultProps = {
  products: []
}
export default ProductList
