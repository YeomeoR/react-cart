import React from 'react';

const Basket = ({ cartItems, onAdd, onRemove }) => {
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const tax = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 40;
  const totalPrice = itemsPrice + tax + shippingPrice;
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div className="col-2">{item.name}</div>
          <div className="col-2">
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
          </div>
          <div className="col-2 text-right">
            {item.qty} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
          {cartItems.length !== 0 && (
              <>
                  <hr></hr>
                  <div className="row">
                      <div className="col-2">Items Price</div>
                      <div className="col-1 text-right">${ itemsPrice.toFixed(2)}</div>
                  </div>
                  <div className="row">
                      <div className="col-2">Tax</div>
                      <div className="col-1 text-right">${ tax.toFixed(2)}</div>
                  </div>
                  <div className="row">
                      <div className="col-2">Shipping</div>
                      <div className="col-1 text-right">${ shippingPrice.toFixed(2)}</div>
                  </div>
                  <div className="row">
                      <div className="col-2"><strong>Total</strong></div>
                      <div className="col-1 text-right">${ totalPrice.toFixed(2)}</div>
                  </div>
                  <hr />
                  <div className="row">
                      <button onClick={() => alert('Checkout')}>Checkout</button>
                  </div>
              </>
          )}
    </aside>
  );
};

export default Basket;
