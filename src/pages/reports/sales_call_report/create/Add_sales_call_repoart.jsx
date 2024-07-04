import React, { useEffect, useState } from 'react';
import NavbarSidebarLayout from '../../../../layouts/navbar-sidebar';
import Add_sales_call_repoart from './Add_sales_call_repoart.css';
// import salesCall_report from '../../../../constants/json/salesCall_report.json';
// import useSalesReport from '../../../../hooks/useSalesReport';
import useAxios from '../../../../hooks/useAxios/useAxios'; 

function Add_sales_call_report() {
  const { response: salesCallData, error, loading } = useAxios({
    method: 'GET',
    url: 'http://localhost:3015/SalesCall', // Update URL with correct endpoint
  }); 

  const [filters, setFilters] = useState({
    startDate: '',
    endDate: '',
    status: '',
    category: '',
    model: '',
    district: '',
    contact: '',
    customerName: '',
    remarks: '',
    finance: '',
    meeting: '',
    headSupport: '',
  });

  useEffect(() => {
    // No need to fetch data here, useAxios already does it
  }, []); // No dependency, fetch only once

  const handleModelChange = (e) => {
    const { value } = e.target;
    setFilters({ ...filters, model: value });
  };

  // Define handleDistrictChange
  const handleDistrictChange = (e) => {
    const { value } = e.target;
    setFilters({ ...filters, district: value });
  };

  const handleCustomerNameChange = (e) => {
    const { value } = e.target;
    setFilters({ ...filters, customerName: value });
  };
  const handleFinanceChange = (e) => {
    const { value } = e.target;
    setFilters({ ...filters, finance: value });
  };
  const handleMeetingChange = (e) => {
    const { value } = e.target;
    setFilters({ ...filters, meeting: value });
  };
  const handleContactChange = (e) => {
    const { value } = e.target;
    setFilters({ ...filters, contact: value });
  };
  // Handle other filter changes similarly

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredSalesCall = salesCallData ? salesCallData.filter((salesData) => {
    const startDate = new Date(filters.startDate);
    const endDate = new Date(filters.endDate);
    const currentDate = new Date(salesData.date);
    return (
      (!filters.startDate || currentDate >= startDate) &&
      (!filters.endDate || currentDate <= endDate) &&
      (filters.status === '' || salesData.status === filters.status) &&
      (filters.headSupport === '' || salesData.headSupport === filters.headSupport) &&
      (filters.meeting === '' || salesData.meeting.includes(filters.meeting)) &&
      (filters.category === '' || salesData.category.includes(filters.category)) &&
      (filters.model === '' || salesData.model.includes(filters.model)) &&
      (filters.district === '' || salesData.district.includes(filters.district)) &&
      (filters.contact === '' || salesData.contact.includes(filters.contact)) &&
      (filters.customerName === '' || salesData.CustomerName.includes(filters.customerName))&&
      (filters.remarks === '' || salesData.remarks.includes(filters.remarks))&&
      (filters.finance === '' || salesData.finance.includes(filters.finance))
    );
  }) : [];

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="salesCall_report_container">
        <h2 className="salesCall_report_header">Sales Call Report</h2>

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
              <label htmlFor="endDate">Schedule Meeting</label>
              <input
                type="date"
                id="meeting"
                name="meeting"
                value={filters.meeting}
                onChange={handleMeetingChange}
              />
            </div>
      
          
            <div className="salesCall_report_form_input_select">
              <label htmlFor="status">Head Support</label>
              <select
                id="headSupport"
                name="headSupport"
                value={filters.headSupport}
                onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
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
                <th scope="col" className="px-3 py-3 text-center">
                Expected delivery date
                </th>
                <th scope="col" className="px-3 py-3 text-center">
                  <input
                    type="text"
                    id="customerSelect"
                    list="customers"
                    placeholder="Customer Name"
                    value={filters.customerName}
                    onChange={handleCustomerNameChange} // Add this line
                  />
                  <datalist id="customers">
                    {salesCallData.map((salesData, index) => (
                      <option key={index} value={salesData.CustomerName} />
                    ))}
                  </datalist>
                </th>
                <th scope="col" className="px-3 py-3 text-center">
                  <input
                    type="text"
                    id="customerSelect"
                    list="contactlist"
                    placeholder="CONTACT NO"
                    value={filters.contact}
                    onChange={handleContactChange} // Add this line
                  />
                  <datalist id="contactlist">
                    {salesCallData.map((salesData, index) => (
                      <option key={index} value={salesData.contact} />
                    ))}
                  </datalist>
                </th>
                <th scope="col" className="px-3 py-3 text-center">
                  <input
                    type="text"
                    id="customerSelect"
                    list="districtlist"
                    placeholder="DISTRICT"
                    value={filters.district}
                    onChange={handleDistrictChange} // Add this line
                  />
                  <datalist id="districtlist">
                    {salesCallData.map((salesData, index) => (
                      <option key={index} value={salesData.district} />
                    ))}
                  </datalist>
                </th>
                <th scope="col" className="px-3 py-3 text-center">
                  <input
                    type="text"
                    id="customerSelect"
                    list="modellist"
                    placeholder="Model"
                    value={filters.model}
                    onChange={handleModelChange} // Add this line
                  />
                  <datalist id="modellist">
                    {salesCallData.map((salesData, index) => (
                      <option key={index} value={salesData.model} />
                    ))}
                  </datalist>
                </th>
                <th scope="col" className="px-3 py-3 text-center">
                  <input
                    type="text"
                    id="customerSelect"
                    list="financellist"
                    placeholder="FINANCE"
                    value={filters.finance}
                    onChange={handleFinanceChange} // Add this line
                  />
                  <datalist id="financellist">
                    {salesCallData.map((salesData, index) => (
                      <option key={index} value={salesData.finance} />
                    ))}
                  </datalist>
                </th>
                <th scope="col" className="px-3 py-3 text-center">
                  CATEGORY(STAGE)
                </th>
                <th scope="col" className="px-3 py-3 text-center">
                  STATUS
                </th>
                <th scope="col" className="px-3 py-3 text-center">
                  REMARKS
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredSalesCall.map((salesData, index) => (
                <tr
                  key={index}
                  className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="px-3 py-3 text-center">{salesData.date}</td>
                  <td className="px-3 py-3 text-center">{salesData.CustomerName}</td>
                  <td className="px-3 py-3 text-center">{salesData.contact}</td>
                  <td className="px-3 py-3 text-center">{salesData.district}</td>
                  <td className="px-3 py-3 text-center">{salesData.model}</td>
                  <td className="px-3 py-3 text-center">{salesData.finance}</td>
                  <td className="px-3 py-3 text-center">{salesData.category}</td>
                  <td className="px-3 py-3 text-center">{salesData.status}</td>
                  <td className="px-3 py-3 text-center">{salesData.remarks}</td>
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

export default Add_sales_call_report;
