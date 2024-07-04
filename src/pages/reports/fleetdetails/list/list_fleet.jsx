import React, { useState } from 'react';
import NavbarSidebarLayout from '../../../../layouts/navbar-sidebar';
import prospects_report from '../../../../constants/json/prospects_report.json';
// import fleet from '../../../../constants/json/fleet.json';
// import useExpenseReport from '../../../../hooks/'
import useAxios from '../../../../hooks/useAxios/useAxios';

import './list_fleet.css';
function List_fleet() {
  const { response, error, loading } = useAxios({
    method: 'GET',
    url: 'http://localhost:3026/fleetData' // Update URL with correct endpoint
  });
  const [filters, setFilters] = useState({
    startDate: '',
    endDate: '',
    status: '',
    prospectName: '',
    salesEngineer: '',
    district: '',
    contact: '',
    fleet: '',
    segment: '',
    oem: '',
    customerName: ''
  });

  const handleOEMChange = (e) => {
    const { value } = e.target;
    setFilters({ ...filters, oem: value });
  };

  // const handleSalesEngineerlistChange = (e) => {
  //   const { value } = e.target;
  //   setFilters({ ...filters, salesEngineer: value });
  // };

  const handleCustomerNameChange = (e) => {
    const { value } = e.target;
    setFilters({ ...filters, customerName: value });
  };
  const handleCustomerNoChange = (e) => {
    const { value } = e.target;
    setFilters({ ...filters, contact: value });
  };
  const handleDistrictChange = (e) => {
    const { value } = e.target;
    setFilters({ ...filters, district: value });
  };
  const handleSegmentChange = (e) => {
    const { value } = e.target;
    setFilters({ ...filters, segment: value });
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredSalesCall = response ? response.filter((salesData) => {
    const startDate = new Date(filters.startDate);
    const endDate = new Date(filters.endDate);
    const currentDate = new Date(salesData.date);
    const searchQuery = filters.customerName.toLowerCase(); // Convert search query to lowercase
    const district = filters.district.toLowerCase(); // Convert district to lowercase

    return (
      (!filters.startDate || currentDate >= startDate) &&
      (!filters.endDate || currentDate <= endDate) &&
      (filters.oem === '' || salesData.oem === filters.oem) &&
      (filters.contact === '' ||
        salesData.contact.toLowerCase().includes(filters.contact.toLowerCase())) && // Convert data to lowercase
      (filters.customerName === '' || salesData.customerName.toLowerCase().includes(searchQuery)) && // Use converted search query
      (filters.prospectName === '' || salesData.prospectName.includes(filters.prospectName)) &&
      (filters.salesEngineer === '' || salesData.salesEngineer.includes(filters.salesEngineer)) &&
      (filters.district === '' || salesData.district.toLowerCase().includes(district)) && // Use converted district
      (filters.fleet === '' || salesData.fleet.includes(filters.fleet)) &&
      (filters.segment === '' || salesData.segment.includes(filters.segment))
    );
  })
  : [];

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="salesCall_report_container">
        <h2 className="salesCall_report_header">Fleet details</h2>

        <form className="fleet_report_form">
          <div className="fleet_report_form_input">
            <div className="fleet_salesCall_report_form_input_select">
              <label htmlFor="startDate">Customer Name</label>
              <input
                type="text"
                id="startDate"
                name="startDate"
                value={filters.customerName}
                onChange={handleCustomerNameChange}
              />
            </div>
            <div className="fleet_salesCall_report_form_input_select">
              <label htmlFor="endDate">Customer Number </label>
              <input
                type="text"
                id="endDate"
                name="endDate"
                value={filters.contact}
                onChange={handleCustomerNoChange}
              />
            </div>
            <div className="fleet_salesCall_report_form_input_select">
              <label htmlFor="endDate">District</label>
              <input
                type="text"
                id="endDate"
                name="endDate"
                value={filters.district}
                onChange={handleDistrictChange}
              />
            </div>
            <div className="fleet_salesCall_report_form_input_select">
              <label htmlFor="oem">OEM</label>
              <select id="oem" name="oem" value={filters.oem} onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="med">med</option>
                <option value="min">min</option>
              </select>
            </div>
            {/* Add more filter inputs for other fields */}
          </div>
        </form>

        {/* table */}
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-center">
                  Date of Entry
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Customer Name
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Customer Number
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  {/* <input
                  type="text"
                  id="customerSelect"
                  list="customers"
                  placeholder="Customer Name"
                  value={filters.customerName}
                  onChange={handleCustomerNameChange} // Add this line
                />
                <datalist id="customers">
                  {salesCall_report.SalesCall.map((salesData, index) => (
                    <option key={index} value={salesData.CustomerName} />
                  ))}
                </datalist> */}
                  Number of machine
                </th>
                <th scope="col" className="px-3 py-3 text-center">
                  {/* <input
                  type="text"
                  id="customerSelect"
                  list="contactlist"
                  placeholder="CONTACT NO"
                  value={filters.contact}
                  onChange={handleContactChange} // Add this line
                />
                <datalist id="contactlist">
                  {salesCall_report.SalesCall.map((salesData, index) => (
                    <option key={index} value={salesData.contact} />
                  ))}
                </datalist> */}
                  Model Wise
                </th>
                <th scope="col" className="px-3 py-3 text-center">
                  {/* <input
                  type="text"
                  id="customerSelect"
                  list="Segmentlist"
                  placeholder="Segment wise"
                  value={filters.segment}
                  onChange={handleSegmentChange} // Add this line
                />
                <datalist id="Segmentlist">
                  {fleet.fleetData.map((salesData, index) => (
                    <option key={index} value={salesData.segment} />
                  ))}
                </datalist> */}
                  Segment wise
                </th>
                <th scope="col" className="px-3 py-3 text-center">
                  {/* <input
                  type="text"
                  id="customerSelect"
                  list="OEMlist"
                  placeholder="OEM wise"
                  value={filters.oem}
                  onChange={handleOEMChange} // Add this line
                />
                <datalist id="OEMlist">
                  {fleet.fleetData.map((salesData, index) => (
                    <option key={index} value={salesData.oem} />
                  ))}
                </datalist> */}
                  OEM Wise
                </th>
                <th scope="col" className="px-3 py-3 text-center">
                  {/* <input
                  type="text"
                  id="customerSelect"
                  list="districtlist"
                  placeholder="District wise"
                  value={filters.district}
                  onChange={handleDistrictChange} // Add this line
                />
                <datalist id="districtlist">
                  {fleet.fleetData.map((salesData, index) => (
                    <option key={index} value={salesData.district} />
                  ))}
                </datalist> */}
                  District wise
                </th>
                <th scope="col" className="px-3 py-3 text-center">
                  All Territoryu
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredSalesCall.map((salesData, index) => (
                <tr
                  key={index}
                  className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="px-3 py-3 text-center">{salesData.date}</td>
                  <td className="px-3 py-3 text-center">{salesData.customerName}</td>
                  <td className="px-3 py-3 text-center">{salesData.contact}</td>
                  <td className="machinenum">
                    <a href="/pages/reports/fleetdetails/no_of_machine/NoofMachine">
                      {salesData.NoMachine} ▼
                    </a>
                  </td>
                  <td className="px-3 py-3 text-center">{salesData.model}</td>
                  <td className="px-3 py-3 text-center">{salesData.segment}</td>
                  <td className="px-3 py-3 text-center">{salesData.oem}</td>
                  <td className="px-3 py-3 text-center">{salesData.district}</td>
                  <td className="px-3 py-3 text-center">{salesData.territoryu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
         )}
      </div>
    </NavbarSidebarLayout>
  );
}

export default List_fleet;
