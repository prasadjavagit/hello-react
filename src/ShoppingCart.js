import { useState } from 'react';
const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = parseFloat(e.target.price.value);
    const newItem = {
      id: Date.now(),
      name: name,
      price: price,
    };
    setCartItems([...cartItems, newItem]);
    e.target.reset();
  };
  const removeFromCart = itemId => {
    const updatedItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedItems);
  };
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };
  return (
    <>
      <h1>Shopping Cart</h1>
      <form onSubmit={addToCart}>
        <input type="text" name="name" placeholder="Item Name" required />
        <input type="number" name="price" placeholder="Item Price" required />
        <button type="submit">Add To Cart</button>
      </form>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button
              className="btn btn-primary"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p>Total Price: ${calculateTotalPrice()}</p>
      <button onClick={() => setCartItems([])}>Empty Cart</button>
    </>
  );
};
export default ShoppingCart;
