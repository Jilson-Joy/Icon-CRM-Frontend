import React, { useState } from 'react';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import './ExpenseReportTable.css';
import useAxios from '../../../hooks/useAxios/useAxios';

function ExpenseReportTable() {
  const { response, error, loading } = useAxios({
    method: 'GET',
    url: 'http://localhost:3016/EXPTableData', // Update URL with correct endpoint
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
    date: ''
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredExpData = response
    ? response.filter((d) => {
        const startDate = filters.startDate ? new Date(filters.startDate) : null;
        const endDate = filters.endDate ? new Date(filters.endDate) : null;
        const currentDate = new Date(d.date);
        return (
          (!startDate || currentDate >= startDate) &&
          (!endDate || currentDate <= endDate)
        );
      })
    : [];

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="ExpenseReportTable_container">
        <div className="ExpenseReportTable_header">
          <h2>Expense Report</h2>
        </div>
        <div className="ExpenseReportTable_filter">
          <div className="ExpenseReportTable_filter_From_Date">
            <label htmlFor="startDate">From Date</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={filters.startDate}
              onChange={handleFilterChange}
            />
          </div>
          <div className="ExpenseReportTable_filter_To_Date">
            <label htmlFor="endDate">To Date</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={filters.endDate}
              onChange={handleFilterChange}
            />
          </div>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">#</th>
                  <th scope="col" className="px-6 py-3">Date form</th>
                  <th scope="col" className="px-6 py-3">Date Upto</th>
                  <th scope="col" className="px-6 py-3">Claimed Amount</th>
                  <th scope="col" className="px-6 py-3">Submitted On</th>
                  <th scope="col" className="px-6 py-3">Submitted By</th>
                  <th scope="col" className="px-6 py-3">Approved Amt</th>
                  <th scope="col" className="px-6 py-3">Approved On</th>
                  <th scope="col" className="px-6 py-3">Approved By</th>
                  <th scope="col" className="px-6 py-3">Released Amt</th>
                  <th scope="col" className="px-6 py-3">Released On</th>
                  <th scope="col" className="px-6 py-3">Notes</th>
                </tr>
              </thead>
              <tbody>
                {filteredExpData.length > 0 ? (
                  filteredExpData.map((d, id) => (
                    <tr
                      key={id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <td className="px-6 py-3">{d.id}</td>
                      <td className="px-6 py-3">{d.date}</td>
                      <td className="px-6 py-3">{d.dateUpto}</td>
                      <td className="px-6 py-3">₹ {d.claimedAmount}</td>
                      <td className="px-6 py-3">{d.submittedOn}</td>
                      <td className="px-6 py-3">{d.submittedBy}</td>
                      <td className="px-6 py-3">₹{d.ApprovedAmt}</td>
                      <td className="px-6 py-3">{d.ApprovedOn}</td>
                      <td className="px-6 py-3">{d.ApprovedBy}</td>
                      <td className="px-6 py-3">₹{d.ReleasedAmt}</td>
                      <td className="px-6 py-3">{d.ReleasedOn}</td>
                      <td className="px-6 py-3">{d.notes}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="12" className="px-6 py-3 text-center">
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </NavbarSidebarLayout>
  );
}

export default ExpenseReportTable;
