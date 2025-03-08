import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserProfile } from '../../api/userApi';
import Header from '../sharedComponents/Header';
import Footer from '../sharedComponents/Footer';
import '../../assets/styles/profile.css';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (!user) {
      navigate('/');
    } else if (!user.id) {
      dispatch(getUserProfile());
    }
  }, [dispatch, user, navigate]);

  if (!user) {
    return <navigate to={'/'} />;
  }
  return (
    <div>
      <Header />
      <div className='container mt-5 vh-100'>
        <div className='row'>
          <div className='col-lg-5'>
            <div className='card shadow-lg'>
              <div className='row'>
                <div className='col-4 mt-4'>
                  <img
                    src='images/arush.jpeg'
                    alt='User Avatar'
                    className='profile-img-top'
                  />
                </div>
              </div>
              <div className='card-body'>
                <div className=' row user-name mt-4 mb-4 '>
                  <div className='col-md-auto'>
                    <b>{`${user.first_name + ' ' + user.last_name}`}</b>
                  </div>
                </div>
                <div className='row mb-4'>
                  <div className='col-3'>Active</div>
                  <div className='col-4'>Subscribed</div>
                  <div className='col-3'>Badges</div>
                </div>
                <div className='user-info mb-4'>
                  <ul>
                    <li>
                      Role: <b>{user.isAdmin ? 'Admin' : 'User'}</b>
                    </li>
                    <li>
                      Gender: <b>Male</b>
                    </li>
                    <li>
                      Contact: <b>0446xxxxxxx</b>
                    </li>
                    <li>
                      Stree address: <b>Some random address</b>
                    </li>
                    <li>
                      State: <b>ACT</b>
                    </li>
                    <li>
                      Country: <b>Australia</b>
                    </li>
                    <li>
                      Nationality: <b>Australian</b>
                    </li>
                  </ul>
                </div>
                <div className='d-flex justify-content-center'>
                  <button className='btn btn-sm btn-outline-primary'>
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
