import React, { useState, useEffect } from 'react';
import { Button } from 'flowbite-react';
import {
  Trash2,
  PencilLine,
  Search,
  ListPlus,
  CircleArrowLeft,
  CircleArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './list_prospects.css';
import * as XLSX from 'xlsx';
import { USER_ID_PREF } from '../../../constants/constants';
import useProspects from '../../../hooks/useProspects';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import ProspectModal from './ProspectModal'; 

function ListProspects() {
  const [search, setSearch] = useState('');
  const [prospectData, setProspectData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [showModal, setShowModal] = useState(false);
  const [selectedProspect, setSelectedProspect] = useState(null);

  const { fetchProspectsList, addProspect } = useProspects();

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const data = await fetchProspectsList(USER_ID_PREF);
      if (data) {
        const prospectsWithApproval = data.map((prospect) => ({
          ...prospect,
          approved: false,
          rejected: false
        }));
        setProspectData(prospectsWithApproval);
      }
    };

    fetchDataFromApi();
  }, []);

  const filteredProspects = prospectData.filter(
    (o) =>
      o.name.toLowerCase().includes(search.toLowerCase()) ||
      o.telephone.toLowerCase().includes(search.toLowerCase()) ||
      o.address1.toLowerCase().includes(search.toLowerCase()) ||
      o.district.toLowerCase().includes(search.toLowerCase()) ||
      o.pincode.toLowerCase().includes(search.toLowerCase()) ||
      o.created_on.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProspects.slice(indexOfFirstItem, indexOfLastItem);

  const totalItems = filteredProspects.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleRemove = (id) => {
    setProspectData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const handleExportToExcel = () => {
    const fileType =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const fileName = 'data_export';

    const ws = XLSX.utils.json_to_sheet(filteredProspects);
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

  const handleAddProspect = async (newProspect) => {
    const addedProspect = await addProspect(newProspect);
    if (addedProspect) {
      setProspectData((prevData) => [...prevData, addedProspect]);
    }
  };

  const handleApprove = (id) => {
    setProspectData((prevData) =>
      prevData.map((prospect) =>
        prospect.id === id ? { ...prospect, approved: !prospect.approved, rejected: false } : prospect
      )
    );
  };

  const handleReject = (id) => {
    setProspectData((prevData) =>
      prevData.map((prospect) =>
        prospect.id === id ? { ...prospect, rejected: !prospect.rejected, approved: false } : prospect
      )
    );
  };

  const isManager =
    localStorage.getItem('user') &&
    JSON.parse(localStorage.getItem('user')).designation === 'Manager';

  const handleEdit = (prospect) => {
    setSelectedProspect(prospect);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedProspect(null);
  };

  const handleModalSave = (updatedProspect) => {
    setProspectData((prevData) =>
      prevData.map((prospect) =>
        prospect.id === updatedProspect.id ? updatedProspect : prospect
      )
    );
    setShowModal(false);
  };

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="ProspectsTable_container">
        <div className="ProspectsTable">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5 block">
            <div className="ProspectsTable_header">
              <h1>Add Prospects</h1>
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
                onClick={handleExportToExcel}
                className="export-button focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3 me-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                Export to Excel
              </button>

              <Link to="/prospects/create/add-prospects">
                <Button className="btn btn-outline" color="dark">
                  <ListPlus /> Add Prospects
                </Button>
              </Link>
            </div>

            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Number
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Address
                  </th>
                  <th scope="col" className="px-6 py-3">
                    District
                  </th>
                  <th scope="col" className="px-6 py-3">
                    PIN Number
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Proposed Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                  {isManager && (
                    <th scope="col" className="px-6 py-3">
                      Approval
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {currentItems.map((d, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {d.name}
                    </td>
                    <td className="px-6 py-4">{d.telephone}</td>
                    <td className="px-6 py-4">{d.address1}</td>
                    <td className="px-6 py-4">{d.district}</td>
                    <td className="px-6 py-4">{d.pincode}</td>
                    <td className="px-6 py-4">{d.created_on}</td>
                    <td className="px-6 py-4 flex items-center">
                      <button
                        onClick={() => handleEdit(d)}
                        className="font-medium text-white-600 dark:text-white-500 hover:underline">
                        <PencilLine />
                      </button>
                      <button
                        onClick={() => handleRemove(d.id)}
                        className="font-medium text-red-600 dark:text-red-500 hover:underline mx-3">
                        <Trash2 />
                      </button>
                    </td>
                    {isManager && (
                      <td>
                        <div className="flex items-center">
                          <button
                            onClick={() => handleApprove(d.id)}
                            className={`font-medium ${
                              d.approved
                                ? 'text-green-600 dark:text-green-500'
                                : 'text-blue-600 dark:text-blue-500'
                            } hover:underline mr-3`}>
                            {d.approved ? 'Approved' : 'Approve'}
                          </button>
                          <button
                            onClick={() => handleReject(d.id)}
                            className={`font-medium ${
                              d.rejected
                                ? 'text-red-600 dark:text-red-500'
                                : 'text-blue-600 dark:text-blue-500'
                            } hover:underline`}>
                            {d.rejected ? 'Rejected' : 'Reject'}
                          </button>
                        </div>
                      </td>
                    )}
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
                  className={`pagination-button ${
                    indexOfLastItem >= totalItems ? 'disabled' : ''
                  }`}>
                  Next <CircleArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <ProspectModal
          show={showModal}
          onClose={handleModalClose}
          onSave={handleModalSave}
          prospect={selectedProspect}
        />
      )}
    </NavbarSidebarLayout>
  );
}

export default ListProspects;
