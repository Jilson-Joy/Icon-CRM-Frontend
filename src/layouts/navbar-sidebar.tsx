import { useState, type FC, type PropsWithChildren, useEffect } from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import { MdMenu } from 'react-icons/md';
// import './navbar-sidebar.css';
interface NavbarSidebarLayoutProps {
  isFooter?: boolean;
}

const NavbarSidebarLayout: FC<PropsWithChildren<NavbarSidebarLayoutProps>> = function ({
  children,
  isFooter = true
}) {
  const isMobile = () => window.innerWidth <= 985;
  const [isSidebarVisible, setIsSidebarVisible] = useState(!isMobile());
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    if (!isMobile() && !isSidebarVisible) {
      setIsSidebarVisible(true); // Show sidebar on desktop if hidden on mobile
    }
  }, [isMobile, isSidebarVisible]);
  return (
    <>
      <div>
        <Navbar />
        <button
          className="fixed top-0 left-0 z-50 m-4 lg:hidden lg:hidden" // Position the button on the top left corner for mobile view
          onClick={toggleSidebar}>
          <MdMenu size={24} />
        </button>
      </div>
      <div className="flex items-start pt-16">
        {isSidebarVisible && <Sidebar />}
        <MainContent isFooter={isFooter}>{children}</MainContent>
      </div>
    </>
  );
};

const MainContent: FC<PropsWithChildren<NavbarSidebarLayoutProps>> = function ({
  children,
  isFooter
}) {
  return (
    <main className="relative h-full w-full overflow-y-auto bg-gray-50 dark:bg-gray-900 lg:ml-64">
      {children}
      {isFooter && (
        <div className="mx-4 mt-4">
          <MainContentFooter />
        </div>
      )}
    </main>
  );
};

const MainContentFooter: FC = function () {
  return (
    <>
      <p className="my-8 text-center text-sm text-gray-500 dark:text-gray-300">
        &copy; 2019-2024 MinuteDesigns. All rights reserved.
      </p>
    </>
  );
};

export default NavbarSidebarLayout;
