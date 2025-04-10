import React from 'react';
import Footer from './sharedComponents/Footer';
import Header from './sharedComponents/Header';

const Dashboard = () => {
  const data = [
    {
      id: 1,
      name: 'Graphs',
      subtitle: 'Check out all the analytics in graphs',
    },
    {
      id: 2,
      name: 'Sales',
      subtitle: 'Find out how much sales is done',
    },
    {
      id: 3,
      name: 'Subscriber',
      subtitle: 'This is your total subscriber 500',
    },
    {
      id: 4,
      name: 'Badge',
      subtitle: 'Number of badges users earned',
    },
  ];
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='row'>
          {data.map((data) => (
            <div className='col-3'>
              <div key={data.id}>
                <div className='card card-dashboard' style={{ width: '18rem' }}>
                  <div className='card-body'>
                    <h4>{data.name}</h4>
                    <div className='card-text'>{data.subtitle}</div>
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
