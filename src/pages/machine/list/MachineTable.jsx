// import React, { useState, useEffect } from 'react';
// import { PencilLine, Trash2, Search } from 'lucide-react';
// import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
// import * as XLSX from 'xlsx';
// import useMachine from '../../../hooks/useMachine';
// import MachineEditModal from './MachineEditModal';
// import MachineAddModal from './MachineAddModal';
// import './MachineTable.css';

// function MachineTable() {
//   const { GetMachineList } = useMachine();
//   const [machineData, setMachineData] = useState([]);
//   const [search, setSearch] = useState('');
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [formData, setFormData] = useState({});
//   const [selectedMachineId, setSelectedMachineId] = useState(null);

//   const exportToExcel = () => {
//     const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
//     const fileExtension = '.xlsx';
//     const fileName = 'Machine_Data_export';

//     const ws = XLSX.utils.json_to_sheet(machineData);
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

//   const handleEdit = (machine) => {
//     setSelectedMachineId(machine.id);
//     setFormData({
//       name: machine.name,
//       code: machine.code,
//       price: machine.price,
//       modelNo: machine.modelNo,
//       oem: machine.oem_id,
//       tonnage: machine.tonnage_id,
//       segment: machine.segment_id,
//     });
//     setShowEditModal(true);
//   };

//   const handleSave = async (data) => {
//     try {
//       // Call an API to update the machine data in your backend
//       // For example:
//       // await updateMachine(data);

//       // Update the machineData state with the edited data
//       setMachineData((prevData) =>
//         prevData.map((machine) => (machine.id === selectedMachineId ? { ...machine, ...data } : machine))
//       );

//       // Close the modal
//       setShowEditModal(false);
//       setSelectedMachineId(null);
//     } catch (error) {
//       console.error('Error saving machine data:', error);
//       // Handle error
//     }
//   };

//   const handleAdd = () => {
//     setShowAddModal(true);
//   };

//   const handleAddClose = () => {
//     setShowAddModal(false);
//   };

//   useEffect(() => {
//     const fetchMachineList = async () => {
//       try {
//         const data = await GetMachineList();
//         setMachineData(data);
//       } catch (error) {
//         console.error('Error fetching machine data:', error);
//       }
//     };

//     fetchMachineList();
//   }, [GetMachineList]);

  

//   return (
//     <NavbarSidebarLayout isFooter={false}>
//       <div className="MachineTable_container">
//         <div className="MachineTable">
//           <div className="MachineTable_header">
//             <h1>Machine Table</h1>
//           </div>
//           <div className="MachineTable_Addbtn">
//             <div className="MachineTable_filter">
//               <span>
//                 <Search />
//               </span>
//               <input
//                 type="search"
//                 placeholder="Search Name"
//                 onChange={(e) => setSearch(e.target.value)}
//               />
//             </div>
//             <button
//               onClick={exportToExcel}
//               className="export-button focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
//               Export to Excel
//             </button>
//             <div className="MachineTable_Addbtn">
//               {/* Add button to open the add modal */}
//               <button onClick={handleAdd} type="button" className="MachineTable_Add">
//                 Add +
//               </button>
//             </div>
//           </div>
//           <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//             <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//               <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                 <tr>
//                   <th scope="col" className="px-6 py-3">Name</th>
//                   <th scope="col" className="px-6 py-3">Code</th>
//                   <th scope="col" className="px-6 py-3">Price</th>
//                   <th scope="col" className="px-6 py-3">Model Number</th>
//                   <th scope="col" className="px-6 py-3">OEM</th>
//                   <th scope="col" className="px-6 py-3">Tonnage</th>
//                   <th scope="col" className="px-6 py-3">Segment</th>
//                   <th scope="col" className="px-6 py-3">Created On</th>
//                   <th scope="col" className="px-6 py-3">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {machineData
//                   .filter((d) => {
//                     const searchString = search.toLowerCase();
//                     return (
//                       searchString === '' ||
//                       d.name.toLowerCase().includes(searchString) ||
//                       d.price.toLowerCase().includes(searchString)
//                     );
//                   })
//                   .map((d) => (
//                     <tr
//                       key={d.id}
//                       className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
//                       <td className="px-6 py-4">{d.name}</td>
//                       <td className="px-6 py-4">{d.code}</td>
//                       <td className="px-6 py-4">{d.price}</td>
//                       <td className="px-6 py-4">{d.model_name}</td>
//                       <td className="px-6 py-4">{d.oem_id}</td>
//                       <td className="px-6 py-4">{d.tonnage_id}</td>
//                       <td className="px-6 py-4">{d.segment_id}</td>
//                       <td className="px-6 py-4">{d.created_on}</td>
//                       <td className="MachineTable_btnsection px-6 py-4">
//                         <button
//                           onClick={() => handleEdit(d)}
//                           className="font-medium text-white-600 dark:text-white-500 hover:underline">
//                           <PencilLine />
//                         </button>
//                         <button
//                           onClick={() => handleDelete(d.id)}
//                           type="button"
//                           className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">
//                           <Trash2 />
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//       <MachineEditModal
//         show={showEditModal}
//         onClose={() => setShowEditModal(false)}
//         onSave={handleSave}
//         formData={formData}
//       />
//       <MachineAddModal
//         show={showAddModal}
//         onClose={handleAddClose}
//         // Add any necessary props for MachineAddModal here
//       />
//     </NavbarSidebarLayout>
//   );
// }

// export default MachineTable;







