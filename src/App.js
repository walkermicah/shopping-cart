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
import Products from './pages/Products';

import './styles/App.scss';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="products" element={<Products />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
