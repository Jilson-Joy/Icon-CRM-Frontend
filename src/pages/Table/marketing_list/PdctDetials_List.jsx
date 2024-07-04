// import React, { useState, useEffect } from 'react';
// import { ListPlus, PencilLine, Trash2, Search, CircleArrowLeft, CircleArrowRight } from 'lucide-react';
// import { Button } from 'flowbite-react';
// import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
// import * as XLSX from 'xlsx';
// import useMarketing from '../../../hooks/useMarketing';
// import PdctAddModal from './PdctAddModal';
// import PdctEditModal from './PdctEditModal';
// import './pdctDetials_List.css';

// function PdctDetials_List() {
//     const [search, setSearch] = useState('');
//     const [marketingData, setMarketingData] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [itemsPerPage, setItemsPerPage] = useState(5);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//     const [selectedItem, setSelectedItem] = useState(null);

//     const { fetchData } = useMarketing(); // Use fetchData from useMarketing

//     const refreshData = async () => {
//         try {
//             const data = await fetchData();
//             if (data) {
//                 setMarketingData(data);
//             }
//         } catch (error) {
//             console.error('Error refreshing data:', error);
//         }
//     };

//     useEffect(() => {
//         refreshData();
//     }, []);

//     const filteredMarketing = marketingData.filter(o =>
//         o.proposed_date.toLowerCase().includes(search.toLowerCase()) ||
//         o.proposed_amt.toLowerCase().includes(search.toLowerCase()) ||
//         o.disbursable_amt.toLowerCase().includes(search.toLowerCase()) ||
//         o.activity_name.toLowerCase().includes(search.toLowerCase()) ||
//         o.remarks.toLowerCase().includes(search.toLowerCase())
//     );

//     // Pagination
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = filteredMarketing.slice(indexOfFirstItem, indexOfLastItem);
//     const totalItems = filteredMarketing.length;
//     const totalPages = Math.ceil(totalItems / itemsPerPage);

//     const paginate = (pageNumber) => setCurrentPage(pageNumber);
//     const handleNextPage = () => {
//         if (currentPage < totalPages) {
//             setCurrentPage(currentPage + 1);
//         }
//     };

//     const handlePreviousPage = () => {
//         if (currentPage > 1) {
//             setCurrentPage(currentPage - 1);
//         }
//     };

//     const handleRemove = (id) => {
//         // Implement remove functionality here
//     };

//     const handleEdit = (item) => {
//         setSelectedItem(item);
//         setIsEditModalOpen(true);
//     };

//     const exportToExcel = () => {
//         try {
//             const fileType =
//                 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
//             const fileExtension = '.xlsx';
//             const fileName = 'data_export';

//             const ws = XLSX.utils.json_to_sheet(currentItems);
//             const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
//             const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
//             const dataFile = new Blob([excelBuffer], { type: fileType });
//             const url = URL.createObjectURL(dataFile);

//             const link = document.createElement('a');
//             link.href = url;
//             link.download = fileName + fileExtension;
//             document.body.appendChild(link);
//             link.click();
//             setTimeout(() => {
//                 document.body.removeChild(link);
//                 window.URL.revokeObjectURL(url);
//             }, 0);
//         } catch (error) {
//             console.error('Error exporting to Excel:', error);
//         }
//     };

