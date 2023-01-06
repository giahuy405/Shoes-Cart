import React, { Component } from 'react';
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import data from "../Data/dataShoes.json";
import Cart from './Cart';
// import { withSwal } from 'react-sweetalert2';
class Home extends Component {
    products = data;
    state = {
        selectedProduct: null,
        cart: []
    }
    setSelectedProduct = (val) => {
        this.setState({
            selectedProduct: val,
        })
    }
    addToCart = (item) => {
        const cartItem = { product: item, quantity: 1 };
        const cloneCart = [...this.state.cart];
        const foundItem = cloneCart.find(cartItem => cartItem.product.id === item.id)
        foundItem ? foundItem.quantity++ : cloneCart.push(cartItem);
        this.setState({
            cart: cloneCart
        }, () => console.log(this.state.cart));
    }
    deleteCartItem = (id) => {
        const cloneCart = [...this.state.cart];
        const index = cloneCart.findIndex(cartItem=>{
            return cartItem.product.id === id;
        });
        if(index===-1) return;
        cloneCart.splice(index,1);
        this.setState({
            cart:cloneCart
        })
        this.swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
    }
    increaseQuantity = (cartItem) => {
        const cloneCart = [...this.state.cart];
        if (cartItem.quantity < cartItem.product.quantity) {
            cartItem.quantity++;
        }
        this.setState({
            cart: cloneCart
        })
    }
    decreaseQuantity = (cartItem) => {

        const cloneCart = [...this.state.cart];
        cartItem.quantity === 1 ? cartItem.quantity = 1 : cartItem.quantity--;
        this.setState({
            cart: cloneCart
        })
    }
    checkout = () => {
        this.setState({
            cart: []
        },()=> {alert('Thanh toán thành công')});
       
    }
    render() {
        return (
            <div className='container'>
                <h1>Shoes shop</h1>
                <button className='btn btn-info'
                    data-bs-toggle="modal" data-bs-target="#cartModal"
                >
                    Giỏ hàng (0)
                </button>
                <ProductList addToCart={this.addToCart} products={this.products} setSelectedProduct={this.setSelectedProduct} />
                {this.state.selectedProduct && <ProductDetail selectedProduct={this.state.selectedProduct} />}
                <Cart
                deleteCartItem={this.deleteCartItem}
                    checkout={this.checkout}
                    decreaseQuantity={this.decreaseQuantity}
                    increaseQuantity={this.increaseQuantity}
                    cart={this.state.cart} />
            </div>
        );
    }
}
export default Home;

