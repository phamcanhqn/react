import { connect } from 'react-redux'
import ProductList from '../components/product-list'

const mapStateToProps = state => ({ 
  products: state.products 
})

const TableBodyProduct = connect(
  mapStateToProps
)(ProductList)

export default TableBodyProduct
