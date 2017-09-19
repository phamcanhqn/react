import React, { Component } from 'react';
import './App.css';
// import VisibleProductFilter from './containers/ProductFilter'
// // import ProductCell from './components/product-cell'
// import ProductApp from './components'
// import VisibleHeader from './containers/ProductHeader'
import ProductAppManage from './containers/ProductApp'

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
