import React from 'react'
import './IncentiveReport.css'
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar'
import useAxios from '../../../hooks/useAxios/useAxios';


function IncentiveReport() {
    const { response, error, loading } = useAxios({
        method: 'GET',
        url: 'http://localhost:3007/incentiveData' // Update URL with correct endpoint
      });
    
  return (
    <NavbarSidebarLayout isFooter={false}>
        <div className="report_incentive">
        <div className="incentive_report">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5 block">
            
                      {/* table */}
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">Employee</th>
                  <th scope="col" className="px-6 py-3">Segment</th>
                  <th scope="col" className="px-6 py-3">Department</th>
                  </tr>
                 
              </thead>
              <tbody>
                {response.map((incentive) => (
                  <tr
                    key={incentive.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {incentive.employee}
                    </td>
                    <td className="px-6 py-4">{incentive.segment}</td>
                    <td className="px-6 py-4">{incentive.department}</td>
                  
                  </tr>
                ))}
              </tbody>
            </table>
             )}
          </div>
        </div>

      </div>
    </NavbarSidebarLayout>
  )
}

export default IncentiveReport
