
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Button } from 'flowbite-react';
// import { ListPlus, PencilLine, Trash2, Search } from 'lucide-react';
// import * as XLSX from 'xlsx';
// import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
// import Add_Designation from '../form/Add_Designation';
// import Designation_Update from '../update/Designation_Update';
// import './Table_AddDesignation.css';

// function Table_AddDesignation() {
//   const [records, setRecords] = useState([]);
//   const [search, setSearch] = useState('');

//   // add
//   const [showAddDesignationModal, setShowAddDesignationModal] = useState(false);

//   // update
//   const [showUpdateDesignationModal, setShowUpdateDesignationModal] = useState(false);
//   const [selectedDesignation, setSelectedDesignation] = useState(null);

//   // Add Modal
//   const handleAddDesignationModalOpen = () => {
//     setShowAddDesignationModal(true);
//   };
//   const handleAddDesignationModalClose = () => {
//     setShowAddDesignationModal(false);
//   };

//   const handleAddDesignationModalSave = () => {
//     axios.get('http://localhost:3000/add_designation')
//       .then((res) => setRecords(res.data))
//       .catch((err) => console.log(err));
//     handleAddDesignationModalClose();
//   };

//   // Update Modal
//   const handleUpdateDesignationModalOpen = (designation) => {
//     setSelectedDesignation(designation);
//     setShowUpdateDesignationModal(true);
//   };
//   const handleUpdateDesignationModalClose = () => {
//     setShowUpdateDesignationModal(false);
//     setSelectedDesignation(null);
//   };

//   const handleUpdateDesignationModalSave = () => {
//     axios.get('http://localhost:3000/add_designation')
//       .then((res) => setRecords(res.data))
//       .catch((err) => console.log(err));
//     handleUpdateDesignationModalClose();
//   };

//   const exportToExcel = () => {
//     const fileType =
//       'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
//     const fileExtension = '.xlsx';
//     const fileName = 'data_export';

//     const ws = XLSX.utils.json_to_sheet(records);
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

//   const handleDelete = (id) => {
//     const confirmDelete = window.confirm('Would you like to delete?');
//     if (confirmDelete) {
//       axios
//         .delete(`http://localhost:3000/add_designation/${id}`)
//         .then((res) => {
//           setRecords(records.filter((record) => record.id !== id));
//         })
//         .catch((err) => console.log(err));
//     }
//   };

//   useEffect(() => {
//     axios
//       .get('http://localhost:3000/add_designation')
//       .then((res) => setRecords(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   const filteredRecords = records.filter((record) =>
//     Object.values(record).some(
//       (value) => typeof value === 'string' && value.toLowerCase().includes(search.toLowerCase())
//     )
//   );

//   return (
//     <NavbarSidebarLayout isFooter={false}>
//       <div className="dsgntntable_div">
//         <div className="designation_table">
//           <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//             <h1 className="designation_heading">Add Designation</h1>

//             <div className="AddDesignation_header">
//               <div className="add_designation_filter">
//                 <span>
//                   <Search />
//                 </span>
//                 <input
//                   type="search"
//                   placeholder="Search here"
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                 />
//               </div>
//               <button
//                 onClick={exportToExcel}
//                 className="export-button focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
//                 Export to Excel
//               </button>
//               <Button className="btn btn-outline" color="dark" onClick={handleAddDesignationModalOpen}>
//                 <ListPlus /> Add New Designation
//               </Button>
//             </div>

