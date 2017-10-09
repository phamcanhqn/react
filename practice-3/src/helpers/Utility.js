import _ from 'lodash'

export const filterCollection = (filterData, collection) => {
  _.forOwn(filterData, (value, key) => {
    if (value) {
      collection = _.filter(collection, item=> {
        return item[key].toString().indexOf(value) !== -1;
      })
    }
  })

  return collection
}

export const sortCollection = ({ sortBy, sortType }, collection) => {
  let collectionSorted = _.sortBy(collection, item => {
    return item[sortBy]
  })

  return sortType === 'asc-sort' ? collectionSorted : collectionSorted.reverse()
}

export const findDataByIdCollection = (id, collection) => {
  return _.find(collection, item => {
    return item.id === id
  })
}

export const findIndexByIdCollection = (id, collection) => {
  return _.findIndex(collection, item => {
    return item.id === id
  })
}
