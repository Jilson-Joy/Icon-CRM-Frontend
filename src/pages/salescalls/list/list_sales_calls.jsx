// import React, { useState, useEffect } from 'react';
// import { PencilLine, Trash2, Search, CircleArrowLeft, CircleArrowRight } from 'lucide-react';
// import './list_sales_calls.css';
// import { Link } from 'react-router-dom';
// import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
// import * as XLSX from 'xlsx';
// import { USER_ID_PREF } from '../../../constants/constants';
// import useSalesCalls from '../../../hooks/useSalesCalls';
// import SalesUpdateModal from './SalesUpdateModal';
// import SalesAddModal from './SalesAddModal';

// function SalesCallList() {
//   const { GetSalesCalls } = useSalesCalls();
//   const [salesCalls, setSalesCalls] = useState([]);
//   const [userId, setUserId] = useState(1);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(5); 
//   const [search, setSearch] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [editData, setEditData] = useState({});
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Function to handle opening the modal for editing
//   const handleOpenModal = (data) => {
//     setEditData(data);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const handleSaveEdit = () => {
//     const updatedSalesCalls = salesCalls.map((call) => {
//       if (call.id === editData.id) {
//         return { ...call, ...editData }; 
//       }
//       return call;
//     });
//     setSalesCalls(updatedSalesCalls); 
//     setShowModal(false); // Hide the modal
//   };

