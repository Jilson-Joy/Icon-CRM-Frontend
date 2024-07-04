import React, { useState } from 'react';
import NavbarSidebarLayout from '../../../../layouts/navbar-sidebar';
import './AddDealsReport.css';
import dealsreport from '../../../../constants/json/dealsreport.json';

function AddDealsReport() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filteredDeals, setFilteredDeals] = useState([]);

  // Function to handle start date change
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    filterDeals(e.target.value, endDate);
  };

  // Function to handle end date change
  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
    filterDeals(startDate, e.target.value);
  };

  // Function to filter sales data based on date range
  const filterDeals = (start, end) => {
    if (!start || !end) {
      setFilteredDeals([]); // Clear filtered sales if start or end date is not selected
      return;
    }
    const filtered = dealsreport.deals.filter((deal) => {
      return deal.date >= start && deal.date <= end;
    });
    setFilteredDeals(filtered);
  };

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="deals_report_form_container">
        <h2>Deals Report</h2>
        <form className="deal_report_form">
          <div className="deals_report_form_input">
            <div className="deals_report_form_input_select">
              <label htmlFor="startDate" className="block  mb-2 ">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                className="px-3 py-2 border rounded-lg focus:border-blue-500"
                value={startDate}
                onChange={handleStartDateChange}
              />
            </div>
            <div className="deals_report_form_input_select">
              <label htmlFor="endDate">End Date</label>
              <input
                type="date"
                id="endDate"
                className="px-3 py-2 border rounded-lg focus:border-blue-500"
                value={endDate}
                onChange={handleEndDateChange}
              />
            </div>
          </div>
        </form>

        {(filteredDeals.length > 0 ? filteredDeals : dealsreport.deals).length > 0 && (
          <table className="deals_report_table">
            <thead>
              <tr>
                <th>Deals Name</th>
                <th>Contact Number</th>
                <th>M/C Model</th>
                <th>Segment</th>
                <th>Deal Suggestedby</th>
                <th>Expected Delivery Date</th>
              </tr>
            </thead>
            <tbody>
              {(filteredDeals.length > 0 ? filteredDeals : dealsreport.deals).map((deal, index) => (
                <tr key={index}>
                  <td>{deal.dealsname}</td>
                  <td>{deal.contact}</td>
                  <td>{deal.mcmodel}</td>
                  <td>{deal.segment}</td>
                  <td>{deal.dealsuggested}</td>
                  <td>{deal.expecteddate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </NavbarSidebarLayout>
  );
}

export default AddDealsReport;
