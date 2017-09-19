import { connect } from 'react-redux'

import ProductApp from 'pages/product-manage/components'
import { addProduct } from 'pages/product-manage/actions'

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  handleAddProductAction: newProduct => {
    dispatch(addProduct(newProduct))
  }
})

const ProductAppManage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductApp)

export default ProductAppManage
