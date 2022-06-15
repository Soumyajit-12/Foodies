import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Cart(props) {
    const {cartItems, onAdd , onRemove, onDelete} = props;
    var totalPrice = 0;
    for (let i = 0; i < cartItems.length; i++) {
        totalPrice = totalPrice + cartItems[i].qty * cartItems[i].price;
    }
  return (
    <div className='CartBox'>
        <h2>Cart Items</h2>
        <div className='row'>
            {cartItems.length === 0 && <div>Cart is Empty</div>}
            {cartItems.map((item) => (
                <div key={item.id} className='Cart-Item'>
                    <div className="Item-Info">
                        {/* <img src={`${props.image}`} width={'100px'} alt="Item-Image" /> */}
                        <span>{item.name}</span>
                    </div>
                    <div className="quantity">
                        <i className="bi bi-plus-circle" id='add' onClick={() => onAdd(item)}></i>
                        <span>{item.qty}</span>
                        <i className="bi bi-dash-circle" id='minus' onClick={() => onRemove(item)}></i>
                    </div>
                    <div className='Delete-Item'><i className="bi bi-trash3-fill" id="delete" onClick={() => onDelete(item)}></i></div>
                    <div className="cost">
                        <p>Rs.<span>{item.qty * item.price}</span></p>
                    </div>
                </div>
            ))}
        </div>
        {cartItems.length !== 0 && (
            <>
            <div className="checkout row" onClick={() => window.location.reload(false)}>
                <h3>Checkout</h3>
            </div>
            <div className="total">
                <h3>Total :</h3>
                <p>Rs. <span>{totalPrice}</span></p>
            </div>
            </>
        )}
    </div>
  )
}