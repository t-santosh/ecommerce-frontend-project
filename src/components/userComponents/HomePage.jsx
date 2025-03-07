import React from 'react';
import Footer from '../sharedComponents/Footer';
import HomeHeader from '../sharedComponents/HomeHeader';

const HomePage = () => {
  const data = [
    {
      name: 'Graphs',
      subtitle: 'Check out all the analytics in graphs',
      img: 'images/t-shirt.jpeg',
    },
    {
      name: 'Sales',
      subtitle: 'Find out how much sales is done',
      img: 'images/makeup_kit.jpg',
    },
    {
      name: 'Subscriber',
      subtitle: 'This is your total subscriber 500',
      img: 'images/pink_bag.jpg',
    },
    {
      name: 'Badge',
      subtitle: 'Number of badges users earned',
      img: 'images/pink_high_heels.jpeg',
    },
    {
      name: 'Graphs',
      subtitle: 'Check out all the analytics in graphs',
      img: 'images/sample_profile_pic.jpeg',
    },
    {
      name: 'Sales',
      subtitle: 'Find out how much sales is done',
      img: 'images/sample.jpg',
    },
    {
      name: 'Subscriber',
      subtitle: 'This is your total subscriber 500',
      img: 'images/t-shirt.jpeg',
    },
    {
      name: 'Badge',
      subtitle: 'Number of badges users earned',
      img: 'images/makeup_kit.jpg',
    },
  ];

  return (
    <div>
      <HomeHeader />
      <div className='container vh-100'>
        <div className='row mt-5'>
          {data.map((data) => (
            <div className='col-3'>
              <div key={data.name}>
                <div className='card' style={{ width: '18rem' }}>
                  <img src={data.img} class='card-img-top' alt='#' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
