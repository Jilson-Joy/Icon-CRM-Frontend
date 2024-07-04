


import React, { useRef, useState, useEffect } from 'react';
import { UserRound, Settings, LogOut } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './redux/dataSlice';
import { Link } from 'react-router-dom';

function AvatarProfile() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.items);
  const status = useSelector((state) => state.data.status);
  const error = useSelector((state) => state.data.error);

  const Menus = [
    { label: 'Profile', icon: <UserRound />, href: '/components/profilemodal/ProfileModal' },
    { label: 'Settings', icon: <Settings />, href: '/settings' },
    { label: 'Logout', icon: <LogOut />, href: '/authentication/sign-in', action: handleLogOut }
  ];

  const [open, setOpen] = useState(false);

  const menuRef = useRef();
  const imgRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !imgRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (status === 'succeeded') {
      console.log('Fetched data:', data);
    } else if (status === 'failed') {
      console.log('Error fetching data:', error);
    }
  }, [status, data, error]);

  function handleLogOut() {
    localStorage.clear();
  }

  return (
    <div className="h-screen flex justify-center pt-14">
      <div className="relative">
        <img
          ref={imgRef}
          onClick={() => setOpen(!open)}
          src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg"
          alt="User"
          className="h-10 w-10 object-cover border-4 border-gray-400 rounded-full cursor-pointer"
        />

        {open && (
          <div
            ref={menuRef}
            className="bg-white shadow-lg"
            style={{
              backgroundColor: 'white',
              padding: '10px',
              width: '200px',
              borderRadius: '25px',
              position: 'absolute',
              zIndex: '1',
              right: '5px',
              margin: '2px',
              boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
            }}>
            <ul>
              {Menus.map((menu) => (
                <li
                  onClick={() => {
                    if (menu.action) menu.action();
                    setOpen(false);
                  }}
                  style={{
                    padding: '5px',
                    cursor: 'pointer',
                    borderRadius: '10px',
                    display: 'flex'
                  }}
                  className="text-lg rounded hover:bg-blue-100"
                  key={menu.label}>
                  {menu.href ? (
                    <Link to={menu.href} className="flex items-center w-full">
                      {menu.icon}
                      <span className="ml-2">{menu.label}</span>
                    </Link>
                  ) : (
                    <div className="flex items-center w-full">
                      {menu.icon}
                      <span className="ml-2">{menu.label}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default AvatarProfile;

