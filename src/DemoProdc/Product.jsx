import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    const { name, image, price,id } = this.props.item;
    return (
      <div className="card p-2">
        <img src={image} alt="" />
        <h5>{name}</h5>
        <p>${price}</p>
        <div className="d-flex">
          <button
            className='btn btn-info me-4'
           
            onClick={() => this.props.setSelectedProduct(this.props.item)}
          >
            Chi tiết
          </button>
          <button
            onClick={() => { this.props.addToCart(this.props.item) }}
            className='btn btn-success'>
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    )
  }
}
