import React, { useState, useEffect } from 'react';
import NavbarSidebarLayout from '../../../../layouts/navbar-sidebar';
import useAxios from '../../../../hooks/useAxios/useAxios';
import './AddTivReport.css';

function AddTivReport() {
  const { response, error, loading } = useAxios({
    method: 'GET',
    url: 'http://localhost:3007/tivAccuarcy'
  });

  const [filters, setFilters] = useState({
    salesEngineer: ''
  });

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      salesEngineer: e.target.value
    });
  };

  let salesEngineers = [];
  if (response) {
    // Extract unique sales engineers
    salesEngineers = [...new Set(response.map(item => item.salesengineer))];
  }

  const filteredData = response?.filter(item => {
    return item.salesengineer.toLowerCase().includes(filters.salesEngineer.toLowerCase());
  });

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="tiv_report_form_container">
        <h2>Tiv Accuracy Report</h2>

        <div className="SalesEngineersSelect">
          <label htmlFor="">Sales Engineers</label>
          <select
            value={filters.salesEngineer}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            {salesEngineers.map(salesEngineer => (
              <option key={salesEngineer} value={salesEngineer}>{salesEngineer}</option>
            ))}
          </select>
        </div>

        <div className="tiv_accuracy_table relative overflow-x-auto shadow-md sm:rounded-lg">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Customer Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Projected Tiv
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Projected Oem
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total Accuracy
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Score
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData?.map((item) => (
                  <tr
                    key={item.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.customername}
                    </td>
                    <td className="px-6 py-4">{item.projectedtiv}</td>
                    <td className="px-6 py-4">{item.projectedoem}</td>
                    <td className="px-6 py-4">{item.totalaccuracy}</td>
                    <td className="px-6 py-4">{item.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </NavbarSidebarLayout>
  );
}

export default AddTivReport;
