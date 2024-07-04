import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { PencilLine, Trash2, Search, CircleArrowLeft, CircleArrowRight } from 'lucide-react';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import * as XLSX from 'xlsx';
import useSegment from '../../../hooks/useSegment';
import { BASE_URL } from '../../../constants/constants';
import SegmentAddModal from './SegmentAddModal';
import SegmentEditModal from './SegmentEditModal';
import DeleteModal from '../../../components/DeleteModal'; // Import the delete modal
import './SegmentList.css';

function SegmentList() {
  const { fetchData } = useSegment();
  const [segmentData, setSegmentData] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedSegment, setSelectedSegment] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false); // State to control Delete modal
  const [segmentToDelete, setSegmentToDelete] = useState(null); // State for the segment to be deleted

  const exportToExcel = () => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const fileName = 'Segment_Data_export';

    const ws = XLSX.utils.json_to_sheet(segmentData);
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
    const FetchSegmentList = async () => {
      try {
        const data = await fetchData();
        setSegmentData(data);
      } catch (error) {
        console.error('Error fetching sales call data:', error);
      }
    };

    FetchSegmentList();
  }, []);

  const handleEdit = (segment) => {
    setSelectedSegment(segment);
    setIsEditModalOpen(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${BASE_URL}/segments/${segmentToDelete.id}`);
      setSegmentData((prevData) => prevData.filter((segment) => segment.id !== segmentToDelete.id));
      handleCloseDeleteModal();
    } catch (error) {
      console.error('Error deleting segment:', error);
    }
  };

  const handleOpenDeleteModal = (segment) => {
    setSegmentToDelete(segment);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setSegmentToDelete(null);
    setShowDeleteModal(false);
  };

  const filteredSegments = segmentData.filter((o) => {
    return (
      o.name.toLowerCase().includes(search.toLowerCase()) ||
      o.code.toLowerCase().includes(search.toLowerCase()) ||
      o.created_on.toLowerCase().includes(search.toLowerCase())
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredSegments.slice(indexOfFirstItem, indexOfLastItem);

  const totalItems = filteredSegments.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="SegmentTable_container">
        <div className="SegmentTable">
          <div className="SegmentTable_header">
            <h1>Segment Table</h1>
          </div>
          <div className="SegmentTable_Addbtn">
            <div className="SegmentTable_filter">
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
            <button
              onClick={() => setIsAddModalOpen(true)}
              type="button"
              className="SegmentTable_Add"
            >
              Add +
            </button>
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
                    Created On
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((d, id) => (
                  <tr
                    key={id}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <td className="px-6 py-4">{d.name}</td>
                    <td className="px-6 py-4">{d.code}</td>
                    <td className="px-6 py-4">{d.created_on}</td>
                    <td className="SegmentTable_btnsection px-6 py-4">
                      <button
                        onClick={() => handleEdit(d)}
                        type="button"
                        className="SegmentTable_btn font-medium text-blue-600 dark:text-blue-500 hover:underline mr-3"
                      >
                        <PencilLine />
                      </button>
                      <button
                        onClick={() => handleOpenDeleteModal(d)}
                        type="button"
                        className="SegmentTable_btn font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                      >
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
                  disabled={indexOfLastItem >= totalItems}
                  className={`pagination-button ${indexOfLastItem >= totalItems ? 'disabled' : ''}`}>
                  Next <CircleArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SegmentAddModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
      {selectedSegment && (
        <SegmentEditModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          segment={selectedSegment}
        />
      )}
      <DeleteModal
        show={showDeleteModal}
        onClose={handleCloseDeleteModal}
        onDelete={handleDelete}
        segment={segmentToDelete}
      />
    </NavbarSidebarLayout>
  );
}

export default SegmentList;




