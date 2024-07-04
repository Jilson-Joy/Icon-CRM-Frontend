import type { FC } from 'react';
import { DarkThemeToggle, Navbar } from 'flowbite-react';
import AvatarProfile from './AvatarProfile';
import { Bell, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const ExampleNavbar: FC = function () {
  const navigate = useNavigate();

  return (
    <Navbar fluid className="fixed top-0 left-0 w-full p-3 z-50 shadow-sm">
      <div className="w-full lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="flex items-center">
              <ArrowLeft className="mr-2" />
            </button>
            <Link to={'/'}>
              <Navbar.Brand>
                {/* <img alt="" src="https://strongpower.ca/wp-content/uploads/2021/08/Hitachi-logo.png" className="ml-9 h-6 sm:h-8" /> */}
                <span className="ml-2 self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                  Icones CRM
                </span>
              </Navbar.Brand>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Bell />
            {/* <NotificationBadge/> */}
            <AvatarProfile />
            <DarkThemeToggle />
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default ExampleNavbar;

