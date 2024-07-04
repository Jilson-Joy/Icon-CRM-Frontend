import React, { useEffect, useState } from 'react';
import './List_stage_report.css';
import NavbarSidebarLayout from '../../../../layouts/navbar-sidebar';
// import list_stage_reportList from '../../../../constants/json/list_stage_reportList.json';
import { Link } from 'react-router-dom';
// import useListStage from '../../../../hooks/useListStage';
import useAxios from '../../../../hooks/useAxios/useAxios';

function List_stage_report() {
  const { response, error, loading } = useAxios({
    method: 'GET',
    url: 'http://localhost:3012/listStage' // Update URL with correct endpoint
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
    segment: ''
  });

  useEffect(() => {
    // No need to fetch data here, useAxios already does it
  }, []);

  const handleSegmentChange = (e) => {
    const { value } = e.target;
    setFilters({ ...filters, segment: value });
  };
  //   const handleContactChange = (e) => {
  //     const { value } = e.target;
  //     setFilters({ ...filters, contact: value });
  //   };
  const handleSalesEngineerlistChange = (e) => {
    const { value } = e.target;
    setFilters({ ...filters, salesEngineer: value });
  };

  //   const handleCustomerNameChange = (e) => {
  //     const { value } = e.target;
  //     setFilters({ ...filters, fleet: value });
  //   };

  const handleDistrictChange = (e) => {
    const { value } = e.target;
    setFilters({ ...filters, district: value });
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredSalesCall = response
    ? response.filter((salesData) => {
        const startDate = new Date(filters.startDate);
        const endDate = new Date(filters.endDate);
        const currentDate = new Date(salesData.date);
        return (
          (!filters.startDate || currentDate >= startDate) &&
          (!filters.endDate || currentDate <= endDate) &&
          (filters.status === '' || salesData.status === filters.status) &&
          (filters.prospectName === '' || salesData.prospectName.includes(filters.prospectName)) &&
          (filters.salesEngineer === '' ||
            salesData.salesEngineer.includes(filters.salesEngineer)) &&
          (filters.district === '' || salesData.district.includes(filters.district)) &&
          (filters.contact === '' || salesData.contact.includes(filters.contact)) &&
          (filters.fleet === '' || salesData.fleet.includes(filters.fleet)) &&
          (filters.segment === '' || salesData.segment.includes(filters.segment))
        );
      })
    : [];
  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="salesCall_report_container">
        <h2 className="salesCall_report_header">List Stage Report</h2>

        <form className="salesCall_report_form">
          <div className="salesCall_report_form_input">
            <div className="salesCall_report_form_input_select">
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={filters.startDate}
                onChange={handleFilterChange}
              />
            </div>
            <div className="salesCall_report_form_input_select">
              <label htmlFor="endDate">End Date</label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={filters.endDate}
                onChange={handleFilterChange}
              />
            </div>
            <div className="salesCall_report_form_input_select">
              <label htmlFor="status">Status</label>
              <select
                id="status"
                name="status"
                value={filters.status}
                onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="Approved">Approved</option>
                <option value="Not Approved">Not Approved</option>
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
                    Customer Name
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
                    Contact Number
                  </th>
                  <th scope="col" className="px-3 py-3 text-center">
                    <input
                      type="text"
                      id="customerSelect"
                      list="salesEngineerlist"
                      placeholder="Sales Engineer"
                      value={filters.salesEngineer}
                      onChange={handleSalesEngineerlistChange} // Add this line
                    />
                    <datalist id="salesEngineerlist">
                      {response.map((salesData, index) => (
                        <option key={index} value={salesData.salesEngineer} />
                      ))}
                    </datalist>
                  </th>
                  <th scope="col" className="px-3 py-3 text-center">
                    <input
                      type="text"
                      id="customerSelect"
                      list="segmentlist"
                      placeholder="Segment"
                      value={filters.segment}
                      onChange={handleSegmentChange} // Add this line
                    />
                    <datalist id="segmentlist">
                      {response.map((salesData, index) => (
                        <option key={index} value={salesData.segment} />
                      ))}
                    </datalist>
                  </th>
                  <th scope="col" className="px-3 py-3 text-center">
                    <input
                      type="text"
                      id="customerSelect"
                      list="districtlist"
                      placeholder="District"
                      value={filters.district}
                      onChange={handleDistrictChange} // Add this line
                    />
                    <datalist id="districtlist">
                      {response.map((salesData, index) => (
                        <option key={index} value={salesData.district} />
                      ))}
                    </datalist>
                  </th>
                  <th scope="col" className="px-3 py-3 text-center">
                    Fleet details
                  </th>
                  <th scope="col" className="px-3 py-3 text-center">
                    STATUS
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredSalesCall.map((salesData, index) => (
                  <tr
                    key={index}
                    className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-3 py-3 text-center">{salesData.date}</td>
                    <td className="px-3 py-3 text-center">{salesData.prospectName}</td>
                    <td className="px-3 py-3 text-center">{salesData.contact}</td>
                    <td className="px-3 py-3 text-center">{salesData.salesEngineer}</td>
                    <td className="px-3 py-3 text-center">{salesData.segment}</td>
                    <td className="px-3 py-3 text-center">{salesData.district}</td>
                    
                    <td className="fleetbox">
                      <Link to="/pages/reports/fleetdetails/list/list_fleet">
                        {salesData.fleet} ▼
                      </Link>
                    </td>
                    
                    <td
                      className="px-3 py-3 text-center"
                      style={{ color: salesData.status === 'Approved' ? 'green' : 'red' }}>
                      {salesData.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>{' '}
    </NavbarSidebarLayout>
  );
}

export default List_stage_report;
