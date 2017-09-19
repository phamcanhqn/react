import { connect } from 'react-redux'
import ProductFilter from '../components/product-filter'
import { filterProducts } from '../actions'

const mapDispatchToProps = dispatch => ({
  handleFilterAction: (dataFilter) => {
    dispatch(filterProducts(dataFilter))
  }
})

const ProductFilterForm = connect(
  null,
  mapDispatchToProps
)(ProductFilter)

export default ProductFilterForm
