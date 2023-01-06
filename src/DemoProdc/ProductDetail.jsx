import React, { Component } from 'react';

export default class ProductDetail extends Component {
  render() {
    const { name, price, description, image } = this.props.selectedProduct;
    return (
      <div>
        <hr />
        <h1>Thông số kĩ thuật</h1>
        <div className="row">
          <div className="col-6">
            <img src={image} alt="" />
          </div>
          <div className="col-6">
            <table className="table">
              <thead>
                <tr>
                  <th>Tên</th>
                  <th>Giá</th>
                  <th>Mô tả</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{name}</td>
                  <td>{price}</td>
                  <td>{description}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
    )
  }
}
