import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import { Trash2, PencilLine, SquareCheckBig } from 'lucide-react';
import './Prospects_table.css';
import { ListPlus } from 'lucide-react';
import NavbarSidebarLayout from '../../layouts/navbar-sidebar';

function Prospects_table() {
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Rizwana',
      number: '+91 1234567890',
      address: '123 Street',
      district: 'Ernakulam',
      pinNumber: '123456',
      proposedDate: '01/03/2024'
    },

    {
      id: 2,
      name: 'Akhil Ansari',
      number: '+91 1234567890',
      address: '123 Street',
      district: 'Ernakulam',
      pinNumber: '123456',
      proposedDate: '01/03/2024'
    },

    {
      id: 3,
      name: 'Dwadashi',
      number: '+91 1234567890',
      address: '123 Street',
      district: 'Ernakulam',
      pinNumber: '123456',
      proposedDate: '01/03/2024'
    },

    {
      id: 4,
      name: 'Arun',
      number: '+91 1234567890',
      address: '123 Street',
      district: 'Ernakulam',
      pinNumber: '123456',
      proposedDate: '01/03/2024'
    },

    {
      id: 5,
      name: 'Ruksana',
      number: '+91 1234567890',
      address: '123 Street',
      district: 'Ernakulam',
      pinNumber: '123456',
      proposedDate: '01/03/2024'
    },

    {
      id: 6,
      name: 'Amelia',
      number: '+91 1234567890',
      address: '123 Street',
      district: 'Ernakulam',
      pinNumber: '123456',
      proposedDate: '01/03/2024'
    },

    {
      id: 7,
      name: 'Akmal',
      number: '+91 1234567890',
      address: '123 Street',
      district: 'Ernakulam',
      pinNumber: '123456',
      proposedDate: '01/03/2024'
    },

    {
      id: 8,
      name: 'Aju Ajith',
      number: '+91 1234567890',
      address: '123 Street',
      district: 'Ernakulam',
      pinNumber: '123456',
      proposedDate: '01/03/2024'
    },

    {
      id: 9,
      name: 'Ashly ',
      number: '+91 1234567890',
      address: '123 Street',
      district: 'Ernakulam',
      pinNumber: '123456',
      proposedDate: '01/03/2024'
    },

    {
      id: 10,
      name: 'Suman',
      number: '+91 1234567890',
      address: '123 Street',
      district: 'Ernakulam',
      pinNumber: '123456',
      proposedDate: '01/03/2024'
    }
  ]);

  const [editingIndex, setEditingIndex] = useState(null);

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleSave = (index) => {
    setEditingIndex(null);
  };

  const handleRemove = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <NavbarSidebarLayout isFooter={false}>
    <div className="table_div">
      <div className="props-table">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5 block">
          <a href="/add/prospects">
            <Button className="btn btn-outline" color="dark">
              <ListPlus /> Add New Prospects
            </Button>
          </a>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                <th scope="col" className="px-6 py-3">
                  District
                </th>
                <th scope="col" className="px-6 py-3">
                  PIN Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Proposed Date
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={item.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {editingIndex === index ? (
                      <input
                        type="text"
                        value={item.name}
                        onChange={(e) =>
                          setData([
                            ...data.slice(0, index),
                            { ...item, name: e.target.value },
                            ...data.slice(index + 1)
                          ])
                        }
                      />
                    ) : (
                      item.name
                    )}
                  </td>

                  <td className="px-6 py-4">
                    {editingIndex === index ? (
                      <input
                        type="text"
                        value={item.number}
                        onChange={(e) =>
                          setData([
                            ...data.slice(0, index),
                            { ...item, number: e.target.value },
                            ...data.slice(index + 1)
                          ])
                        }
                      />
                    ) : (
                      item.number
                    )}
                  </td>

                  <td className="px-6 py-4">
                    {editingIndex === index ? (
                      <input
                        type="text"
                        value={item.address}
                        onChange={(e) =>
                          setData([
                            ...data.slice(0, index),
                            { ...item, address: e.target.value },
                            ...data.slice(index + 1)
                          ])
                        }
                      />
                    ) : (
                      item.address
                    )}
                  </td>

                  <td className="px-6 py-4">
                    {editingIndex === index ? (
                      <input
                        type="text"
                        value={item.district}
                        onChange={(e) =>
                          setData([
                            ...data.slice(0, index),
                            { ...item, district: e.target.value },
                            ...data.slice(index + 1)
                          ])
                        }
                      />
                    ) : (
                      item.district
                    )}
                  </td>

                  <td className="px-6 py-4">
                    {editingIndex === index ? (
                      <input
                        type="text"
                        value={item.pinNumber}
                        onChange={(e) =>
                          setData([
                            ...data.slice(0, index),
                            { ...item, pinNumber: e.target.value },
                            ...data.slice(index + 1)
                          ])
                        }
                      />
                    ) : (
                      item.pinNumber
                    )}
                  </td>

                  <td className="px-6 py-4">
                    {editingIndex === index ? (
                      <input
                        type="text"
                        value={item.proposedDate}
                        onChange={(e) =>
                          setData([
                            ...data.slice(0, index),
                            { ...item, proposedDate: e.target.value },
                            ...data.slice(index + 1)
                          ])
                        }
                      />
                    ) : (
                      item.proposedDate
                    )}
                  </td>

                  <td className="flex items-center px-6 py-4">
                    {editingIndex === index ? (
                      <button
                        className="font-medium text-white-600 dark:text-white-500 hover:underline mr-3"
                        onClick={() => handleSave(index)}>
                        <SquareCheckBig />
                      </button>
                    ) : (
                      <button
                        className="font-medium text-white-600 dark:text-white-500 hover:underline mr-3"
                        onClick={() => handleEdit(index)}>
                        <PencilLine />
                      </button>
                    )}
                    <button
                      onClick={() => handleRemove(item.id)}
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
    </NavbarSidebarLayout>

  );
}

export default Prospects_table;
