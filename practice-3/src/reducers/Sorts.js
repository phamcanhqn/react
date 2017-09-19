import {
  SORT_PRODUCT_LIST
} from './../actions'

const sortData = (state = {}, action) => {
  switch (action.type) {
    case SORT_PRODUCT_LIST:
      return {
        ...action.sortData
      }
      
    default:
      return state;
  }
}

export default sortData
