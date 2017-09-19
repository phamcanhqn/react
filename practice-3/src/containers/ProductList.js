import { connect } from 'react-redux'
import ProductList from '../components/product-list'

const mapStateToProps = state => ({ 
  products: state.products 
})

const VisibleProductList = connect(
  mapStateToProps
)(ProductList)

export default VisibleProductList
