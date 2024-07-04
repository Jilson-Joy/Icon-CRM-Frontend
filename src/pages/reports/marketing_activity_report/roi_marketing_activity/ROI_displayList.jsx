import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PencilLine, CircleArrowLeft, CircleArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavbarSidebarLayout from '../../../../layouts/navbar-sidebar';

function ROI_displayList() {
  const [marketingReport, setMarketingReport] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);

  useEffect(() => {
    const fetchMarketingReports = async () => {
      try {
        const response = await axios.get('http://localhost:3002/roi_mrktng');
        // Extracting data from response
        const data = response.data[0];
        setMarketingReport(data);
      } catch (error) {
        console.error('Error fetching marketing reports:', error);
      }
    };
    fetchMarketingReports();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = marketingReport.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(marketingReport.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="marketingactvty_report_container">
        <h2 className="marketingactvty_report_header">ROI Marketing Activity List</h2>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">SI</th>
                <th scope="col" className="px-6 py-3">Marketing Event</th>
                <th scope="col" className="px-6 py-3">Deal</th>
                <th scope="col" className="px-6 py-3">Model</th>
                <th scope="col" className="px-6 py-3">Type</th>
                <th scope="col" className="px-6 py-3">Report</th>
                <th scope="col" className="px-6 py-3"><span className="sr-only">Edit</span></th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((report, index) => (
                <tr key={report.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {indexOfFirstItem + index + 1}
                  </th>
                  <td className="px-6 py-4">{report.marketing_event}</td>
                  <td className="px-6 py-4">{report.deal}</td>
                  <td className="px-6 py-4">{report.model}</td>
                  <td className="px-6 py-4">{report.type}</td>
                  <td className="px-6 py-4">{report.report}</td>
                  <td className="px-6 py-4 text-right">
                      <button className="font-medium text-white-600 dark:text-white-500 hover:underline mr-3">
                        <PencilLine />
                      </button>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-5">
          <div>Page {currentPage} of {totalPages}</div>
          <div className="flex">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}>
              <CircleArrowLeft /> Previous
            </button>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`pagination-button ${currentPage === totalPages ? 'disabled' : ''}`}>
              Next <CircleArrowRight />
            </button>
          </div>
        </div>
      </div>
    </NavbarSidebarLayout>
  );
}

export default ROI_displayList;
