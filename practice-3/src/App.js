import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VisibleProductFilter from './containers/ProductFilter'
// import ProductCell from './components/product-cell'
// import ProductItem from './components/product-item'
// import ProductHeader from './components/product-header'
import VisibleProductList from './containers/ProductList'

import { Provider } from 'react-redux'
import store from './store/configureStore'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h2>Product List Management</h2>
          <VisibleProductFilter />
          <table>
            {/* <ProductHeader /> */}
            <VisibleProductList products={[]} />
          </table>
        </div>
      </Provider>
    );
  }
}

export default App
