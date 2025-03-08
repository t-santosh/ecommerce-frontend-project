import React from 'react';
import Footer from '../sharedComponents/Footer';
import Header from '../sharedComponents/Header';

const HomePage = () => {
  const data = [
    {
      id: '1',
      name: 'Graphs',
      subtitle: 'Check out all the analytics in graphs',
      img: 'images/t-shirt.jpeg',
    },
    {
      id: '2',
      name: 'Sales',
      subtitle: 'Find out how much sales is done',
      img: 'images/makeup_kit.jpg',
    },
    {
      id: '3',
      name: 'Subscriber',
      subtitle: 'This is your total subscriber 500',
      img: 'images/pink_bag.jpg',
    },
    {
      id: '4',
      name: 'Badge',
      subtitle: 'Number of badges users earned',
      img: 'images/pink_high_heels.jpeg',
    },
    {
      id: '5',
      name: 'Graphs',
      subtitle: 'Check out all the analytics in graphs',
      img: 'images/sample_profile_pic.jpeg',
    },
    {
      id: '6',
      name: 'Sales',
      subtitle: 'Find out how much sales is done',
      img: 'images/sample.jpg',
    },
    {
      id: '7',
      name: 'Subscriber',
      subtitle: 'This is your total subscriber 500',
      img: 'images/t-shirt.jpeg',
    },
    {
      id: '8',
      name: 'Badge',
      subtitle: 'Number of badges users earned',
      img: 'images/makeup_kit.jpg',
    },
  ];

  return (
    <div>
      <Header />
      <div className='container vh-100'>
        <div className='row mt-5'>
          {data.map((data) => (
            <div className='col-3'>
              <div key={data.id}>
                <div className='card' style={{ width: '18rem' }}>
                  <img
                    src={data.img}
                    className='card-img-top card-img-bottom'
                    alt='#'
                  />
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
