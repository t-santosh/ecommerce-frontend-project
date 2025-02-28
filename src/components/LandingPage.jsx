import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/landingPage.css';

const LandingPage = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <Link className='navbar-brand ms-5 me-5' href='#'>
            E-Commerce
          </Link>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav me-auto'>
              <li className='nav-item'>
                <Link className='nav-link' href='#'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' href='#'>
                  Features
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link'>Products</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link'>About Us</Link>
              </li>
            </ul>
            <form className='d-flex' role='search'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button className='btn btn-outline-success me-5' type='submit'>
                Search
              </button>
            </form>
            <div className='navbar-nav me-4'>
              <li className='nav-item me-1'>
                <Link className='nav-link' to={'/register'}>
                  Register
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to={'/login'}>
                  Login
                </Link>
              </li>
            </div>
          </div>
        </div>
      </nav>
      <div className='container'>
        {/* Header section */}
        <header></header>
        <main>
          {/* Hero section */}
          <section className='hero'>
            <h1>Welcome to our E-Commerce Store</h1>
            <p>Your one-stop shop for amazing deals</p>
            <Link href='#shop-now' className='cta-button'>
              Shop Now
            </Link>
          </section>
          {/* Other main content */}
          <article>
            <h2>Featured products</h2>
            {/* Product listings */}
          </article>
          <form action='/submit' method='POST'></form>
        </main>
        {/* Footer section */}
        <footer>
          <p>&copy; 2025 One-Stop-Shop. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
