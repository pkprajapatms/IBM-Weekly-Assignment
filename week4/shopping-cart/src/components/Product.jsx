import React from 'react';
import './Product.css';

const Product = (props) => {
  const { product, onAdd } = props;
  return (
    <div className='productdiv'>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>₹ {product.price}.00</div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}

export default Product;