import React, { useState, useEffect } from 'react';
import { PencilLine, Trash2, Search, CircleArrowLeft, CircleArrowRight } from 'lucide-react';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import * as XLSX from 'xlsx';
import useMachine from '../../../hooks/useMachine';
import MachineEditModal from './MachineEditModal';
import MachineAddModal from './MachineAddModal';
import DeleteModal from '../../../components/DeleteModal'; // Import the delete modal
import './MachineTable.css';

function MachineTable() {
  const { GetMachineList } = useMachine();
  const [machineData, setMachineData] = useState([]);
  const [search, setSearch] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({});
  const [selectedMachineId, setSelectedMachineId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [showDeleteModal, setShowDeleteModal] = useState(false); // State to control Delete modal
  const [machineToDelete, setMachineToDelete] = useState(null); // State for the machine to be deleted

  const exportToExcel = () => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const fileName = 'Machine_Data_export';

    const ws = XLSX.utils.json_to_sheet(machineData);
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

  const handleEdit = (machine) => {
    setSelectedMachineId(machine.id);
    setFormData({
      name: machine.name,
      code: machine.code,
      price: machine.price,
      modelNo: machine.modelNo,
      oem: machine.oem_id,
      tonnage: machine.tonnage_id,
      segment: machine.segment_id,
    });
    setShowEditModal(true);
  };

  const handleSave = async (data) => {
    try {
      // Call an API to update the machine data in your backend
      // For example:
      // await updateMachine(data);

      // Update the machineData state with the edited data
      setMachineData((prevData) =>
        prevData.map((machine) => (machine.id === selectedMachineId ? { ...machine, ...data } : machine))
      );

      // Close the modal
      setShowEditModal(false);
      setSelectedMachineId(null);
    } catch (error) {
      console.error('Error saving machine data:', error);
      // Handle error
    }
  };

  const handleAdd = () => {
    setShowAddModal(true);
  };

  const handleAddClose = () => {
    setShowAddModal(false);
  };

  useEffect(() => {
    const fetchMachineList = async () => {
      try {
        const data = await GetMachineList();
        setMachineData(data);
      } catch (error) {
        console.error('Error fetching machine data:', error);
      }
    };

    fetchMachineList();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = machineData.slice(indexOfFirstItem, indexOfLastItem);

  const totalItems = machineData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleOpenDeleteModal = (machine) => {
    setMachineToDelete(machine);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setMachineToDelete(null);
    setShowDeleteModal(false);
  };

  const handleDelete = async () => {
    try {
      // Call an API to delete the machine data in your backend
      // For example:
      // await deleteMachine(machineToDelete.id);

      // Update the machineData state by filtering out the deleted machine
      setMachineData((prevData) => prevData.filter((machine) => machine.id !== machineToDelete.id));

      // Close the modal
      handleCloseDeleteModal();
    } catch (error) {
      console.error('Error deleting machine:', error);
      // Handle error
    }
  };

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="MachineTable_container">
        <div className="MachineTable">
          <div className="MachineTable_header">
            <h1>Machine Table</h1>
          </div>
          <div className="MachineTable_Addbtn">
            <div className="MachineTable_filter">
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
              className="export-button focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Export to Excel
            </button>
            <div className="MachineTable_Addbtn">
              <button onClick={handleAdd} type="button" className="MachineTable_Add">
                Add +
              </button>
            </div>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">Name</th>
                  <th scope="col" className="px-6 py-3">Code</th>
                  <th scope="col" className="px-6 py-3">Price</th>
                  <th scope="col" className="px-6 py-3">Model Number</th>
                  <th scope="col" className="px-6 py-3">OEM</th>
                  <th scope="col" className="px-6 py-3">Tonnage</th>
                  <th scope="col" className="px-6 py-3">Segment</th>
                  <th scope="col" className="px-6 py-3">Created On</th>
                  <th scope="col" className="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((machine) => (
                  <tr
                    key={machine.id}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <td className="px-6 py-4">{machine.name}</td>
                    <td className="px-6 py-4">{machine.code}</td>
                    <td className="px-6 py-4">{machine.price}</td>
                    <td className="px-6 py-4">{machine.modelNo}</td>
                    <td className="px-6 py-4">{machine.oem}</td>
                    <td className="px-6 py-4">{machine.tonnage}</td>
                    <td className="px-6 py-4">{machine.segment}</td>
                    <td className="px-6 py-4">{machine.created_on}</td>
                    <td className="MachineTable_btnsection px-6 py-4">
                      <button
                        onClick={() => handleEdit(machine)}
                        className="font-medium text-white-600 dark:text-white-500 hover:underline"
                      >
                        <PencilLine />
                      </button>
                      <button
                        onClick={() => handleOpenDeleteModal(machine)}
                        type="button"
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
      </div>

      <MachineEditModal
        show={showEditModal}
        onClose={() => setShowEditModal(false)}
        onSave={handleSave}
        formData={formData}
      />

      <MachineAddModal
        show={showAddModal}
        onClose={() => setShowAddModal(false)}
        // Add any necessary props for MachineAddModal here
      />

      <DeleteModal
        show={showDeleteModal}
        onClose={handleCloseDeleteModal}
        onDelete={handleDelete}
        machine={machineToDelete}
      />

      <div className="flex justify-between items-center mt-5">
        <div>
          Page {currentPage} of {totalPages}
        </div>
        <div className="flex">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}
          >
            <CircleArrowLeft /> Previous
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastItem >= totalItems}
            className={`pagination-button ${indexOfLastItem >= totalItems ? 'disabled' : ''}`}
          >
            Next <CircleArrowRight />
          </button>
        </div>
      </div>
    </NavbarSidebarLayout>
  );
}

export default MachineTable;
