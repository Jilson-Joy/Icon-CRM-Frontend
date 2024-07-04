import React from 'react';
import NavbarSidebarLayout from '../../../../layouts/navbar-sidebar';
import './TivAccuracy.css';
import { Button } from 'flowbite-react';

function TivAccuracy() {
  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="main flex justify-center items-center w-[100%] h-{100vh}">
        <div className=" max-w-3xl w-full mx-auto p-6  rounded-lg shadow-md ">
          <div className="tiv-report-design">
            <form action="">
              <div className="mb-4">
                <label htmlFor="prospect_id" className="block text-dark text-sm font-semibold mb-2">
                  Deal Done or Not
                </label>
                <select className="w-full px-3 py-2 border rounded-lg focus:border-blue-500">
                  <option selected>Customer Segmentation</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="prospect_id" className="block text-dark text-sm font-semibold mb-2">
                Oem
                </label>
                <select className="w-full px-3 py-2 border rounded-lg focus:border-blue-500">
                  <option selected>Select</option>
                  <option value="Sany">Sany</option>
                  <option value="Hunda">Hunda</option>
                  <option value="Hitatchi">Hitatchi</option>
                </select>              
                </div>

              <div className="flex justify-center mb-4">
                <Button
                  type="submit"
                  className="w-full sm:w-auto"
                  color="dark"
                  style={{ fontWeight: 'bold' }}>
                  Add  
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </NavbarSidebarLayout>
  );
}

export default TivAccuracy;
