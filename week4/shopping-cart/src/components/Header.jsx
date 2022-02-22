import React from 'react';

const Header = (props) =>{
  return (
    <header className="block row center header">
      <div>
        <a href="#/">
          <h1>Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
        <img className='cartButton' src="https://img.icons8.com/external-icongeek26-outline-colour-icongeek26/64/000000/external-cart-essentials-icongeek26-outline-colour-icongeek26.png" alt="cartBtn"/>{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
      </div>
    </header>
  );
}

export default Header;