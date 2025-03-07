import React from 'react';
import HomeHeader from './sharedComponents/HomeHeader';
import Footer from './sharedComponents/Footer';

const Dashboard = () => {
  const data = [
    {
      name: 'Graphs',
      subtitle: 'Check out all the analytics in graphs',
    },
    {
      name: 'Sales',
      subtitle: 'Find out how much sales is done',
    },
    {
      name: 'Subscriber',
      subtitle: 'This is your total subscriber 500',
    },
    {
      name: 'Badge',
      subtitle: 'Number of badges users earned',
    },
  ];
  return (
    <div>
      <HomeHeader />
      <div className='container vh-100'>
        <h3 className='mt-4'>Dashboard</h3>
        <div className='row mt-5'>
          {data.map((data) => (
            <div className='col-3'>
              <div key={data.name}>
                <div className='card' style={{ width: '18rem' }}>
                  <div className='card-body'>
                    <h4>{data.name}</h4>
                    <div className='card-title'>{data.subtitle}</div>
                  </div>
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

export default Dashboard;
