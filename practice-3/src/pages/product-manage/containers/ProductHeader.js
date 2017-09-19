import { connect } from 'react-redux'

import ProductHeader from 'pages/product-manage/components/product-header'
import { sortProductList } from 'pages/product-manage/actions'

const mapStateToProps = state => ({
  ...state.sortData
})

const mapDispatchToProps = dispatch => ({
  handleSortClick: (sortBy, sortType) => {
    dispatch(sortProductList({sortBy, sortType}))
  }
})

const TableHeaderProduct = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductHeader)

export default TableHeaderProduct
