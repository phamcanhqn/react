import React from 'react'
import PropTypes from 'prop-types'

import ProductRow from 'pages/product-manage/containers/ProductItem'
import ProductHeader from 'pages/product-manage/components/product-header'
import Perf from 'react-addons-perf'; // ES6
import './styles/ProductList.css'
Perf.start()
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

Perf.stop()
Perf.getLastMeasurements()
Perf.printInclusive(Perf.getLastMeasurements())

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object)
}

ProductList.defaultProps = {
  products: []
}
export default ProductList
