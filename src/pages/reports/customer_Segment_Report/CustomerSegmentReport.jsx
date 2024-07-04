import React from 'react'
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import useAxios from '../../../hooks/useAxios/useAxios';
import './CustomerSegmentReport.css';
function CustomerSegmentReport() {
    const { response, error, loading } = useAxios({
        method: 'GET',
        url: 'http://localhost:3021/custSegReportData' // Update URL with correct endpoint
      });
  const tablehead = [
    { id: 1, name: 'First Time Buyer' },
    { id: 2, name: 'Small Fleet' },
    { id: 3, name: 'Semi Corporate' },
    { id: 4, name: 'Key Accounts' }
  ];
  return (
    <NavbarSidebarLayout isFooter={false}>
 <div className="customerSegment_report_container">
        <h2 className="customerSegment_report_header">Customer Segment Report</h2>
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
                <td className="px-6 py-4">{tableData.name}</td>
                <td className="px-6 py-4">{tableData.S_fleet}</td>
                <td className="px-6 py-4">{tableData.semi_corporate}</td>
                <td className="px-6 py-4">{tableData.Key_accounts}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
        )}
      </div>    </NavbarSidebarLayout>
  )
}

export default CustomerSegmentReport