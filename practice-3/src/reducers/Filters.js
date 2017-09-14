import {
  CHANGE_FILTER_DATA,
  ADD_PRODUCT,
  CHANGE_PRODUCT_DATA,
  SAVE_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT
} from './../actions'

const filterData = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_FILTER_DATA:
      return {
        ...state,
        [action.fieldName]: action.newValue
      }

    default:
      return state;
  }
}

export default filterData
