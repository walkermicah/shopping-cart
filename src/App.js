import { useState } from 'react';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import RootLayout from './layouts/RootLayout';
import ProductsLayout from './layouts/ProductsLayout';

import Contact from './pages/Contact';
import Error from './pages/Error';
import Home from './pages/Home';

import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart'; // make a page

import './styles/App.scss';

function App() {
  const [cart, setCart] = useState([]);

  const totalItems = cart.reduce(
    (total, product) => product.quantity + total,
    0
  );

  const addToCart = (product) => {
    setCart((c) => [
      ...c,
      { id: product.id, quantity: 1, price: product.price },
    ]);
  };

  const removeFromCart = (product) => {
    setCart((c) => c.filter((p) => p.id !== product.id));
  };

  const editQuantity = (product, change) => {
    setCart((c) =>
      c.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + change } : p
      )
    );
  };

  const increaseQuantity = (product) => editQuantity(product, +1);

  const decreaseQuantity = (product) => {
    const [itemToDecrease] = cart.filter((p) => product.id === p.id);
    if (itemToDecrease.quantity <= 1) {
      removeFromCart(product);
    } else {
      editQuantity(product, -1);
    }
  };

  const inputQuantity = (product, newQuantity) => {
    if (newQuantity < 0) return;
    setCart((c) =>
      c.map((p) => (p.id === product.id ? { ...p, quantity: +newQuantity } : p))
    );
  };

  const cartMethods = {
    add: addToCart,
    increase: increaseQuantity,
    decrease: decreaseQuantity,
    acceptInput: inputQuantity,
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout nItems={totalItems} />}
        errorElement={<Error />}
      >
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products" element={<ProductsLayout />}>
          <Route
            index
            element={<ProductList cart={cart} cartMethods={cartMethods} />}
          />
          <Route
            path=":productType"
            element={<ProductList cart={cart} cartMethods={cartMethods} />}
          />
          <Route
            path=":productType/:productID"
            element={<ProductDetails cart={cart} cartMethods={cartMethods} />}
          />
        </Route>
        <Route path="cart" element={<Cart />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
