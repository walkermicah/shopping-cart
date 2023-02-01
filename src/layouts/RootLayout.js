import { Outlet, Link, NavLink } from 'react-router-dom';

import logo from '../img/logo.svg';

import '../styles/layouts/RootLayout.scss';

function RootLayout() {
  return (
    <div className="RootLayout">
      <header>
        <nav className="RootLayout-nav">
          <div className="RootLayout-nav-title">
            <h1>InstaCarrot</h1>
            <img src={logo} alt="logo"></img>
          </div>

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
            <span>3</span>
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
