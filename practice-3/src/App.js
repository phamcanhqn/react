import React, { Component } from 'react'
import ProductAppManage from 'pages/product-manage/containers/ProductApp'

import { Provider } from 'react-redux'
import store from './store/configureStore'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ProductAppManage />
      </Provider>
    );
  }
}

export default App