//   // Function to handle changes in the form fields
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditData((prevState) => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   useEffect(() => {
//     setUserId(localStorage.getItem(USER_ID_PREF));

//     const FetchSalesCallsList = async () => {
//       try {
//         const data = await GetSalesCalls(userId);
//         setSalesCalls(data);
//       } catch (error) {
//         console.error('Error fetching sales call data:', error);
//       }
//     };

//     FetchSalesCallsList();
//   }, [userId]);

//   const handleAddSalesCall = (newSalesCall) => {
//     setSalesCalls([...salesCalls, newSalesCall]);
//   };

//   // Function to export data to Excel
//   const exportToExcel = () => {
//     const fileType =
//       'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
//     const fileExtension = '.xlsx';
//     const fileName = 'SalesCall_Table';

//     const ws = XLSX.utils.json_to_sheet(salesCalls);
//     const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
//     const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
//     const dataFile = new Blob([excelBuffer], { type: fileType });
//     const url = URL.createObjectURL(dataFile);

//     const link = document.createElement('a');
//     link.href = url;
//     link.download = fileName + fileExtension;
//     document.body.appendChild(link);
//     link.click();
//     setTimeout(() => {
//       document.body.removeChild(link);
//       window.URL.revokeObjectURL(url);
//     }, 0);
//   };

//   const handleApprove = (id) => {
//     setSalesCalls((prevData) =>
//       prevData.map((call) =>
//         call.id === id ? { ...call, approved: !call.approved, rejected: false } : call
//       )
//     );
//   };

//   const handleReject = (id) => {
//     setSalesCalls((prevData) =>
//       prevData.map((call) =>
//         call.id === id ? { ...call, rejected: !call.rejected, approved: false } : call
//       )
//     );
//   };

//   const isManager =
//     localStorage.getItem('user') &&
//     JSON.parse(localStorage.getItem('user')).designation === 'Manager';

//   // Pagination logic
//   const filteredSalesCalls = salesCalls.filter((d) => {
//     const searchString = search.toLowerCase();
//     return (
//       searchString === '' ||
//       d.deal_id.toLowerCase().includes(searchString) || // Search by code
//       d.status.toLowerCase().includes(searchString) // Search by name
//     );
//   });

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredSalesCalls.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(filteredSalesCalls.length / itemsPerPage);

//   return (
//     <NavbarSidebarLayout isFooter={false}>
//       <div className="Salescalltable">
//         <div className="Salescalltable_header">
//           <h1>Sales Call Table</h1>
//         </div>
//         <div className="Salescalltable_Addbtn">
//           <div className="add_salesTable_filter">
//             <span>
//               <Search />
//             </span>
//             <input
//               type="search"
//               placeholder="Search Numbers"
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>

//           <button
//             onClick={exportToExcel}
//             className="export-button focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3 me-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
//             Export to Excel
//           </button>
//           <button type="button" className="Salescalltable_Add" onClick={() => setIsModalOpen(true)}>
//             Add +
//           </button>
//         </div>
//         <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//           <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//             <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//               <tr>
//                 <th scope="col" className="px-6 py-3">
//                   Deals
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Number
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Stage
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Finance
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Current date & time
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Meeting
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Support required
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Discussion
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Action
//                 </th>
//                 {isManager && (
//                     <th scope="col" className="px-6 py-3">
//                       Approval
//                     </th>
//                   )}
//               </tr>
//             </thead>
//             <tbody>
//               {currentItems.map((d, id) => (
//                   <tr
//                     key={id}
//                     className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
//                     <td className="px-6 py-4">{d.deal_id}</td>
//                     <td className="px-6 py-4">{d.telephone}</td>
//                     <td className="px-6 py-4">{d.stage_id}</td>
//                     <td className="px-6 py-4">{d.financier_id}</td>
//                     <td className="px-6 py-4">{d.created_on}</td>
//                     <td className="px-6 py-4">{d.next_call_date}</td>
//                     <td className="px-6 py-4">{d.status}</td>
//                     <td className="px-6 py-4">{d.discussion_points}</td>
//                     <td className="Salescalltable_btnsection ">
//                       <button
//                         onClick={() => handleOpenModal(d)}
//                         className="font-medium text-white-600 dark:text-white-500 hover:underline">
//                         <PencilLine />
//                       </button>

//                       <button
//                         onClick={() => handleDelete(d.id)}
//                         type="button"
//                         className="font-medium text-red-600 dark:text-red-500 hover:underline">
//                         <Trash2 />
//                       </button>
//                     </td>
//                     {isManager && (
//                       <td>
//                         <div className="flex items-center">
//                           <button
//                             onClick={() => handleApprove(d.id)}
//                             className={`font-medium ${
//                               d.approved
//                                 ? 'text-green-600 dark:text-green-500'
//                                 : 'text-blue-600 dark:text-blue-500'
//                             } hover:underline mr-3`}>
//                             {d.approved ? 'Approved' : 'Approve'}
//                           </button>
//                           <button
//                             onClick={() => handleReject(d.id)}
//                             className={`font-medium ${
//                               d.rejected
//                                 ? 'text-red-600 dark:text-red-500'
//                                 : 'text-blue-600 dark:text-blue-500'
//                             } hover:underline`}>
//                             {d.rejected ? 'Rejected' : 'Reject'}
//                           </button>
//                         </div>
//                       </td>
//                     )}
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//           <div className="flex justify-between items-center mt-5">
//               <div>
//                 Page {currentPage} of {totalPages}
//               </div>
//               <div className="flex">
//                 <button
//                   onClick={() => setCurrentPage(currentPage - 1)}
//                   disabled={currentPage === 1}
//                   className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}>
//                   <CircleArrowLeft /> Previous
//                 </button>
//                 <button
//                   onClick={() => setCurrentPage(currentPage + 1)}
//                   disabled={currentPage === totalPages}
//                   className={`pagination-button ${
//                     currentPage === totalPages ? 'disabled' : ''
//                   }`}>
//                   Next <CircleArrowRight />
//                 </button>
//               </div>
//             </div>
//         </div>

//       </div>
//       {isModalOpen && (
//         <SalesAddModal
//           isOpen={isModalOpen}
//           onClose={() => setIsModalOpen(false)}
//           onSave={handleAddSalesCall}
//         />
//       )}
//       {showModal && (
//         <SalesUpdateModal
//           show={showModal}
//           onClose={handleCloseModal}
//           onSave={handleSaveEdit}
//           formData={editData}
//           handleChange={handleChange}
//         />
//       )}
//     </NavbarSidebarLayout>
//   );
// }

// export default SalesCallList;

import React, { useState, useEffect } from 'react';
import { PencilLine, Trash2, Search, CircleArrowLeft, CircleArrowRight } from 'lucide-react';
import './list_sales_calls.css';
import { Link } from 'react-router-dom';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import * as XLSX from 'xlsx';
import { USER_ID_PREF } from '../../../constants/constants';
import useSalesCalls from '../../../hooks/useSalesCalls';
import SalesUpdateModal from './SalesUpdateModal';
import SalesAddModal from './SalesAddModal';
import DeleteModal from '../../../components/DeleteModal'


function SalesCallList() {
  const { GetSalesCalls } = useSalesCalls();
  const [salesCalls, setSalesCalls] = useState([]);
  const [userId, setUserId] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5); 
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleOpenModal = (data) => {
    setEditData(data);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveEdit = () => {
    const updatedSalesCalls = salesCalls.map((call) => {
      if (call.id === editData.id) {
        return { ...call, ...editData }; 
      }
      return call;
    });
    setSalesCalls(updatedSalesCalls); 
    setShowModal(false); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  useEffect(() => {
    setUserId(localStorage.getItem(USER_ID_PREF));

    const FetchSalesCallsList = async () => {
      try {
        const data = await GetSalesCalls(userId);
        setSalesCalls(data);
      } catch (error) {
        console.error('Error fetching sales call data:', error);
      }
    };

    FetchSalesCallsList();
  }, [userId]);

  const handleAddSalesCall = (newSalesCall) => {
    setSalesCalls([...salesCalls, newSalesCall]);
  };

  const exportToExcel = () => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const fileName = 'SalesCall_Table';

    const ws = XLSX.utils.json_to_sheet(salesCalls);
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

  const handleApprove = (id) => {
    setSalesCalls((prevData) =>
      prevData.map((call) =>
        call.id === id ? { ...call, approved: !call.approved, rejected: false } : call
      )
    );
  };

  const handleReject = (id) => {
    setSalesCalls((prevData) =>
      prevData.map((call) =>
        call.id === id ? { ...call, rejected: !call.rejected, approved: false } : call
      )
    );
  };

  const isManager =
    localStorage.getItem('user') &&
    JSON.parse(localStorage.getItem('user')).designation === 'Manager';

  const handleOpenDeleteModal = (item) => {
    setItemToDelete(item);
    setDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setItemToDelete(null);
    setDeleteModalOpen(false);
  };

  const handleDelete = () => {
    setSalesCalls((prevData) => prevData.filter((call) => call.id !== itemToDelete.id));
    handleCloseDeleteModal();
  };

  const filteredSalesCalls = salesCalls.filter((d) => {
    const searchString = search.toLowerCase();
    return (
      searchString === '' ||
      d.deal_id.toLowerCase().includes(searchString) ||
      d.status.toLowerCase().includes(searchString)
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredSalesCalls.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredSalesCalls.length / itemsPerPage);

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="Salescalltable">
        <div className="Salescalltable_header">
          <h1>Sales Call Table</h1>
        </div>
        <div className="Salescalltable_Addbtn">
          <div className="add_salesTable_filter">
            <span>
              <Search />
            </span>
            <input
              type="search"
              placeholder="Search Numbers"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <button
            onClick={exportToExcel}
            className="export-button focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3 me-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Export to Excel
          </button>
          <button type="button" className="Salescalltable_Add" onClick={() => setIsModalOpen(true)}>
            Add +
          </button>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Deals
                </th>
                <th scope="col" className="px-6 py-3">
                  Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Stage
                </th>
                <th scope="col" className="px-6 py-3">
                  Finance
                </th>
                <th scope="col" className="px-6 py-3">
                  Current date & time
                </th>
                <th scope="col" className="px-6 py-3">
                  Meeting
                </th>
                <th scope="col" className="px-6 py-3">
                  Support required
                </th>
                <th scope="col" className="px-6 py-3">
                  Discussion
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
              {currentItems.map((d, id) => (
                  <tr
                    key={id}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <td className="px-6 py-4">{d.deal_id}</td>
                    <td className="px-6 py-4">{d.telephone}</td>
                    <td className="px-6 py-4">{d.stage_id}</td>
                    <td className="px-6 py-4">{d.financier_id}</td>
                    <td className="px-6 py-4">{d.created_on}</td>
                    <td className="px-6 py-4">{d.next_call_date}</td>
                    <td className="px-6 py-4">{d.status}</td>
                    <td className="px-6 py-4">{d.discussion_points}</td>
                    <td className="Salescalltable_btnsection ">
                      <button
                        onClick={() => handleOpenModal(d)}
                        className="font-medium text-white-600 dark:text-white-500 hover:underline">
                        <PencilLine />
                      </button>

                      <button
                        onClick={() => handleOpenDeleteModal(d)}
                        type="button"
                        className="font-medium text-red-600 dark:text-red-500 hover:underline">
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
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}>
                  <CircleArrowLeft /> Previous
                </button>
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`pagination-button ${
                    currentPage === totalPages ? 'disabled' : ''
                  }`}>
                  Next <CircleArrowRight />
                </button>
              </div>
            </div>
        </div>

      </div>
      {isModalOpen && (
        <SalesAddModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleAddSalesCall}
        />
      )}
      {showModal && (
        <SalesUpdateModal
          show={showModal}
          onClose={handleCloseModal}
          onSave={handleSaveEdit}
          formData={editData}
          handleChange={handleChange}
        />
      )}
      <DeleteModal
        show={deleteModalOpen}
        onClose={handleCloseDeleteModal}
        onDelete={handleDelete}
        item={itemToDelete}
      />
    </NavbarSidebarLayout>
  );
}

export default SalesCallList;

