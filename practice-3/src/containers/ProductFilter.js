import { connect } from 'react-redux'
import ProductFilter from '../components/product-filter'
import { changeFilterData } from '../actions'
import { filterProducts } from '../actions'
const mapStateToProps = state => {
  console.log('fffffffffffffffffffffff', state)
  return {
    products: state.products,
    filterData: state.filterData
  }
}

const mapDispatchToProps = dispatch => ({
  handleFilterAction: (dataFilter) => {
    dispatch(filterProducts(dataFilter))
  }
})

const VisibleProductFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductFilter)

export default VisibleProductFilter