//             <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//               <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                 <tr>
//                   <th scope="col" className="px-6 py-3">
//                     Code
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Name
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Department
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Action
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredRecords.map((d, i) => (
//                   <tr
//                     key={i}
//                     className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//                     <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                       {d.code}
//                     </td>
//                     <td className="px-6 py-4">{d.name}</td>
//                     <td className="px-6 py-4">{d.Department}</td>
//                     <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                       <div className="action-buttons">
//                         <button
//                           onClick={() => handleUpdateDesignationModalOpen(d)}
//                           className="">
//                           <PencilLine />
//                         </button>
//                         <button
//                           className="font-medium text-red-600 dark:text-red-500 hover:underline"
//                           onClick={() => handleDelete(d.id)}>
//                           <Trash2 />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//       {showAddDesignationModal && (
//         <Add_Designation
//           show={showAddDesignationModal}
//           onClose={handleAddDesignationModalClose}
//           onSave={handleAddDesignationModalSave}
//         />
//       )}
//       {selectedDesignation && (
//         <Designation_Update
//           show={showUpdateDesignationModal}
//           onClose={handleUpdateDesignationModalClose}
//           onSave={handleUpdateDesignationModalSave}
//           designation={selectedDesignation}
//         />
//       )}
//     </NavbarSidebarLayout>
//   );
// }

// export default Table_AddDesignation;



import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'flowbite-react';
import { ListPlus, PencilLine, Trash2, Search } from 'lucide-react';
import * as XLSX from 'xlsx';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import Add_Designation from '../form/Add_Designation';
import Designation_Update from '../update/Designation_Update';
import DeleteModal from '../../../components/DeleteModal';
import './Table_AddDesignation.css';

function Table_AddDesignation() {
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState('');

  const [showAddDesignationModal, setShowAddDesignationModal] = useState(false);
  const [showUpdateDesignationModal, setShowUpdateDesignationModal] = useState(false);
  const [selectedDesignation, setSelectedDesignation] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [designationToDelete, setDesignationToDelete] = useState(null);

  const handleAddDesignationModalOpen = () => {
    setShowAddDesignationModal(true);
  };

  const handleAddDesignationModalClose = () => {
    setShowAddDesignationModal(false);
  };

  const handleAddDesignationModalSave = () => {
    axios.get('http://localhost:3000/add_designation')
      .then((res) => setRecords(res.data))
      .catch((err) => console.log(err));
    handleAddDesignationModalClose();
  };

  const handleUpdateDesignationModalOpen = (designation) => {
    setSelectedDesignation(designation);
    setShowUpdateDesignationModal(true);
  };

  const handleUpdateDesignationModalClose = () => {
    setShowUpdateDesignationModal(false);
    setSelectedDesignation(null);
  };

  const handleUpdateDesignationModalSave = () => {
    axios.get('http://localhost:3000/add_designation')
      .then((res) => setRecords(res.data))
      .catch((err) => console.log(err));
    handleUpdateDesignationModalClose();
  };

  const handleDeleteModalOpen = (designation) => {
    setDesignationToDelete(designation);
    setShowDeleteModal(true);
  };

  const handleDeleteModalClose = () => {
    setDesignationToDelete(null);
    setShowDeleteModal(false);
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/add_designation/${designationToDelete.id}`)
      .then((res) => {
        setRecords(records.filter((record) => record.id !== designationToDelete.id));
        handleDeleteModalClose();
      })
      .catch((err) => console.log(err));
  };

  const exportToExcel = () => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
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
    axios
      .get('http://localhost:3000/add_designation')
      .then((res) => setRecords(res.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredRecords = records.filter((record) =>
    Object.values(record).some(
      (value) => typeof value === 'string' && value.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="dsgntntable_div">
        <div className="designation_table">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <h1 className="designation_heading">Add Designation</h1>

            <div className="AddDesignation_header">
              <div className="add_designation_filter">
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
              <Button className="btn btn-outline" color="dark" onClick={handleAddDesignationModalOpen}>
                <ListPlus /> Add New Designation
              </Button>
            </div>

            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Code
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Department
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredRecords.map((d, i) => (
                  <tr
                    key={i}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {d.code}
                    </td>
                    <td className="px-6 py-4">{d.name}</td>
                    <td className="px-6 py-4">{d.Department}</td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="action-buttons">
                        <button
                          onClick={() => handleUpdateDesignationModalOpen(d)}
                          className="">
                          <PencilLine />
                        </button>
                        <button
                          className="font-medium text-red-600 dark:text-red-500 hover:underline"
                          onClick={() => handleDeleteModalOpen(d)}>
                          <Trash2 />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {showAddDesignationModal && (
        <Add_Designation
          show={showAddDesignationModal}
          onClose={handleAddDesignationModalClose}
          onSave={handleAddDesignationModalSave}
        />
      )}
      {selectedDesignation && (
        <Designation_Update
          show={showUpdateDesignationModal}
          onClose={handleUpdateDesignationModalClose}
          onSave={handleUpdateDesignationModalSave}
          designation={selectedDesignation}
        />
      )}
      {showDeleteModal && designationToDelete && (
        <DeleteModal
          show={showDeleteModal}
          onClose={handleDeleteModalClose}
          onDelete={handleDelete}
          item={designationToDelete}
        />
      )}
    </NavbarSidebarLayout>
  );
}

export default Table_AddDesignation;

