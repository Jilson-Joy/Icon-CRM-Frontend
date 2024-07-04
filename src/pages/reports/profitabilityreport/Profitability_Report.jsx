import React from 'react'
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import useAxios from '../../../hooks/useAxios/useAxios';
import './Profitability_Report.css'
function Profitability_Report() {
    const { response, error, loading } = useAxios({
        method: 'GET',
        url: 'http://localhost:3023/productivityData' // Update URL with correct endpoint
      });
  const tablehead = [
    { id: 1, name: 'Employee' },
    { id: 2, name: 'Segment' },
    { id: 3, name: 'Department' }
  ];
  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="Profitability_Report_container">
        <h2 className="Profitability_Report_header">Profitability Report</h2>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {tablehead.map(({ id, name }) => (
                  <th key={id} scope="col" className="px-6 py-3">
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {response.map((tableData,index)=>(
                <tr key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4">{tableData.Employee}</td>
                <td className="px-6 py-4">{tableData.segment}</td>
                <td className="px-6 py-4">{tableData.Department}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
        )}
      </div>
    </NavbarSidebarLayout>

  )
}

export default Profitability_Report