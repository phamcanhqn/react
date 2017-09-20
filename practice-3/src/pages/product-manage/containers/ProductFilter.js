import { connect } from 'react-redux'
import ProductFilter from 'pages/product-manage/components/product-filter'
import { filterProducts } from 'pages/actions'

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