//     return (
//         <NavbarSidebarLayout isFooter={false}>
//             <div className="Marketing_container">
//                 <div className="Marketing">
//                     <div className="">
//                         <div className="Marketing_header">
//                             <h2>Marketting Table</h2>
//                         </div>
//                         <div className="Marketing_Addbtn">
//                             <div className="Marketing_filter">
//                                 <span>
//                                     <Search />
//                                 </span>
//                                 <input
//                                     type="search"
//                                     placeholder="Search here"
//                                     value={search}
//                                     onChange={(e) => setSearch(e.target.value)}
//                                 />
//                             </div>
//                             <button
//                                 onClick={exportToExcel}
//                                 className="export-button focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
//                                 Export to Excel
//                             </button>
//                             <Button
//                                 onClick={() => setIsModalOpen(true)}
//                                 className="btn btn-outline"
//                                 color="dark">
//                                 <ListPlus /> Add Product
//                             </Button>
//                         </div>
//                         <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//                             <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//                                 <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                                     <tr>
//                                         <th scope="col" className="px-6 py-3">
//                                             Marketing Activity
//                                         </th>
//                                         <th scope="col" className="px-6 py-3">
//                                             Proposed Date
//                                         </th>
//                                         <th scope="col" className="px-6 py-3">
//                                             Proposed Amount
//                                         </th>
//                                         <th scope="col" className="px-6 py-3">
//                                             Disbursable Amount
//                                         </th>
//                                         <th scope="col" className="px-6 py-3">
//                                             Engineer Name
//                                         </th>
//                                         <th scope="col" className="px-6 py-3">
//                                             Remarks
//                                         </th>
//                                         <th scope="col" className="px-6 py-3">
//                                             Action
//                                         </th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {currentItems.map((d, index) => (
//                                         <tr
//                                             key={index}
//                                             className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//                                             <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{d.activity_descrption}</td>
//                                             <td className="px-6 py-4">{d.proposed_date}</td>
//                                             <td className="px-6 py-4">{d.proposed_amt}</td>
//                                             <td className="px-6 py-4">{d.disbursable_amt}</td>
//                                             <td className="px-6 py-4">{d.activity_name}</td>
//                                             <td className="px-6 py-4">{d.remarks}</td>
//                                             <td className="flex items-center px-6 py-4">
//                                                 <button
//                                                     onClick={() => handleEdit(d)}
//                                                     className="font-medium text-white-600 dark:text-white-500 hover:underline mr-3">
//                                                     <PencilLine />
//                                                 </button>
//                                                 <button
//                                                     onClick={() => handleRemove(d.id)}
//                                                     className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">
//                                                     <Trash2 />
//                                                 </button>
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                         <div className="flex justify-between items-center mt-5">
//                             <div>
//                                 Page {currentPage} of {totalPages}
//                             </div>
//                             <div className="flex">
//                                 <button
//                                     onClick={handlePreviousPage}
//                                     disabled={currentPage === 1}
//                                     className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}>
//                                     <CircleArrowLeft /> Previous
//                                 </button>
//                                 <button
//                                     onClick={handleNextPage}
//                                     disabled={currentPage === totalPages}
//                                     className={`pagination-button ${currentPage === totalPages ? 'disabled' : ''}`}>
//                                     Next <CircleArrowRight />
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {isModalOpen && <PdctAddModal setIsModalOpen={setIsModalOpen} refreshData={refreshData} />}
//             {isEditModalOpen && <PdctEditModal setIsEditModalOpen={setIsEditModalOpen} selectedItem={selectedItem} />}
//         </NavbarSidebarLayout>
//     );
// }

// export default PdctDetials_List;


import React, { useState, useEffect } from 'react';
import { ListPlus, PencilLine, Trash2, Search, CircleArrowLeft, CircleArrowRight } from 'lucide-react';
import { Button } from 'flowbite-react';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import * as XLSX from 'xlsx';
import useMarketing from '../../../hooks/useMarketing';
import PdctAddModal from './PdctAddModal';
import PdctEditModal from './PdctEditModal';
import DeleteModal from '../../../components/DeleteModal'; // Import the delete modal
import './pdctDetials_List.css';

