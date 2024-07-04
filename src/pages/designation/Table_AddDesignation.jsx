import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'flowbite-react';
import { ListPlus, PencilLine, Trash2, SquareCheckBig, X } from 'lucide-react';
import './Table_AddDesignation.css';
import NavbarSidebarLayout from '../../layouts/navbar-sidebar';

function Table_AddDesignation() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3000/add_designation').then((res) => {
      const filteredColumns = Object.keys(res.data[0]).filter(key => key !== 'id');
      setColumns(filteredColumns);
      setRecords(res.data);
    });
  }, []);

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedData({ ...records[index] });
  };

  const handleSave = () => {
    axios.put(`http://localhost:3000/add_designation/${editedData.id}`, editedData)
      .then(() => {
        const updatedRecords = [...records];
        updatedRecords[editingIndex] = editedData;
        setRecords(updatedRecords);
        setEditingIndex(null);
        setEditedData({});
      });
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditedData({});
  };

  const handleInputChange = (key, value) => {
    setEditedData(prevData => ({
      ...prevData,
      [key]: value
    }));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/add_designation/${id}`)
      .then(() => {
        const updatedRecords = records.filter(record => record.id !== id);
        setRecords(updatedRecords);
      })
      .catch(error => {
        console.error('Error deleting data:', error);
      });
  };

  return (
    <NavbarSidebarLayout isFooter={false}>
    <div className='dsgntntable_div'>
      <div className='designation_table'>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <a href="/add/designation">
            <Button className="btn btn-outline" color="dark">
              <ListPlus /> Add New Designation
            </Button>
          </a>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {columns.map((c, i) => (
                  <th key={i} className="px-6 py-3">
                    {c}
                  </th>
                ))}
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {records.map((d, i) => (
                <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  {columns.map((key, j) => (
                    <td key={j} className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ${editingIndex === i && 'bg-gray-100'}`}>
                      {editingIndex === i ? (
                        <input
                          type="text"
                          value={editedData[key] || ''}
                          onChange={(e) => handleInputChange(key, e.target.value)}
                        />
                      ) : (
                        d[key]
                      )}
                    </td>
                  ))}
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {editingIndex === i ? (
                      <React.Fragment>
                        <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-3" onClick={handleSave}><SquareCheckBig /></button>
                        <button className="font-medium text-gray-600 dark:text-gray-500 hover:underline" onClick={handleCancelEdit}><X /></button>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-3" onClick={() => handleEdit(i)}><PencilLine /></button>
                        <button className="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={() => handleDelete(d.id)}><Trash2 /></button>
                      </React.Fragment>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </NavbarSidebarLayout>

  );
}

export default Table_AddDesignation;
