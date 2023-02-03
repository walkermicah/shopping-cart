import { Outlet, Link, NavLink } from 'react-router-dom';

import logo from '../img/logo.svg';

import '../styles/layouts/RootLayout.scss';

function RootLayout({ nItems }) {
  return (
    <div className="RootLayout">
      <header>
        <nav className="RootLayout-nav">
          <Link to="/" className="RootLayout-nav-title">
            <h1>InstaCarrot</h1>
            <img src={logo} alt="logo"></img>
          </Link>

          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="products">Products</NavLink>
            </li>
            <li>
              <NavLink to="contact">Contact</NavLink>
            </li>
          </ul>

          <Link to="cart" className="RootLayout-nav-link">
            <i className="fa-solid fa-cart-shopping"></i>
            <span>{nItems}</span>
          </Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
