import React, { useEffect, useState } from 'react';
import { Trash2, PencilLine, SquareCheckBig, ListPlus, Search, CircleArrowLeft, CircleArrowRight } from 'lucide-react';
import { Button } from 'flowbite-react';
import './TivProjectionList.css';
import axios from 'axios';
import * as XLSX from 'xlsx';
import { Link } from 'react-router-dom';
import useTiv from '../../../hooks/useTiv';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import TivProjectionEditModal from './TivProjectionEditModal'; // Import the modal
// import AddTivProjectionModal from '../create/AddTivProjectionModal';
import AddTivProjection from '../create/AddTivProjection'
import { Modal } from 'flowbite-react'; 
import DeleteModal from '../../../components/DeleteModal';
import { BASE_URL } from '../../../constants/constants';

function TivProjectionList() {
  const [tivData, setTivData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [showAddModal, setShowAddModal] = useState(false);

  const [showEditModal, setShowEditModal] = useState(false); // State to control modal visibility
  const [selectedTiv, setSelectedTiv] = useState(null); // State to store the selected TIV data
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [tivToDelete, setTivToDelete] = useState(null);

  const { fetchTIV } = useTiv();

  useEffect(() => {
    async function fetchData() {
      try {
        const tivData = await fetchTIV();
        setTivData(tivData);
      } catch (error) {
        console.error('Error fetching TIV data:', error);
      }
    }
    fetchData();
  }, []);

  const exportToExcel = () => {
    const fileType =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const fileName = 'tiv_data_export';

    const ws = XLSX.utils.json_to_sheet(tivData);
    const wb = { Sheets: { tivData: ws }, SheetNames: ['tivData'] };
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

  const filteredTiv = tivData.filter((tiv) =>
    tiv.proposed_date.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTivData = filteredTiv.slice(indexOfFirstItem, indexOfLastItem);
  const totalTivData = filteredTiv.length;
  const totalPages = Math.ceil(totalTivData / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleEditClick = (tiv) => {
    setSelectedTiv(tiv);
    setShowEditModal(true);
  };

  const handleAddClick = () => {
    setShowAddModal(true);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setSelectedTiv(null);
  };

  const handleSaveModal = () => {
    // Logic to save the edited data
    // You might need to update the `tivData` state here
    setShowEditModal(false);
  };

  // Add Modal
  const handleAddTIVModalOpen = () => {
    setShowAddModal(true);
  };
  const handleAddTIVModalClose = () => {
    setShowAddModal(false);
  };

  const handleAddTIVModalSave = () => {
    console.log('Saving deals...');
    handleAddTIVModalClose();
  };

  // delete
  const handleDeleteModalOpen = (tivdata) => {
    setTivToDelete(tivdata);
    setShowDeleteModal(true);
  };

  const handleDeleteModalClose = () => {
    setTivToDelete(null);
    setShowDeleteModal(false);
  };

  const handleDelete = () => {
    axios
      .delete(`${BASE_URL}GetTIVProjections.php?id=${tivToDelete.id}`)
      .then((res) => {
        // Update the state to reflect the deleted record
        setTivData(tivData.filter((tiv) => tiv.id !== tivToDelete.id));
        handleDeleteModalClose();
      })
      .catch((err) => console.log(err));
  };

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="tab_tiv">
        <div className="tiv_table">
          <div className='tiv_h2_div'> 
            <h2 className=''>Tiv Projection List</h2>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5 block">
            <div className="tiv_div flex flex-col md:flex-row items-center justify-between mb-3">
              <div className="tiv_search">
                <span>
                  {' '}
                  <Search />
                </span>
                <input
                  type="text"
                  placeholder="Filter by date"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button
                onClick={exportToExcel}
                className="export-button focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                Export to Excel
              </button>

              <Button  onClick={handleAddClick} className="btn btn-outline" color="dark">
                <ListPlus /> Add New
              </Button>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    OEM
                  </th>
                  <th scope="col" className="px-6 py-3">
                    M/C Model
                  </th>
                  <th
                   scope="col" className="px-6 py-3">
                   Competition1
                 </th>
                 <th scope="col" className="px-6 py-3">
                   Competition2
                 </th>
                 <th scope="col" className="px-6 py-3">
                   Action
                 </th>
               </tr>
             </thead>
             <tbody>
               {currentTivData.map((d) => (
                 <tr
                   key={d.id}
                   className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                   <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     {d.customer_name}
                   </td>
                   <td className="px-6 py-4">{d.proposed_date}</td>
                   <td className="px-6 py-4">{d.orm_id}</td>
                   <td className="px-6 py-4">{d.machine_id}</td>
                   <td className="px-6 py-4">{d.competition1}</td>
                   <td className="px-6 py-4">{d.competition2}</td>
                   <td className="flex items-center px-6 py-4">
                     <button
                       onClick={() => handleEditClick(d)}
                       className="font-medium text-white-600 dark:text-white-500 hover:underline mr-3">
                       <PencilLine />
                     </button>
                     <button
                       onClick={() => handleDeleteModalOpen(d)}
                       className="font-medium text-red-600 dark:text-red-500 hover:underline">
                       <Trash2 />
                     </button>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
           {/* Pagination */}
           <div className="flex justify-between items-center mt-5">
             <div className="p-3">
               Page {currentPage} of {totalPages}
             </div>
             <div className="flex deal_pagination p-3">
               <button
                 onClick={handlePreviousPage}
                 disabled={currentPage === 1}
                 className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}>
                 <CircleArrowLeft /> Previous
               </button>
               <button
                 onClick={handleNextPage}
                 disabled={currentPage === totalPages}
                 className={`pagination-button ${currentPage === totalPages ? 'disabled' : ''}`}>
                 Next <CircleArrowRight />
               </button>
             </div>
           </div>
         </div>
       </div>
     </div>
     {showEditModal && (
       <TivProjectionEditModal
         show={showEditModal}
         onClose={handleCloseModal}
         formData={selectedTiv}
         onSave={handleSaveModal}
         handleChange={(e) => setSelectedTiv({ ...selectedTiv, [e.target.name]: e.target.value })}
       />
     )}
      {/* {showAddModal && (
        <AddTivProjectionModal
          show={showAddModal}
          onClose={handleCloseAddModal}
        />
     )} */}
     {showAddModal && (
        <AddTivProjection
          show={showAddModal}
          onClose={handleAddTIVModalClose}
          onSave={handleAddTIVModalSave}
        />
      )}
      {showDeleteModal && tivToDelete && (
        <DeleteModal
          show={showDeleteModal}
          onClose={handleDeleteModalClose}
          onDelete={handleDelete}
          item={tivToDelete}
        />
      )}
   </NavbarSidebarLayout>
 );
}

export default TivProjectionList;
