import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Product(props) {
    const { product, onAdd } = props
    return (
        <div className='card'>
            <div className="item-image">
                <img src={product.image} alt={product.name} width={'150px'} height={'120px'} />
            </div>
            <div className="name">{product.name}</div>
            <div className="info">
                <div className="price">Rs.{product.price}</div>
                <i className="bi bi-record-circle" style={{ color: `${product.color}` }}></i>
                <i className="bi bi-cart-plus cart" onClick={() => onAdd(product)}></i>
            </div>
        </div>
    )
}
