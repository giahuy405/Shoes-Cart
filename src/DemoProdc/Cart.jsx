import React, { Component } from 'react';
import Product from './Product';

class Cart extends Component {
    countTotalAmount = () => {
            return this.props.cart.reduce((preVal,currentVal)=>{
                return preVal + currentVal.quantity * currentVal.product.price;
            },0)
    }
    renderCart = () => {
        // const { product, quantity } = this.props.cart;
        if (this.props.cart.length === 0) {
            return (
                <div className="modal fade" id="cartModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Giỏ hàng</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body p-5">
                                <h2>Bạn chưa thêm sản phẩm nào vào giỏ hàng</h2>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="modal fade" id="cartModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Giỏ hàng</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <table className="table table-striped text-center " style={{ lineHeight: "60px" }}>
                                    <thead>
                                        <tr>
                                            <th>Mã hàng</th>
                                            <th>Hình ảnh</th>
                                            <th>Tên</th>
                                            <th>Số lượng</th>
                                            <th>Đơn giá</th>
                                            <th>Thành tiền</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.cart.map(cartItem => {
                                            return (
                                                <tr key={cartItem.product.id}>
                                                    <td>{cartItem.product.id}</td>
                                                    <td>
                                                        <img src={cartItem.product.image} alt={cartItem.product.name} width={60} />
                                                    </td>
                                                    <td>{cartItem.product.name}</td>
                                                    <td>
                                                        <button className="btn btn-info mx-2"
                                                            onClick={() => this.props.decreaseQuantity(cartItem)}>
                                                            -
                                                        </button>
                                                        {cartItem.quantity}
                                                        <button className="btn btn-info mx-2"
                                                            onClick={() => { this.props.increaseQuantity(cartItem) }}
                                                        >
                                                            +
                                                        </button>
                                                    </td>
                                                    <td>${cartItem.product.price}</td>
                                                    <td>${cartItem.product.price*cartItem.quantity}</td>
                                                    <td>
                                                        <button     
                                                        className="btn btn-danger"
                                                        onClick={()=>{
                                                            this.props.deleteCartItem(cartItem.product.id)
                                                        }}
                                                        >
                                                            Xóa
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                                <h2>Tổng tiền:${this.countTotalAmount()}</h2>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                <button type="button" className="btn btn-primary"
                                    onClick={() => this.props.checkout()}
                                >Thanh toán</button>
                            </div>

                        </div>
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                {this.renderCart()}
            </div>

        );
    }
}

export default Cart;