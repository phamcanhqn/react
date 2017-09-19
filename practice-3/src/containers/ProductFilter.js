import { connect } from 'react-redux'
import ProductFilter from '../components/product-filter'
import { filterProducts } from '../actions'
// const mapStateToProps = state => {
//   console.log('fffffffffffffffffffffff', state)
//   return {
//     filterData: state.filterData
//   }
// }

const mapDispatchToProps = dispatch => ({
  handleFilterAction: (dataFilter) => {
    dispatch(filterProducts(dataFilter))
  }
})

const VisibleProductFilter = connect(
  null,
  mapDispatchToProps
)(ProductFilter)

export default VisibleProductFilter
