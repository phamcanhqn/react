import { connect } from 'react-redux'
import ProductApp from '../components'
import { addProduct } from '../actions'

const mapDispatchToProps = dispatch => ({
  handleAddProductAction: newProduct => {
    dispatch(addProduct(newProduct))
  }
})
const ProductAppManage = connect(
  null,
  mapDispatchToProps
)(ProductApp)

export default ProductAppManage
