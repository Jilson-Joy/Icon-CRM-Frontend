import React, { useEffect, useState } from 'react';
import './ProfileCard.css';

function ProfileCard() {
  const [userData, setUserData] = useState({ useremail: '', mobile: '', designation: '' });

  useEffect(() => {
    const storedUserData = localStorage.getItem('user');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  return (
    <div className="container">
      <div className="profileCard">
        <div className="profileImg">
          <img
            src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Profile pic"
          />
        </div>
        <div className="profileDetails">
          <p>Email: {userData.useremail}</p>
          {userData.mobile && <p>Mobile: {userData.mobile}</p>}
          <p>Designation: {userData.designation}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;


