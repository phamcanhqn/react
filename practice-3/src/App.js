import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductFilter from './components/product-filter'
import ProductCell from './components/product-cell'
import ProductItem from './components/product-item'
import ProductHeader from './components/product-header'
import ProductList from './components/product-list'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Product List Management</h2>
        <ProductFilter />
        <ProductItem isEditMode={true} product={{
          id: 1502683724901,
          code: 'SM0003515',
          name: 'Iphone 7',
          manufacturer: 'apple',
          description: 'New product of apple in 2017',
          category: 'smartphone',
          price: 800,
          quantity: 100
        }} 
        />
        <ProductHeader />
        <ProductList products={[{
          id: 1502683724901,
          code: 'SM0003515',
          name: 'Iphone 7',
          manufacturer: 'apple',
          description: 'New product of apple in 2017',
          category: 'smartphone',
          price: 800,
          quantity: 100
        }]} />
      </div>
    );
  }
}

export default App
