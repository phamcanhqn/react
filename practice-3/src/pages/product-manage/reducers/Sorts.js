import {
  SORT_PRODUCT_LIST
} from 'pages/actions'

const sortData = (state = {}, action) => {
  switch (action.type) {
    // Handle sort action
    case SORT_PRODUCT_LIST:
      return {
        ...action.sortData
      }
      
    default:
      return state
  }
}

export default sortData
