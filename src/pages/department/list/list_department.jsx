
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { PencilLine, Trash2, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import * as XLSX from 'xlsx';
import DepartmentUpdateModal from './DepartmentUpdateModal';
import DepartmentAddModal from '../create/DepartmentAddModal'; // Import the add modal
import DeleteModal from '../../../components/DeleteModal'; 
import './list_department.css';

function DepartmentList() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false); // State to control Add modal
  const [showDeleteModal, setShowDeleteModal] = useState(false); // State to control Delete modal
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    code: ''
  });
  const [itemToDelete, setItemToDelete] = useState(null); // State for the item to be deleted

  useEffect(() => {
    axios
      .get('http://localhost:3000/departmentdetails')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const exportToExcel = () => {
    const fileType =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const fileName = 'data_export';

    const ws = XLSX.utils.json_to_sheet(data);
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

  const handleOpenDeleteModal = (item) => {
    setItemToDelete(item);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setItemToDelete(null);
    setShowDeleteModal(false);
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/departmentdetails/${itemToDelete.id}`)
      .then(() => {
        setData((prevData) => prevData.filter((department) => department.id !== itemToDelete.id));
        handleCloseDeleteModal();
      })
      .catch((err) => console.log(err));
  };

  const handleOpenUpdateModal = (department) => {
    setFormData(department);
    setShowUpdateModal(true);
  };

  const handleCloseUpdateModal = () => {
    setShowUpdateModal(false);
  };

  const handleSave = () => {
    axios
      .put(`http://localhost:3000/departmentdetails/${formData.id}`, formData)
      .then(() => {
        location.reload();
        setShowUpdateModal(false);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleOpenAddModal = () => {
    setShowAddModal(true);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="AddDepartmentTable_container">
        <div className="AddDepartmentTable">
          <div className="AddDepartmentTable_header">
            <h1>Department Table</h1>
          </div>
          <div className="AddDepartmentTable_Addbtn">
            <div className="add_department_filter">
              <span>
                <Search />
              </span>
              <input
                type="search"
                placeholder="Search Name"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button
              onClick={exportToExcel}
              className="export-button focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3 me-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              Export to Excel
            </button>
            <button
              type="button"
              onClick={handleOpenAddModal} // Open add modal on click
              className="AddDepartmentTable_Add">
              Add +
            </button>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Code
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data
                  .filter((d) => {
                    return search.toLowerCase() === '' ? d : d.name.toLowerCase().includes(search);
                  })
                  .map((d) => (
                    <tr
                      key={d.id}
                      className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <td className="px-6 py-4">{d.name}</td>
                      <td className="px-6 py-4">{d.code}</td>
                      <td className="AddDepartmentTable_btnsection px-6 py-4">
                        <button
                          onClick={() => handleOpenUpdateModal(d)}
                          className="font-medium text-white-600 dark:text-white-500 hover:underline">
                          <PencilLine />
                        </button>
                        <button
                          onClick={() => handleOpenDeleteModal(d)}
                          type="button"
                          className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">
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
      <DepartmentUpdateModal
        show={showUpdateModal}
        onClose={handleCloseUpdateModal}
        onSave={handleSave}
        formData={formData}
        handleChange={handleChange}
      />
      <DepartmentAddModal // Add the add modal
        show={showAddModal}
        onClose={handleCloseAddModal}
      />
      <DeleteModal
        show={showDeleteModal}
        onClose={handleCloseDeleteModal}
        onDelete={handleDelete}
        item={itemToDelete}
      />
    </NavbarSidebarLayout>
  );
}

export default DepartmentList;

