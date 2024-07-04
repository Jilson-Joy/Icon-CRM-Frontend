import React, { useState, useEffect } from 'react';
import { ListPlus, PencilLine, Trash2, Search, CircleArrowLeft, CircleArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import * as XLSX from 'xlsx';
import useFinancier from '../../../hooks/useFinancier';

function Table_AddFinancier() {
  const [search, setSearch] = useState('');
  const [financierData, setFinancierData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  const fetchFinancierData = useFinancier();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFinancierData();
      if (data) {
        setFinancierData(data);
      }
    };

    fetchData();

    return () => {
    };
  }, []);

  const filteredFinancier = financierData.filter(o =>
    o.name.toLowerCase().includes(search.toLowerCase()) ||
    o.district.toLowerCase().includes(search.toLowerCase()) ||
    o.officeAddress.toLowerCase().includes(search.toLowerCase()) ||
    o.executiveName.toLowerCase().includes(search.toLowerCase()) ||
    o.phoneNo.toLowerCase().includes(search.toLowerCase()) ||
    o.mailId.toLowerCase().includes(search.toLowerCase())
  );

  const exportToExcel = () => {
    const fileType =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const fileName = 'data_export';

    const ws = XLSX.utils.json_to_sheet(filteredFinancier);
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const dataFile = new Blob([excelBuffer], { type: fileType });
    const url = URL.createObjectURL(dataFile);

    const link = document.createElement('a');
    link.href = url;
    link.download = fileName + fileExtension;
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    }, 0);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredFinancier.slice(indexOfFirstItem, indexOfLastItem);
  const totalItems = filteredFinancier.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="ProspectsTable_container">
        <div className="ProspectsTable">
          <div className="ProspectsTable_header">
            <h1>Financier Table</h1>
          </div>
          <div className="ProspectsTable_Addbtn">
            <div className="ProspectsTable_filter">
              <span>
                <Search />
              </span>
              <input
                type="search"
                placeholder="Search here"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button
              onClick={exportToExcel}
              className="export-button focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3 me-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              Export to Excel
            </button>
            <Link to={'/pages/Table/financier_form/AddFinancier'}>
              <Button className="btn btn-outline" color="dark">
                <ListPlus /> Add Financier
              </Button>
            </Link>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Financier Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    District
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Office Address
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Executive Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Phone No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Mail Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((d, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{d.financierName}</td>
                    <td className="px-6 py-4">{d.district}</td>
                    <td className="px-6 py-4">{d.officeAddress}</td>
                    <td className="px-6 py-4">{d.executiveName}</td>
                    <td className="px-6 py-4">{d.phoneNo}</td>
                    <td className="px-6 py-4">{d.mailId}</td>
                    <td className="flex items-center px-6 py-4">
                      <Link to="/pages/modifydeals/update/UpdateModifyDeals">
                        <button className="font-medium text-white-600 dark:text-white-500 hover:underline mr-3">
                          <PencilLine />
                        </button>
                      </Link>
                      <button
                        onClick={() => handleRemove(d.id)}
                        className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">
                        <Trash2 />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between items-center mt-5">
              <div>
                Page {currentPage} of {totalPages}
              </div>
              <div className="flex">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}>
                  <CircleArrowLeft /> Previous
                </button>
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={indexOfLastItem >= totalItems}
                  className={`pagination-button ${indexOfLastItem >= totalItems ? 'disabled' : ''}`}>
                  Next <CircleArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavbarSidebarLayout>
  );
}

export default Table_AddFinancier;
