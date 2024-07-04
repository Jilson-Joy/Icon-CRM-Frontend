import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { PencilLine, Trash2, SquareCheckBig, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import * as XLSX from 'xlsx';
import './EmployeeList.css';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import AddEmployee from '../create/AddEmployee';
import UpdateAddEmployee from '../update/UpdateAddEmployee';
import DeleteModal from '../../../components/DeleteModal'; // Adjust the import path as per your folder structure

function EmployeeList() {
  const [data, setData] = useState([]);
  const [filterDepartment, setFilterDepartment] = useState('');
  const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false);
  const [showEditEmployeeModal, setShowEditEmployeeModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false); // State for DeleteModal
  const [deleteItemId, setDeleteItemId] = useState(null); // State to hold ID of item to delete

  const addEmployeeModalRef = useRef(null);
  const editEmployeeModalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (addEmployeeModalRef.current && !addEmployeeModalRef.current.contains(event.target)) {
        setShowAddEmployeeModal(false);
      }
      if (editEmployeeModalRef.current && !editEmployeeModalRef.current.contains(event.target)) {
        setShowEditEmployeeModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleAddEmployeModalOpen = () => {
    setShowAddEmployeeModal(true);
  };

  const handleAddEmployeModalClose = () => {
    setShowAddEmployeeModal(false);
  };

  const handleAddEmployeModalSave = () => {
    console.log('Saving employee...');
    handleAddEmployeModalClose();
  };

  const handleEditEmployeModalOpen = () => {
    setShowEditEmployeeModal(true);
  };

  const handleEditEmployeModalClose = () => {
    setShowEditEmployeeModal(false);
  };

  const handleEditEmployeModalSave = () => {
    console.log('Saving employee...');
    handleEditEmployeModalClose();
  };

  const exportToExcel = () => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
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
      .delete(`http://localhost:3001/addemployees/${deleteItemId}`)
      .then((res) => {
        setData(data.filter(item => item.id !== deleteItemId)); // Update state optimally
      })
      .catch((err) => console.log(err));
    handleDeleteModalClose();
  };

  useEffect(() => {
    axios
      .get('http://localhost:3001/addemployees')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredData = data.filter((employee) => {
    if (!filterDepartment) return true;
    return employee.department.toLowerCase().includes(filterDepartment.toLowerCase());
  });

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="Emptable">
        <div className="emp_table">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5 block">
            <div className="top_div flex items-center justify-between mb-3">
              <div className="emp_search ">
                <span>
                  <Search />
                </span>
                <input
                  type="text"
                  placeholder="Search by Department"
                  value={filterDepartment}
                  onChange={(e) => setFilterDepartment(e.target.value)}
                />
              </div>
              <button
                onClick={exportToExcel}
                className="export-button focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                Export to Excel
              </button>
              <button
                type="button"
                className="emptable_addbutt"
                onClick={handleAddEmployeModalOpen}>
                Add Employee +
              </button>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">Name</th>
                  <th scope="col" className="px-6 py-3">Code</th>
                  <th scope="col" className="px-6 py-3">Department</th>
                  <th scope="col" className="px-6 py-3">Designation</th>
                  <th scope="col" className="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((d, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{d.name}</td>
                    <td className="px-6 py-4">{d.empcode}</td>
                    <td className="px-6 py-4">{d.department}</td>
                    <td className="px-6 py-4">{d.designation}</td>
                    <td className="emp_table_btnsection px-6 py-4">
                      <button
                        className="font-medium text-white-600 dark:text-white-500 hover:underline mr-3"
                        onClick={handleEditEmployeModalOpen}>
                        <PencilLine />
                      </button>
                      <button
                        onClick={() => handleDeleteModalOpen(d.id)}
                        type="button"
                        className="emptable_btn font-medium text-red-600 dark:text-red-500 hover:underline ms-3">
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
      {showAddEmployeeModal && (
        <AddEmployee
          ref={addEmployeeModalRef}
          show={showAddEmployeeModal}
          onClose={handleAddEmployeModalClose}
          onSave={handleAddEmployeModalSave}
        />
      )}
      {showEditEmployeeModal && (
        <UpdateAddEmployee
          ref={editEmployeeModalRef}
          show={showEditEmployeeModal}
          onClose={handleEditEmployeModalClose}
          onSave={handleEditEmployeModalSave}
        />
      )}
      <DeleteModal show={showDeleteModal} onClose={handleDeleteModalClose} onDelete={handleDelete} />
    </NavbarSidebarLayout>
  );
}

export default EmployeeList;


