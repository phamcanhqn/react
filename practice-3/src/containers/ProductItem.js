import { connect } from 'react-redux'
import ProductItem from '../components/product-item'
import { 
  saveProduct, 
  editProduct,
  cancelProduct,
  deleteProduct
} from '../actions'

const mapDispatchToProps = dispatch => ({
  handleSaveAction: product => {
    dispatch(saveProduct(product))
  },

  handleEditAction: productId => {
    dispatch(editProduct(productId))
  },

  handleCancelAction: (productId) => {
    dispatch(cancelProduct(productId))
  },

  handleDeleteAction: (productId) => {
    dispatch(deleteProduct(productId))
  },
})

const VisibleProductItem = connect(
  null,
  mapDispatchToProps
)(ProductItem)

export default VisibleProductItem
