import React, { useEffect, useState } from 'react';
import NavbarSidebarLayout from '../../layouts/navbar-sidebar';
import './ProfileModal.css';
import { Link } from 'react-router-dom';

function ProfileModal() {
  const [userData, setUserData] = useState({
    userid: '',
    username: '',
    useremail: '',
    mobile: '',
    designation: ''
  });

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('user'));
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="modal_container">
        <div className="modal_box">
          <div className="modal_profile">
            <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.672697106.1717113600&semt=ais_user" alt="profile" />
          </div>

          <div className='input_profile_data'>
            <div className='display_data'>
              <label htmlFor="">User Id:</label>
              <input type="text" value={userData.userid} readOnly />
            </div>
            <div className='display_data'>
              <label htmlFor="">User Name:</label>
              <input type="text" value={userData.username} readOnly />
            </div>
            <div className='display_data'>
              <label htmlFor="">User Email:</label>
              <input type="text" value={userData.useremail} readOnly />
            </div>
            <div className='display_data'>
              <label htmlFor="">Mobile:</label>
              <input type="text" value={userData.mobile} readOnly />
            </div>
            <div className='display_data'>
              <label htmlFor="">Designation:</label>
              <input type="text" value={userData.designation} readOnly />
            </div>
          </div>

          <div className='profile_back_Button'>
            <Link to={'/'}><button>Back</button></Link>
          </div>

        </div>
      </div>
    </NavbarSidebarLayout>
  );
}

export default ProfileModal;
