import React from 'react';
import { useSelector } from 'react-redux';
import './CartIcon.css';  

function CartIcon() {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <div className="cart-icon">
      <img src="https://cdn-icons-png.flaticon.com/128/2121/2121815.png" alt="Cart" />
      {totalQuantity > 0 && <span className="badge">{totalQuantity}</span>}
    </div>
  );
}

export default CartIcon;
