// import React, { useEffect, useState } from 'react';
// import {
//   Trash2,
//   PencilLine,
//   ListPlus,
//   Search,
//   CircleArrowLeft,
//   CircleArrowRight
// } from 'lucide-react';
// import { Button } from 'flowbite-react';
// import './DealsList.css';
// import { Link } from 'react-router-dom';
// import * as XLSX from 'xlsx';
// import useDeals from '../../../hooks/useDeals';
// import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
// import DealModal from './DealModal';
// import { useDispatch, useSelector } from 'react-redux';
// import { setSelectedDeal } from '../../../components/redux/dealSlice';
// import AddDealsModal from '../create/AddDealsModal'; // Import the AddDealsModal component

// function DealsList() {
//   const [deals, setDeals] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(5);
//   const [selectedDealId, setSelectedDealId] = useState(null); // Track selected deal by ID
//   const [showAddDealsModal, setShowAddDealsModal] = useState(false); // State for AddDealsModal visibility
//   const [newDealData, setNewDealData] = useState({}); // State to store data for new deal
//   const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal visibility
//   const [isManager, setIsManager] = useState(false); // State to track user role

//   const { fetchDeals } = useDeals();
//   const dispatch = useDispatch();
//   const selectedDeal = useSelector((state) => state.deals.selectedDeal);

//   useEffect(() => {
//     const fetchDataFromApi = async () => {
//       try {
//         // Fetch deals
//         const fetchedDeals = await fetchDeals();
//         setDeals(fetchedDeals);
//         console.log(fetchedDeals);

//         // Fetch user data
//         const userData = JSON.parse(localStorage.getItem('user'));
//         const userRole = userData?.designation || '';
//         setIsManager(userRole === 'Manager');
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchDataFromApi();
//   }, []);

//   const handleAddDealsModalOpen = () => {
//     setShowAddDealsModal(true);
//   };

//   const handleAddDealsModalClose = () => {
//     setShowAddDealsModal(false);
//   };

//   const handleAddDealsModalSave = () => {
//     console.log('Saving deals...');
//     handleAddDealsModalClose();
//   };

//   const handleApprove = (id) => {
//     setDeals((prevDeals) =>
//       prevDeals.map((deal) =>
//         deal.id === id ? { ...deal, approved: !deal.approved, rejected: false } : deal
//       )
//     );
//   };

//   const handleReject = (id) => {
//     setDeals((prevDeals) =>
//       prevDeals.map((deal) =>
//         deal.id === id ? { ...deal, rejected: !deal.rejected, approved: false } : deal
//       )
//     );
//   };

//   const exportToExcel = () => {
//     const fileType =
//       'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
//     const fileExtension = '.xlsx';
//     const fileName = 'data_export';

//     const ws = XLSX.utils.json_to_sheet(deals);
//     const wb = { Sheets: { deals: ws }, SheetNames: ['deals'] };
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

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentDeals = deals.slice(indexOfFirstItem, indexOfLastItem);
//   const totalDeals = deals.length;
//   const totalPages = Math.ceil(totalDeals / itemsPerPage);

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleEditClick = (dealId) => {
//     const selectedDeal = currentDeals.find((deal) => deal.id === dealId);

//     if (selectedDeal) {
//       dispatch(setSelectedDeal(selectedDeal));
//       setIsModalOpen(true); // Open the modal
//     }
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false); // Close the modal
//     dispatch(setSelectedDeal(null)); // Clear the selected deal in the state
//   };

//   const handleSave = (updatedDeal) => {
//     setDeals((prevDeals) =>
//       prevDeals.map((deal) => (deal.id === updatedDeal.id ? { ...deal, ...updatedDeal } : deal))
//     );
//     handleModalClose(); // Close the modal after saving
//   };

//   return (
//     <NavbarSidebarLayout isFooter={false}>
//       <div className="tab_deal">
//         <div className="deals_table">
//           <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5 block">
//             <div className="top_deal flex flex-col md:flex-row items-center justify-between mb-3">
//               <div className="deal_search mb-2 md:mb-0">
//                 <span>
//                   <Search />
//                 </span>
//                 <input
//                   type="text"
//                   placeholder="Filter by Date"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//               </div>
//               <button
//                 onClick={exportToExcel}
//                 className="export-button focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3 md:me-2 mb-2 md:mb-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
//                 Export to Excel
//               </button>
//               <Button className="btn btn-outline" color="dark" onClick={handleAddDealsModalOpen}>
//                 <ListPlus /> Add New Deals
//               </Button>
//             </div>

