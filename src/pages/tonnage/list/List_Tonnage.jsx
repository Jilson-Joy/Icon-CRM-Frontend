// import React, { useState, useEffect } from 'react';
// import { ListPlus, PencilLine, Trash2, Search } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
// import { Button } from 'flowbite-react';
// import * as XLSX from 'xlsx';
// import useTonnage from '../../../hooks/useTonnage';
// import TonnageAddModal from '../form/TonnageAddModal';
// import TonnageEditModal from './TonnageEditModal';

// import './List_Tonnage.css';

// function List_Tonnage() {
//   const [search, setSearch] = useState('');
//   const [tonnageData, setTonnageData] = useState([]);
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [editTonnage, setEditTonnage] = useState(null);

//   const fetchTonnageData = useTonnage();

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetchTonnageData();
//       if (data) {
//         setTonnageData(data); 
//       }
//     };

//     fetchData();

//     return () => {};
//   }, []);

//   const filteredTonnage = tonnageData.filter(o => 
//     (o.name?.toLowerCase().includes(search.toLowerCase()) || 
//      o.code?.toLowerCase().includes(search.toLowerCase()))
//   );

//   const handleRemove = (id) => {
//     // Implement remove functionality here
//   };

//   const handleAddTonnage = (newTonnage) => {
//     setTonnageData([...tonnageData, newTonnage]);
//   };

//   const handleUpdateTonnage = (updatedTonnage) => {
//     setTonnageData(
//       tonnageData.map(t => t.id === updatedTonnage.id ? updatedTonnage : t)
//     );
//   };

//   const exportToExcel = () => {
//     const fileType =
//       'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
//     const fileExtension = '.xlsx';
//     const fileName = 'data_export';

//     const ws = XLSX.utils.json_to_sheet(tonnageData);
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

//   const handleEditClick = (tonnage) => {
//     setEditTonnage(tonnage);
//     setIsEditModalOpen(true);
//   };

//   return (
//     <NavbarSidebarLayout isFooter={false}>
//       <div className="TonnageTable_container">
//         <div className="TonnageTable">
//           <div className="TonnageTable_header">
//             <h1>Tonnage Table</h1>
//           </div>
//           <div className="TonnageTable_Addbtn">
//             <div className="TonnageTable_filter">
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
//               className="export-button focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3 me-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
//               Export to Excel
//             </button>
//             <Button
//               onClick={() => setIsAddModalOpen(true)}
//               className="btn btn-outline" color="dark">
//               <ListPlus /> Add Tonnage
//             </Button>
//           </div>
//           <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//             <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//               <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                 <tr>
//                   <th scope="col" className="px-6 py-3">
//                     Name
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Code
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Action
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredTonnage.map((d, index) => (
//                   <tr
//                     key={index}
//                     className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//                     <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                       {d.name}
//                     </td>
//                     <td className="px-6 py-4">{d.code}</td>
//                     <td className="flex items-center px-6 py-4">
//                       <button
//                         onClick={() => handleEditClick(d)}
//                         className="font-medium text-white-600 dark:text-white-500 hover:underline mr-3">
//                         <PencilLine />
//                       </button>
//                       <button
//                         onClick={() => handleRemove(d.id)}
//                         className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">
//                         <Trash2 />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//       {isAddModalOpen && (
//         <TonnageAddModal
//           onClose={() => setIsAddModalOpen(false)}
//           onAdd={handleAddTonnage}
//         />
//       )}
//       {isEditModalOpen && editTonnage && (
//         <TonnageEditModal
//           tonnage={editTonnage}
//           onClose={() => setIsEditModalOpen(false)}
//           onUpdate={handleUpdateTonnage}
//         />
//       )}
//     </NavbarSidebarLayout>
//   );
// }

// export default List_Tonnage;
import React, { useState, useEffect } from 'react';
import { ListPlus, PencilLine, Trash2, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import { Button } from 'flowbite-react';
import * as XLSX from 'xlsx';
import useTonnage from '../../../hooks/useTonnage';
import TonnageAddModal from '../form/TonnageAddModal';
import TonnageEditModal from './TonnageEditModal';
import DeleteModal from '../../../components/DeleteModal';
import { BASE_URL } from '../../../constants/constants';


import './List_Tonnage.css';

function List_Tonnage() {
  const [search, setSearch] = useState('');
  const [tonnageData, setTonnageData] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editTonnage, setEditTonnage] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [tonnageToDelete, setTonnageToDelete] = useState(null);




  const fetchTonnageData = useTonnage();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTonnageData();
      if (data) {
        setTonnageData(data); 
      }
    };

    fetchData();

    return () => {};
  }, []);

  const filteredTonnage = tonnageData.filter(o => 
    (o.name?.toLowerCase().includes(search.toLowerCase()) || 
     o.code?.toLowerCase().includes(search.toLowerCase()))
  );

  const handleRemove = (id) => {
    // Implement remove functionality here
  };

  const handleAddTonnage = (newTonnage) => {
    setTonnageData([...tonnageData, newTonnage]);
  };

  const handleUpdateTonnage = (updatedTonnage) => {
    setTonnageData(
      tonnageData.map(t => t.id === updatedTonnage.id ? updatedTonnage : t)
    );
  };

  const exportToExcel = () => {
    const fileType =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const fileName = 'data_export';

    const ws = XLSX.utils.json_to_sheet(tonnageData);
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

  const handleEditClick = (tonnage) => {
    setEditTonnage(tonnage);
    setIsEditModalOpen(true);
  };
// delete modal
  const handleDeleteModalOpen = (tonnage) => {
    setTonnageToDelete(tonnage);
    setShowDeleteModal(true);
  };

  const handleDeleteModalClose = () => {
    setTonnageToDelete(null);
    setShowDeleteModal(false);
  };
  const handleDelete = () => {
    axios
      .delete(`${BASE_URL}/CreateMachineTonnage.php`)
      .then((res) => {
        setRecords(records.filter((record) => record.id !== tonnageToDelete.id));
        handleDeleteModalClose();
      })
      .catch((err) => console.log(err));
  };
  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="TonnageTable_container">
        <div className="TonnageTable">
          <div className="TonnageTable_header">
            <h1>Tonnage Table</h1>
          </div>
          <div className="TonnageTable_Addbtn">
            <div className="TonnageTable_filter">
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
              className="btn btn-outline" color="dark">
              <ListPlus /> Add Tonnage
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
                {filteredTonnage.map((d, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {d.name}
                    </td>
                    <td className="px-6 py-4">{d.code}</td>
                    <td className="flex items-center px-6 py-4">
                      <button
                        onClick={() => handleEditClick(d)}
                        className="font-medium text-white-600 dark:text-white-500 hover:underline mr-3">
                        <PencilLine />
                      </button>
                      <button
                        onClick={() => handleDeleteModalOpen(d)}
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
      {isAddModalOpen && (
        <TonnageAddModal
          onClose={() => setIsAddModalOpen(false)}
          onAdd={handleAddTonnage}
        />
      )}
      {isEditModalOpen && editTonnage && (
        <TonnageEditModal
          tonnage={editTonnage}
          onClose={() => setIsEditModalOpen(false)}
          onUpdate={handleUpdateTonnage}
        />
      )}
       {showDeleteModal && tonnageToDelete && (
        <DeleteModal
          show={showDeleteModal}
          onClose={handleDeleteModalClose}
          onDelete={handleDelete}
          item={tonnageToDelete}
        />
      )}
    </NavbarSidebarLayout>
  );
}

export default List_Tonnage;

