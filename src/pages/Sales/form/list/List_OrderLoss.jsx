import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import { Button } from 'flowbite-react';
import './List_OrderLoss.css';
import { ListPlus, Trash2, Search, PencilLine } from 'lucide-react';
import NavbarSidebarLayout from '../../../../layouts/navbar-sidebar';
import Order_loss from '../Order_loss';
import DeleteModal from '../../../../components/DeleteModal'; // Adjust the import path as per your folder structure
import UpdateOrderLoss from '../../update/UpdateOrderLoss'

function List_OrderLoss() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState('');
  const [showAddOrderLossModal, setShowAddOrderLossModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false); // State for DeleteModal visibility
  const [deleteItemId, setDeleteItemId] = useState(null); // State to hold ID of item to delete

  const [showModal, setShowModal] = useState(false);
  const [selectedOrderLoss, setSelectedOrderLoss] = useState(null);

  const exportToExcel = () => {
    const fileType =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const fileName = 'data_export';

    const ws = XLSX.utils.json_to_sheet(records);
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

  useEffect(() => {
    axios.get('http://localhost:3003/order_loss').then((res) => {
      const filteredColumns = Object.keys(res.data[0]).filter((key) => key !== 'id');
      setColumns(filteredColumns);
      setRecords(res.data);
    });
  }, []);

  const handleDeleteModalOpen = (id) => {
    setDeleteItemId(id);
    setShowDeleteModal(true);
  };

  const handleDeleteModalClose = () => {
    setShowDeleteModal(false);
    setDeleteItemId(null);
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3003/order_loss/${deleteItemId}`)
      .then(() => {
        const updatedRecords = records.filter((record) => record.id !== deleteItemId);
        setRecords(updatedRecords);
      })
      .catch((error) => {
        console.error('Error deleting data:', error);
      });
    handleDeleteModalClose();
  };

  const filteredRecords = records.filter((record) =>
    Object.values(record).some(
      (value) => typeof value === 'string' && value.toLowerCase().includes(search.toLowerCase())
    )
  );

  const handleAddOrderLossModalOpen = () => {
    setShowAddOrderLossModal(true);
  };
  const handleAddOrderLossModalClose = () => {
    setShowAddOrderLossModal(false);
  };

  const handleAddOrderLossModalSave = () => {
    console.log('Saving deals...');
    handleAddOrderLossModalClose();
  };


  const handleEditClick = (orderLossData) => {
    setSelectedOrderLoss(orderLossData);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedOrderLoss(null);
  };

  const handleSave = () => {
    // Implement save logic if needed
    handleCloseModal();
  };
  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="financrtable_div">
        <div className="OrderLoss_tableBorder">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="Header">
              <h2 className="financier_heading"> Add Order Loss </h2>
            </div>
            <div className="AddOrderLoss_header">
              <div className="add_orderloss_filter">
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
                className="export-button focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                Export to Excel
              </button>
              <Button
                className="btn btn-outline"
                color="dark"
                onClick={handleAddOrderLossModalOpen}>
                <ListPlus /> Add New Order Loss
              </Button>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    {columns.map((c, i) => (
                      <th key={i} className="px-6 py-3">
                        {c}
                      </th>
                    ))}
                    <th className="px-6 py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRecords.map((d, i) => (
                    <tr
                      key={i}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      {columns.map((key, j) => (
                        <td
                          key={j}
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {d[key]}
                        </td>
                      ))}
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <button
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-3"
              onClick={() => handleEditClick(d)}>
              <PencilLine />
            </button>
                        <button
                          className="font-medium text-red-600 dark:text-red-500 hover:underline"
                          onClick={() => handleDeleteModalOpen(d.id)}>
                          <Trash2 />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {selectedOrderLoss && (
          <UpdateOrderLoss
            show={showModal}
            onClose={handleCloseModal}
            onSave={handleSave}
            initialData={selectedOrderLoss}
          />
        )}
      {showAddOrderLossModal && (
        <Order_loss
          show={showAddOrderLossModal}
          onClose={handleAddOrderLossModalClose}
          onSave={handleAddOrderLossModalSave}
        />
      )}
      <DeleteModal show={showDeleteModal} onClose={handleDeleteModalClose} onDelete={handleDelete} />
    </NavbarSidebarLayout>
  );
}

export default List_OrderLoss;
