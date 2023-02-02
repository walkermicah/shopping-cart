import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import RootLayout from './layouts/RootLayout';

import Cart from './components/Cart';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ProductsLayout from './layouts/ProductsLayout';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';

import './styles/App.scss';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products" element={<ProductsLayout />}>
          <Route index element={<ProductList />} />
          <Route path=":productType" element={<ProductList />} />
          <Route path=":productType/:productID" element={<ProductDetails />} />
        </Route>
        <Route path="cart" element={<Cart />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
