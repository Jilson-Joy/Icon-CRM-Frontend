import React from 'react';
import './Order_loss_report.css';
import NavbarSidebarLayout from '../../../../layouts/navbar-sidebar';
import useAxios from '../../../../hooks/useAxios/useAxios';

function Order_loss_report() {
  const { response, error, loading } = useAxios({
    method: 'GET',
    url: 'http://localhost:3011/orderloss',
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="Order_loss_report_container">
        <div className="Order_loss_report_header_div">
          <h2 className="salesCall_report_header">Order Loss Report</h2>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Customer Name</th>
                <th scope="col" className="px-6 py-3">Retail Sales</th>
                <th scope="col" className="px-6 py-3">Invoice Date</th>
                <th scope="col" className="px-6 py-3">OEM Competition</th>
                <th scope="col" className="px-6 py-3">QTY</th>
                <th scope="col" className="px-6 py-3">Model</th>
                <th scope="col" className="px-6 py-3">Financier</th>
                <th scope="col" className="px-6 py-3">Bucket</th>
                <th scope="col" className="px-6 py-3">Participation</th>
                <th scope="col" className="px-6 py-3">Visit After Lost</th>
                <th scope="col" className="px-6 py-3">Visited Date</th>
                <th scope="col" className="px-6 py-3">Reason For Order Lost</th>
                <th scope="col" className="px-6 py-3">Reason To Buy Sany</th>
              </tr>
            </thead>
            <tbody>
              {response && response.map(item => (
                <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="px-6 py-4">{item.coustomername}</td>
                  <td className="px-6 py-4">{item.retailsale}</td>
                  <td className="px-6 py-4">{item.invoicedate}</td>
                  <td className="px-6 py-4">{item.oemcom}</td>
                  <td className="px-6 py-4">{item.qty}</td>
                  <td className="px-6 py-4">{item.model}</td>
                  <td className="px-6 py-4">{item.finacier}</td>
                  <td className="px-6 py-4">{item.bucket}</td>
                  <td className="px-6 py-4">{item.participation}</td>
                  <td className="px-6 py-4">{item.vist_AL}</td>
                  <td className="px-6 py-4">{item.vist_date}</td>
                  <td className="px-6 py-4">{item.RFOL}</td>
                  <td className="px-6 py-4">{item.RBS}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </NavbarSidebarLayout>
  );
}

export default Order_loss_report;