function PdctDetials_List() {
    const [search, setSearch] = useState('');
    const [marketingData, setMarketingData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false); // State to control Delete modal
    const [itemToDelete, setItemToDelete] = useState(null); // State for the item to be deleted

    const { fetchData } = useMarketing(); // Use fetchData from useMarketing

    const refreshData = async () => {
        try {
            const data = await fetchData();
            if (data) {
                setMarketingData(data);
            }
        } catch (error) {
            console.error('Error refreshing data:', error);
        }
    };

    useEffect(() => {
        refreshData();
    }, []);

    const filteredMarketing = marketingData.filter(o =>
        o.proposed_date.toLowerCase().includes(search.toLowerCase()) ||
        o.proposed_amt.toLowerCase().includes(search.toLowerCase()) ||
        o.disbursable_amt.toLowerCase().includes(search.toLowerCase()) ||
        o.activity_name.toLowerCase().includes(search.toLowerCase()) ||
        o.remarks.toLowerCase().includes(search.toLowerCase())
    );

    // Pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredMarketing.slice(indexOfFirstItem, indexOfLastItem);
    const totalItems = filteredMarketing.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
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

    const handleRemove = (item) => {
        setItemToDelete(item);
        setShowDeleteModal(true);
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3000/marketingdetails/${itemToDelete.id}`);
            setMarketingData((prevData) => prevData.filter((item) => item.id !== itemToDelete.id));
            handleCloseDeleteModal();
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const handleOpenDeleteModal = (item) => {
        setItemToDelete(item);
        setShowDeleteModal(true);
    };

    const handleCloseDeleteModal = () => {
        setItemToDelete(null);
        setShowDeleteModal(false);
    };

    const handleEdit = (item) => {
        setSelectedItem(item);
        setIsEditModalOpen(true);
    };

    const exportToExcel = () => {
        try {
            const fileType =
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            const fileExtension = '.xlsx';
            const fileName = 'data_export';

            const ws = XLSX.utils.json_to_sheet(currentItems);
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
        } catch (error) {
            console.error('Error exporting to Excel:', error);
        }
    };

    return (
        <NavbarSidebarLayout isFooter={false}>
            <div className="Marketing_container">
                <div className="Marketing">
                    <div className="">
                        <div className="Marketing_header">
                            <h2>Marketting Table</h2>
                        </div>
                        <div className="Marketing_Addbtn">
                            <div className="Marketing_filter">
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
                            <Button
                                onClick={() => setIsModalOpen(true)}
                                className="btn btn-outline"
                                color="dark">
                                <ListPlus /> Add Product
                            </Button>
                        </div>
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Marketing Activity
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Proposed Date
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Proposed Amount
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Disbursable Amount
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Engineer Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Remarks
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
                                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{d.activity_descrption}</td>
                                            <td className="px-6 py-4">{d.proposed_date}</td>
                                            <td className="px-6 py-4">{d.proposed_amt}</td>
                                            <td className="px-6 py-4">{d.disbursable_amt}</td>
                                            <td className="px-6 py-4">{d.activity_name}</td>
                                            <td className="px-6 py-4">{d.remarks}</td>
                                            <td className="flex items-center px-6 py-4">
                                                <button
                                                    onClick={() => handleEdit(d)}
                                                    className="font-medium text-white-600 dark:text-white-500 hover:underline mr-3">
                                                    <PencilLine />
                                                </button>
                                                <button
                                                    onClick={() => handleOpenDeleteModal(d)}
                                                    className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">
                                                    <Trash2 />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex justify-between items-center mt-5">
                            <div>
                                Page {currentPage} of {totalPages}
                            </div>
                            <div className="flex">
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
            {isModalOpen && <PdctAddModal setIsModalOpen={setIsModalOpen} refreshData={refreshData} />}
            {isEditModalOpen && <PdctEditModal setIsEditModalOpen={setIsEditModalOpen} selectedItem={selectedItem} />}
            <DeleteModal
                show={showDeleteModal}
                onClose={handleCloseDeleteModal}
                onDelete={handleDelete}
                item={itemToDelete}
            />
        </NavbarSidebarLayout>
    );
}

export default PdctDetials_List;

