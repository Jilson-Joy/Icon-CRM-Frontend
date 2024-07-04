import React, { useState, useEffect } from 'react';
import { ListPlus, PencilLine, Trash2, Search, CircleArrowLeft, CircleArrowRight } from 'lucide-react';
import { Button } from 'flowbite-react';
import * as XLSX from 'xlsx';
import useOem from '../../../hooks/useOem';
import OemAddModal from '../form/OemAddModal';
import OemEditModal from './OemEditModal';
import DeleteModal from '../../../components/DeleteModal'; // Import the Delete Modal
import './List_Oem.css';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';

function List_Oem() {
  const [search, setSearch] = useState('');
  const [oemData, setOEMData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // State for delete modal
  const [selectedOem, setSelectedOem] = useState(null);

  const fetchOemData = useOem();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchOemData();
      if (data) {
        setOEMData(data);
      }
    };

    fetchData();

    return () => {};
  }, []);

  const filteredOem = oemData.filter((o) =>
    o.name.toLowerCase().includes(search.toLowerCase()) ||
    o.code.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredOem.slice(indexOfFirstItem, indexOfLastItem);

  const totalItems = filteredOem.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleRemove = (id) => {
    const oemToDelete = oemData.find((o) => o.id === id);
    setSelectedOem(oemToDelete);
    setIsDeleteModalOpen(true);
  };

  const exportToExcel = () => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const fileName = 'data_export';

    const ws = XLSX.utils.json_to_sheet(oemData);
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

  const handleAddOem = (newOem) => {
    setOEMData([...oemData, newOem]);
  };

  const handleEditOem = (updatedOem) => {
    const updatedData = oemData.map((oem) => (oem.id === updatedOem.id ? updatedOem : oem));
    setOEMData(updatedData);
  };

  const openEditModal = (oem) => {
    setSelectedOem(oem);
    setIsEditModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedOem(null);
  };

  const handleDelete = (id) => {
    const updatedOemData = oemData.filter((o) => o.id !== id);
    setOEMData(updatedOemData);
    setIsDeleteModalOpen(false);
    setSelectedOem(null);
  };

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="OemTable_container">
        <div className="OemTable">
          <div className="OemTable_header">
            <h1>OEM Table</h1>
          </div>
          <div className="OemTable_Addbtn">
            <div className="OemTable_filter">
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
            <Button
              onClick={() => setIsAddModalOpen(true)}
              className="btn btn-outline"
              color="dark">
              <ListPlus /> Add OEM
            </Button>
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
                {currentItems.map((d, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{d.name}</td>
                    <td className="px-6 py-4">{d.code}</td>
                    <td className="flex items-center px-6 py-4">
                      <button
                        onClick={() => openEditModal(d)}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-3">
                        <PencilLine />
                      </button>
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
                  disabled={currentPage === totalPages}
                  className={`pagination-button ${currentPage === totalPages ? 'disabled' : ''}`}>
                  Next <CircleArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add Delete Modal */}
      <DeleteModal
        show={isDeleteModalOpen} // Correct prop name
        onClose={handleCloseDeleteModal}
        onDelete={() => handleDelete(selectedOem.id)} // Pass selectedOem.id to handleDelete
        item={selectedOem} // Rename prop to item
      />
      <OemAddModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} onAdd={handleAddOem} />
      <OemEditModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} onEdit={handleEditOem} oem={selectedOem} />
    </NavbarSidebarLayout>
  );
}

export default List_Oem;
