import { connect } from 'react-redux'

import ProductApp from 'pages/product-manage/components'

import {
  addProduct,
  sortProductList 
} from 'pages/actions'

const mapStateToProps = state => ({
  sortData: state.sortData,
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  handleAddProductAction: newProduct => {
    dispatch(addProduct(newProduct))
  },

  handleSortClick: (sortBy, sortType) => {
    dispatch(sortProductList({sortBy, sortType}))
  }
})

const ProductAppManage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductApp)

export default ProductAppManage
