import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/landingPage.css';
import Footer from './sharedComponents/Footer';
import NavBar from './sharedComponents/NavBar';
import global from '../constants/global';
import TopBar from './sharedComponents/TopBar';

const LandingPage = () => {
  return (
    <div>
      <TopBar />
      <NavBar />
      <div className='landing-container container'>
        <div className='landing-container-row row'>
          <div className='col'>
            <header className='landing-header'>
              <h1>Welcome to {global.brandName} online store</h1>
              <p>Your one-stop shop with amazing deals</p>
            </header>
          </div>
        </div>
        <main className='landing-main'>
          <article>
            <h4>Featured products</h4>
            {/* Row of featured products */}
            <div className='row'>
              <div className='col-sm-3 mb-3 mb-sm-0'>
                <div className='card'>
                  <img className='card-img' src='/images/pink_bag.jpg' alt='' />
                </div>
              </div>
              <div className='col-sm-3'>
                <div className='card'>
                  <img className='card-img' src='/images/t-shirt.jpeg' alt='' />
                </div>
              </div>
              <div className='col-sm-3'>
                <div className='card'>
                  <img
                    className='card-img'
                    src='/images/pink_high_heels.jpeg'
                    alt=''
                  />
                </div>
              </div>
              <div className='col-sm-3'>
                <div className='card'>
                  <img
                    className='card-img'
                    src='/images/makeup_kit.jpg'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </article>
          <div className='row mt-5'>
            <div className='col'>
              <section className='landing-shop-now-btn'>
                <Link className='btn btn-primary' to={'/login'}>
                  Shop Now
                </Link>
              </section>
            </div>
          </div>
          <form action='/submit' method='POST'></form>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
