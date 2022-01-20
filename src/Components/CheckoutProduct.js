import React from 'react';
import "../css/checkoutProduct.css"
function CheckoutProduct({id, image, title, price, rating}) {
  return ( 
  <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="product" />
        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
          {Array(rating).fill().map(() => (
            <p>⭐</p>
          ))}
        </div>
        <button>Remove from basket</button>
        </div>
  </div>
  )
}

export default CheckoutProduct;