// import React, { useState, useEffect } from 'react';
// import { Label, TextInput, Button } from 'flowbite-react';
// import { PencilLine, Trash2, Search, ListPlus } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
// import * as XLSX from 'xlsx';
// import BranchModalEdit from './BranchModalEdit';
// import Add_Branch_Modal from '../create/Add_Branch_Modal';
// import './list_branch.css';

// function BranchList() {
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [showAddDealsModal, setShowAddDealsModal] = useState(false);
//   const [formData, setFormData] = useState({ id: '', name: '', code: '' });

//   useEffect(() => {
//     axios
//       .get('http://localhost:3004/branchdb')
//       .then((res) => setData(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   const exportToExcel = () => {
//     const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
//     const fileExtension = '.xlsx';
//     const fileName = 'data_export';

//     const ws = XLSX.utils.json_to_sheet(data);
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
//     const confirm = window.confirm('Would you like to delete?');
//     if (confirm) {
//       axios
//         .delete('http://localhost:3004/branchdb/' + id)
//         .then((res) => {
//           setData(data.filter(item => item.id !== id));
//         })
//         .catch((err) => console.log(err));
//     }
//   };

//   const handleEditClick = (branch) => {
//     setFormData(branch);
//     setShowModal(true);
//   };

//   const handleSave = () => {
//     // Update the data locally after saving
//     const updatedData = data.map((item) => (item.id === formData.id ? formData : item));
//     setData(updatedData);
//     setShowModal(false);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleAddDealsModalOpen = () => {
//     setShowAddDealsModal(true);
//   };

//   const handleAddDealsModalClose = () => {
//     setShowAddDealsModal(false);
//   };

//   const handleAddDealsModalSave = (newDeal) => {
//     // Handle saving new deal data here
//     console.log('New deal data:', newDeal);
//     setData([...data, newDeal]);
//     handleAddDealsModalClose();
//   };

//   return (
//     <NavbarSidebarLayout isFooter={false}>
//       <div className="AddBranchtable_container">
//         <div className="AddBranchtable">
//           <div className="AddBranchtable_header">
//             <h1>Branch Table</h1>
//           </div>
//           <div className="AddBranchtable_Addbtn">
//             <div className="add_branch_filter">
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
//             <Button className="btn btn-outline" color="dark" onClick={handleAddDealsModalOpen}>
//               <ListPlus /> Add New 
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
//                 {data
//                   .filter((d) => {
//                     return search.toLowerCase() === '' ? d : d.name.toLowerCase().includes(search.toLowerCase());
//                   })
//                   .map((d, index) => (
//                     <tr
//                       key={index}
//                       className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
//                       <td className="px-6 py-4">{d.name}</td>
//                       <td className="px-6 py-4">{d.code}</td>
//                       <td className="AddBranchtable_btnsection px-6 py-4">
//                         <button
//                           onClick={() => handleEditClick(d)}
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
//       <BranchModalEdit
//         show={showModal}
//         onClose={() => setShowModal(false)}
//         onSave={handleSave}
//         formData={formData}
//         handleChange={handleChange}
//       />
//       {showAddDealsModal && (
//         <Add_Branch_Modal
//           show={showAddDealsModal}
//           onClose={handleAddDealsModalClose}
//           onSave={handleAddDealsModalSave}
//         />
//       )}
//     </NavbarSidebarLayout>
//   );
// }

// export default BranchList;






import React, { useState, useEffect } from 'react';
import { Label, TextInput, Button } from 'flowbite-react';
import { PencilLine, Trash2, Search, ListPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import * as XLSX from 'xlsx';
import BranchModalEdit from './BranchModalEdit';
import Add_Branch_Modal from '../create/Add_Branch_Modal';
import DeleteModal from '../../../components/DeleteModal';

import './list_branch.css';

function BranchList() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showAddDealsModal, setShowAddDealsModal] = useState(false);
  const [formData, setFormData] = useState({ id: '', name: '', code: '' });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [branchToDelete, setBranchToDelete] = useState(null);


  useEffect(() => {
    axios
      .get('http://localhost:3004/branchdb')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

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
// deleteModal
const handleDeleteModalOpen = (branch) => {
  setBranchToDelete(branch);
  setShowDeleteModal(true);
};

const handleDeleteModalClose = () => {
  setBranchToDelete(null);
  setShowDeleteModal(false);
};


  const handleDelete = (id) => {
    
      axios
        .delete(`http://localhost:3004/branchdb/${branchToDelete.id}`)
        .then((res) => {
          setRecords(records.filter((record) => record.id !== branchToDelete.id));
          handleDeleteModalClose();
        })
        .catch((err) => console.log(err));
    
  };

  const handleEditClick = (branch) => {
    setFormData(branch);
    setShowModal(true);
  };

  const handleSave = () => {
    // Update the data locally after saving
    const updatedData = data.map((item) => (item.id === formData.id ? formData : item));
    setData(updatedData);
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddDealsModalOpen = () => {
    setShowAddDealsModal(true);
  };

  const handleAddDealsModalClose = () => {
    setShowAddDealsModal(false);
  };

  const handleAddDealsModalSave = (newDeal) => {
    // Handle saving new deal data here
    console.log('New deal data:', newDeal);
    setData([...data, newDeal]);
    handleAddDealsModalClose();
  };

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="AddBranchtable_container">
        <div className="AddBranchtable">
          <div className="AddBranchtable_header">
            <h1>Branch Table</h1>
          </div>
          <div className="AddBranchtable_Addbtn">
            <div className="add_branch_filter">
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
              className="export-button focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              Export to Excel
            </button>
            <Button className="btn btn-outline" color="dark" onClick={handleAddDealsModalOpen}>
              <ListPlus /> Add New 
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
                {data
                  .filter((d) => {
                    return search.toLowerCase() === '' ? d : d.name.toLowerCase().includes(search.toLowerCase());
                  })
                  .map((d, index) => (
                    <tr
                      key={index}
                      className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <td className="px-6 py-4">{d.name}</td>
                      <td className="px-6 py-4">{d.code}</td>
                      <td className="AddBranchtable_btnsection px-6 py-4">
                        <button
                          onClick={() => handleEditClick(d)}
                          className="font-medium text-white-600 dark:text-white-500 hover:underline">
                          <PencilLine />
                        </button>
                        <button
                          onClick={() => handleDeleteModalOpen(d)}
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
      <BranchModalEdit
        show={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSave}
        formData={formData}
        handleChange={handleChange}
      />
      {showAddDealsModal && (
        <Add_Branch_Modal
          show={showAddDealsModal}
          onClose={handleAddDealsModalClose}
          onSave={handleAddDealsModalSave}
        />
      )}
      {showDeleteModal && branchToDelete && (
        <DeleteModal
          show={showDeleteModal}
          onClose={handleDeleteModalClose}
          onDelete={handleDelete}
          item={branchToDelete}
        />
      )}
    </NavbarSidebarLayout>
  );
}

export default BranchList;