//             <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//               <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                 <tr>
//                   <th scope="col" className="px-6 py-3">
//                     Prospect
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Deal Name
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     M/C Model
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Deal Type
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Expected Delivery Date
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Deal Suggested By
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Action
//                   </th>
//                   {isManager && (
//                     <th scope="col" className="px-6 py-3">
//                       Approval
//                     </th>
//                   )}
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentDeals.map((deal) => (
//                   <tr
//                     key={deal.id}
//                     className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//                     <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                       {deal.prospects_id}
//                     </td>
//                     <td className="px-6 py-4">{deal.deal_name}</td>
//                     <td className="px-6 py-4">{deal.machine_id}</td>
//                     <td className="px-6 py-4">{deal.deal_type_id}</td>
//                     <td className="px-6 py-4">{deal.expected_delivery_date}</td>
//                     <td className="px-6 py-4">{deal.suggested_by_id}</td>
//                     <td className="flex items-center px-6 py-4">
//                       <button
//                         className="font-medium text-white-600 dark:text-white-500 hover:underline mr-3"
//                         onClick={() => handleEditClick(deal.id)}>
//                         <PencilLine />
//                       </button>
//                       <button className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">
//                         <Trash2 />
//                       </button>
//                     </td>
//                     {isManager && (
//                       <td>
//                         <div className="flex items-center">
//                           <button
//                             onClick={() => handleApprove(deal.id)}
//                             className={`font-medium ${
//                               deal.approved
//                                 ? 'text-green-600 dark:text-green-500'
//                                 : 'text-blue-600 dark:text-blue-500'
//                             } hover:underline mr-3`}>
//                             {deal.approved ? 'Approved' : 'Approve'}
//                           </button>
//                           <button
//                             onClick={() => handleReject(deal.id)}
//                             className={`font-medium ${
//                               deal.rejected
//                                 ? 'text-red-600 dark:text-red-500'
//                                 : 'text-blue-600 dark:text-blue-500'
//                             } hover:underline`}>
//                             {deal.rejected ? 'Rejected' : 'Reject'}
//                           </button>
//                         </div>
//                       </td>
//                     )}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             {/* Pagination */}
//             <div className="flex justify-between items-center mt-5">
//               <div className="p-3">
//                 Page {currentPage} of {totalPages}
//               </div>
//               <div className="flex deal_pagination p-3">
//                 <button
//                   onClick={handlePreviousPage}
//                   disabled={currentPage === 1}
//                   className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}>
//                   <CircleArrowLeft /> Previous
//                 </button>
//                 <button
//                   onClick={handleNextPage}
//                   disabled={currentPage === totalPages}
//                   className={`pagination-button ${currentPage === totalPages ? 'disabled' : ''}`}>
//                   Next <CircleArrowRight />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {isModalOpen && selectedDeal && (
//         <DealModal selectedDeal={selectedDeal} onClose={handleModalClose} onSave={handleSave} />
//       )}
//       {showAddDealsModal && (
//         <AddDealsModal
//           show={showAddDealsModal}
//           onClose={handleAddDealsModalClose}
//           onSave={handleAddDealsModalSave}
//         />
//       )}
//     </NavbarSidebarLayout>
//   );
// }

// export default DealsList;

import React, { useEffect, useState } from 'react';
import {
  Trash2,
  PencilLine,
  ListPlus,
  Search,
  CircleArrowLeft,
  CircleArrowRight
} from 'lucide-react';
import { Button } from 'flowbite-react';
import './DealsList.css';
import { Link } from 'react-router-dom';
import * as XLSX from 'xlsx';
import useDeals from '../../../hooks/useDeals';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import DealModal from './DealModal';
import DeleteModal from '../../../components/DeleteModal'; // Import the DeleteModal component
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDeal } from '../../../components/redux/dealSlice';
import AddDealsModal from '../create/AddDealsModal'; // Import the AddDealsModal component

function DealsList() {
  const [deals, setDeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [selectedDealId, setSelectedDealId] = useState(null); // Track selected deal by ID
  const [showAddDealsModal, setShowAddDealsModal] = useState(false); // State for AddDealsModal visibility
  const [newDealData, setNewDealData] = useState({}); // State to store data for new deal
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal visibility
  const [isManager, setIsManager] = useState(false); // State to track user role

  const [showDeleteModal, setShowDeleteModal] = useState(false); // State for DeleteModal visibility
  const [dealToDelete, setDealToDelete] = useState(null); // State to track deal to be deleted

  const { fetchDeals } = useDeals();
  const dispatch = useDispatch();
  const selectedDeal = useSelector((state) => state.deals.selectedDeal);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        // Fetch deals
        const fetchedDeals = await fetchDeals();
        setDeals(fetchedDeals);
        console.log(fetchedDeals);

        // Fetch user data
        const userData = JSON.parse(localStorage.getItem('user'));
        const userRole = userData?.designation || '';
        setIsManager(userRole === 'Manager');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFromApi();
  }, []);

  const handleAddDealsModalOpen = () => {
    setShowAddDealsModal(true);
  };

  const handleAddDealsModalClose = () => {
    setShowAddDealsModal(false);
  };

  const handleAddDealsModalSave = () => {
    console.log('Saving deals...');
    handleAddDealsModalClose();
  };

  const handleApprove = (id) => {
    setDeals((prevDeals) =>
      prevDeals.map((deal) =>
        deal.id === id ? { ...deal, approved: !deal.approved, rejected: false } : deal
      )
    );
  };

  const handleReject = (id) => {
    setDeals((prevDeals) =>
      prevDeals.map((deal) =>
        deal.id === id ? { ...deal, rejected: !deal.rejected, approved: false } : deal
      )
    );
  };

  const exportToExcel = () => {
    const fileType =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const fileName = 'data_export';

    const ws = XLSX.utils.json_to_sheet(deals);
    const wb = { Sheets: { deals: ws }, SheetNames: ['deals'] };
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
  const currentDeals = deals.slice(indexOfFirstItem, indexOfLastItem);
  const totalDeals = deals.length;
  const totalPages = Math.ceil(totalDeals / itemsPerPage);

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

  const handleEditClick = (dealId) => {
    const selectedDeal = currentDeals.find((deal) => deal.id === dealId);

    if (selectedDeal) {
      dispatch(setSelectedDeal(selectedDeal));
      setIsModalOpen(true); // Open the modal
    }
  };

  const handleDeleteModalOpen = (deal) => {
    setDealToDelete(deal);
    setShowDeleteModal(true);
  };

  const handleDeleteModalClose = () => {
    setDealToDelete(null);
    setShowDeleteModal(false);
  };

  const handleDelete = () => {
    if (dealToDelete) {
      // Example of a delete request to the backend (axios.delete)
      axios
        .delete(`http://localhost:3000/deals/${dealToDelete.id}`)
        .then(() => {
          // Update frontend state after successful deletion
          setDeals((prevDeals) => prevDeals.filter((deal) => deal.id !== dealToDelete.id));
          handleDeleteModalClose(); // Close the modal after deleting
        })
        .catch((err) => console.error(err));
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
    dispatch(setSelectedDeal(null)); // Clear the selected deal in the state
  };

  const handleSave = (updatedDeal) => {
    setDeals((prevDeals) =>
      prevDeals.map((deal) => (deal.id === updatedDeal.id ? { ...deal, ...updatedDeal } : deal))
    );
    handleModalClose(); // Close the modal after saving
  };

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="tab_deal">
        <div className="deals_table">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5 block">
            <div className="top_deal flex flex-col md:flex-row items-center justify-between mb-3">
              <div className="deal_search mb-2 md:mb-0">
                <span>
                  <Search />
                </span>
                <input
                  type="text"
                  placeholder="Filter by Date"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button
                onClick={exportToExcel}
                className="export-button focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3 md:me-2 mb-2 md:mb-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                Export to Excel
              </button>
              <Button className="btn btn-outline" color="dark" onClick={handleAddDealsModalOpen}>
                <ListPlus /> Add New Deals
              </Button>
            </div>

            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Prospect
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Deal Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    M/C Model
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Deal Type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Expected Delivery Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Deal Suggested By
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
                {currentDeals.map((deal) => (
                  <tr
                    key={deal.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {deal.prospects_id}
                    </td>
                    <td className="px-6 py-4">{deal.deal_name}</td>
                    <td className="px-6 py-4">{deal.machine_id}</td>
                    <td className="px-6 py-4">{deal.deal_type_id}</td>
                    <td className="px-6 py-4">{deal.expected_delivery_date}</td>
                    <td className="px-6 py-4">{deal.suggested_by_id}</td>
                    <td className="flex items-center px-6 py-4">
                      <button
                        className="font-medium text-white-600 dark:text-white-500 hover:underline mr-3"
                        onClick={() => handleEditClick(deal.id)}>
                        <PencilLine />
                      </button>
                      <button
                        className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                        onClick={() => handleDeleteModalOpen(deal)}>
                        <Trash2 />
                      </button>
                    </td>
                    {isManager && (
                      <td>
                        <div className="flex items-center">
                          <button
                            onClick={() => handleApprove(deal.id)}
                            className={`font-medium ${
                              deal.approved
                                ? 'text-green-600 dark:text-green-500'
                                : 'text-blue-600 dark:text-blue-500'
                            } hover:underline mr-3`}>
                            {deal.approved ? 'Approved' : 'Approve'}
                          </button>
                          <button
                            onClick={() => handleReject(deal.id)}
                            className={`font-medium ${
                              deal.rejected
                                ? 'text-red-600 dark:text-red-500'
                                : 'text-blue-600 dark:text-blue-500'
                            } hover:underline`}>
                            {deal.rejected ? 'Rejected' : 'Reject'}
                          </button>
                        </div>
                      </td>
                    )}
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
      {isModalOpen && selectedDeal && (
        <DealModal selectedDeal={selectedDeal} onClose={handleModalClose} onSave={handleSave} />
      )}
      {showAddDealsModal && (
        <AddDealsModal
          show={showAddDealsModal}
          onClose={handleAddDealsModalClose}
          onSave={handleAddDealsModalSave}
        />
      )}
      {showDeleteModal && dealToDelete && (
        <DeleteModal
          show={showDeleteModal}
          onClose={handleDeleteModalClose}
          onDelete={handleDelete}
          item={dealToDelete} // Pass the deal to be deleted
        />
      )}
    </NavbarSidebarLayout>
  );
}

export default DealsList;
