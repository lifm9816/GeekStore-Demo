import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './CartIcon.css'; // Importa tu archivo de estilos
import { Icon } from './Style';

const CartIcon = ({ itemCount }) => {
  return (
    <Icon>
      <span className="icon">
        <FaShoppingCart />
        {itemCount > 0 && <span className="cart-counter">{itemCount}</span>}
      </span>
      <span className="text">Carrito</span>
    </Icon>
  );
};

export default CartIcon;
