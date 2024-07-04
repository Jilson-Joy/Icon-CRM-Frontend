import React, { useEffect, useState } from 'react';
import './Open_marketingactvty.css';
import { PencilLine, CircleArrowLeft, CircleArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavbarSidebarLayout from '../../../../layouts/navbar-sidebar';
import useOpenMrktng from '../../../../hooks/useOpenMrktng';

function Open_marketingactvty() {
  const { fetchOpenMrktng } = useOpenMrktng();
  const [marketingReport, setMarketingReport] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);

  useEffect(() => {
    const fetchMarketingReports = async () => {
      const data = await fetchOpenMrktng();
      if (data) {
        setMarketingReport(data);
      }
    };
    fetchMarketingReports();
  }, [fetchOpenMrktng]);

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
        <h2 className="marketingactvty_report_header">Marketing Activity Report</h2>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">SI</th>
                <th scope="col" className="px-6 py-3">Marketing Activity</th>
                <th scope="col" className="px-6 py-3">Proposed Date</th>
                <th scope="col" className="px-6 py-3">Proposed Amount</th>
                <th scope="col" className="px-6 py-3">Disbursible Amount</th>
                <th scope="col" className="px-6 py-3">Engineer Name</th>
                <th scope="col" className="px-6 py-3">Remarks</th>
                <th scope="col" className="px-6 py-3"><span className="sr-only">Edit</span></th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((report, index) => (
                <tr key={report.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {index + 1 + indexOfFirstItem}
                  </th>
                  <td className="px-6 py-4">{report.marketingActivity}</td>
                  <td className="px-6 py-4">{report.proposedDate}</td>
                  <td className="px-6 py-4">{report.proposedAmount}</td>
                  <td className="px-6 py-4">{report.disbursibleAmount}</td>
                  <td className="px-6 py-4">{report.engineerName}</td>
                  <td className="px-6 py-4">{report.remarks}</td>
                  <td className="px-6 py-4 text-right">
                    <Link to={`/pages/reports/marketing_activity_report/open_marketing_activity/Open_marketingactvty_Form/${report.id}`}>
                      <button className="font-medium text-white-600 dark:text-white-500 hover:underline mr-3">
                        <PencilLine />
                      </button>
                    </Link>
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

export default Open_marketingactvty;
