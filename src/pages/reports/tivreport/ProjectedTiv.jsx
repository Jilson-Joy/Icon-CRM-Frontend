

import React, { useEffect, useState } from 'react';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import './ProjectedTiv.css';
import { Button } from 'flowbite-react';
import { PencilLine } from 'lucide-react';
import useAxios from '../../../hooks/useAxios/useAxios';


function ProjectedTiv() {
  
  const { response, error, loading } = useAxios({
    method: 'GET',
    url: 'http://localhost:3006/projectedTiv' // Update URL with correct endpoint
  });


  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="report_tiv">
        <div className="tiv_report">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5 block">
            <div className="top_tiv_report flex flex-col md:flex-row items-center justify-between mb-3">
              <a href="/pages/reports/tivreport/accuracy/TivAccuracy" className="md:ml-2">
                <Button className="btn btn-outline" color="dark">
                  edit <PencilLine />
                </Button>
              </a>
            </div>
                      {/* table */}
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">Engineers</th>
                  <th scope="col" className="px-6 py-3">Segment</th>
                  <th scope="col" className="px-6 py-3">District</th>
                  <th scope="col" className="px-6 py-3">Product Wise</th>
                </tr>
              </thead>
              <tbody>
                {response.map((tivReport) => (
                  <tr
                    key={tivReport.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {tivReport.engineers}
                    </td>
                    <td className="px-6 py-4">{tivReport.segment}</td>
                    <td className="px-6 py-4">{tivReport.district}</td>
                    <td className="px-6 py-4">{tivReport.productwise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
             )}
          </div>
        </div>

      </div>
    </NavbarSidebarLayout>
  );
}

export default ProjectedTiv;

