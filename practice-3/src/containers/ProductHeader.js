import { connect } from 'react-redux'
import ProductHeader from '../components/product-header'
import { sortProductList } from '../actions'

const mapStateToProps = state => ({
  ...state.sortData
})

const mapDispatchToProps = dispatch => ({
  handleSortClick: (sortBy, sortType) => {
    dispatch(sortProductList({sortBy, sortType}))
  }
})

const VisibleHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductHeader)

export default VisibleHeader
