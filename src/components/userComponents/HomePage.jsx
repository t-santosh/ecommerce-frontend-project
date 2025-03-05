import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../sharedComponents/Footer';
import HomeHeader from '../sharedComponents/HomeHeader';
import { getUserProfile } from '../../api/userApi';
import { setUser } from '../../store/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const HomePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserProfile();
        dispatch(setUser(data.user));
      } catch (error) {
        console.error('Error fetching user data: ', error);
      }
    };
    fetchUserData();
  }, [dispatch]);

  return (
    <div>
      <HomeHeader />
      <div className='container' style={{ textAlign: 'center' }}>
        <h1>
          Good Morning <b>{user.first_name}</b>
        </h1>
        <h4>Welcome to {global.brandName} home page</h4>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
