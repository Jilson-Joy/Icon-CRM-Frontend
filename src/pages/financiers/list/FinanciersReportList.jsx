import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { Pencil, BookOpenText, Trash2, Search, PencilLine } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import AddFinanciersReports from '../create/AddFinanciersReports';
import FinanciersUpdate from '../update/FinanciersUpdate';
import DeleteModal from '../../../components/DeleteModal';

import * as XLSX from 'xlsx';
import './FinanciersReportList.css';

function FinanciersReportList() {
  const [data, setData] = useState([]);
  const [showAddFinanciersReportsModal, setShowAddFinanciersReportsModal] = useState(false);
  const [showUpdateFinanciersReportsModal, setShowUpdateFinanciersReportsModal] = useState(false);
  const [selectedFinancier, setSelectedFinancier] = useState(null);
  const [search, setSearch] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [financierToDelete, setFinancierToDelete] = useState(null);

  const addFinanciersModalRef = useRef(null);
  const updateFinanciersModalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (addFinanciersModalRef.current && !addFinanciersModalRef.current.contains(event.target)) {
        setShowAddFinanciersReportsModal(false);
      }
      if (updateFinanciersModalRef.current && !updateFinanciersModalRef.current.contains(event.target)) {
        setShowUpdateFinanciersReportsModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3003/financiersdb')
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleAddFinanciersModalOpen = () => setShowAddFinanciersReportsModal(true);
  const handleAddFinanciersModalClose = () => setShowAddFinanciersReportsModal(false);
  const handleAddFinanciersModalSave = () => handleAddFinanciersModalClose();

  const handleUpdateFinanciersModalOpen = (financier) => {
    setSelectedFinancier(financier);
    setShowUpdateFinanciersReportsModal(true);
  };
  const handleUpdateFinanciersModalClose = () => {
    setShowUpdateFinanciersReportsModal(false);
    setSelectedFinancier(null);
  };
  const handleUpdateFinanciersModalSave = (updatedFinancier) => {
    setData(data.map(financier => financier.id === updatedFinancier.id ? updatedFinancier : financier));
    handleUpdateFinanciersModalClose();
  };

  const exportToExcel = () => {
    const fileName = 'financiers_report';
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const dataFile = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    const url = URL.createObjectURL(dataFile);

    const link = document.createElement('a');
    link.href = url;
    link.download = fileName + '.xlsx';
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    }, 0);
  };
  const handleDeleteModalOpen = (financier) => {
    setFinancierToDelete(financier);
    setShowDeleteModal(true);
  };

  const handleDeleteModalClose = () => {
    setFinancierToDelete(null);
    setShowDeleteModal(false);
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3003/financiersdb/${financierToDelete.id}`)
      .then((res) => {
        setRecords(records.filter((record) => record.id !== financierToDelete.id));
        handleDeleteModalClose();
      })
      .catch((err) => console.log(err));
  };

  // const handleDelete = (id) => {
  //   if (window.confirm('Would you like to delete this record?')) {
  //     axios.delete(`http://localhost:3003/financiersdb/${id}`)
  //       .then(() => setData(data.filter(item => item.id !== id)))
  //       .catch((err) => console.error(err));
  //   }
  // };
  

  const filteredData = data.filter(d => 
    search.toLowerCase() === '' || d.Financier.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="AddFinancTable">
        <div className="AddFinancTable_header">
          <h1>Financiers Report Table</h1>
        </div>
        <div className="AddFinancTable_Addbtn">
          <div className="add_financ_filter">
            <span><Search /></span>
            <input
              type="search"
              placeholder="Search Financier Name"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button
            onClick={exportToExcel}
            className="export-button focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Export to Excel
          </button>
          <button
            type="button"
            className="AddFinancTable_Add"
            onClick={handleAddFinanciersModalOpen}
          >
            Add +
          </button>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Financier name</th>
                <th scope="col" className="px-6 py-3">Executive name</th>
                <th scope="col" className="px-6 py-3">Sales engineer name</th>
                <th scope="col" className="px-6 py-3">Discussion points</th>
                <th scope="col" className="px-6 py-3">Remarks</th>
                <th scope="col" className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((d, index) => (
                <tr
                  key={index}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <td className="px-6 py-4">{d.Financier}</td>
                  <td className="px-6 py-4">{d.Executive}</td>
                  <td className="px-6 py-4">{d.enginner}</td>
                  <td className="px-6 py-4">{d.textbox1}</td>
                  <td className="px-6 py-4">{d.textbox2}</td>
                  <td className="AddFinancTable_btnsection px-6 py-4">
                    {/* <Link
                      to={`/page/salescalls/salescalltable/SalesCallView/${d.id}`}
                      className="Salescalltable_btn focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 me-2 dark:focus:ring-yellow-900"
                    >
                      <BookOpenText />
                    </Link> */}
                    <button
                      onClick={() => handleUpdateFinanciersModalOpen(d)}
                      className="font-medium text-white-600 dark:text-white-500 hover:underline"
                    >
                      <PencilLine />
                    </button>
                    <button
                       onClick={() => handleDeleteModalOpen(d)}
                      className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                    >
                      <Trash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showAddFinanciersReportsModal && (
        <AddFinanciersReports
          ref={addFinanciersModalRef}
          show={showAddFinanciersReportsModal}
          onClose={handleAddFinanciersModalClose}
          onSave={handleAddFinanciersModalSave}
        />
      )}
      {showUpdateFinanciersReportsModal && (
        <FinanciersUpdate
          ref={updateFinanciersModalRef}
          show={showUpdateFinanciersReportsModal}
          onClose={handleUpdateFinanciersModalClose}
          onSave={handleUpdateFinanciersModalSave}
          financier={selectedFinancier}
        />
      )}
      {showDeleteModal && financierToDelete && (
        <DeleteModal
          show={showDeleteModal}
          onClose={handleDeleteModalClose}
          onDelete={handleDelete}
          item={financierToDelete}
        />
      )}
    </NavbarSidebarLayout>
  );
}

export default FinanciersReportList;
