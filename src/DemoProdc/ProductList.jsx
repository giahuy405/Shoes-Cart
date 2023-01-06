import React, { Component } from 'react';
import Product from './Product';
class ProductList extends Component {
  renderProductList = () =>
    this.props.products.map(item =>
      <div className='col-3 mt-3' key={item.id}>
        <Product item={item} addToCart={this.props.addToCart} setSelectedProduct={this.props.setSelectedProduct}/> 
      </div>
    )
  render() {
    return (
      <div className='row'> 
        {this.renderProductList()}
      </div>
    );
  }
}
export default ProductList;