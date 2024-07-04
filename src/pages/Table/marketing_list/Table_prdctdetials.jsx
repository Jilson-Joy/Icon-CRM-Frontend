import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import { Trash2, PencilLine, SquareCheckBig } from 'lucide-react';
import { ListPlus } from 'lucide-react';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';

function Table_prdctdetials() {
  const [data, setData] = useState([
    {
      id: 1,
      marketingActivity: 'Product-market fit',
      proposedDate: '01/03/2024',
      Proposed_Amount: '$500',
      disursableAmount: '$250',
      engineerName: 'Rizwana',
      remarks: 'It Was Extremely Good'
    },
    {
      id: 2,
      marketingActivity: 'Word-of-mouth marketing',
      proposedDate: '02/03/2024',
      Proposed_Amount: '$500',
      disursableAmount: '$250',
      engineerName: 'Akhil Ansari',
      remarks: 'It Was Extremely Good'
    },
    {
      id: 3,
      marketingActivity: 'Content marketing',
      proposedDate: '03/03/2024',
      Proposed_Amount: '$500',
      disursableAmount: '$250',
      engineerName: 'Dwadashi',
      remarks: 'It Was Extremely Good'
    },
    {
      id: 4,
      marketingActivity: 'Brand community',
      proposedDate: '04/03/2024',
      Proposed_Amount: '$500',
      disursableAmount: '$250',
      engineerName: 'Arun',
      remarks: 'It Was Extremely Good'
    },
    {
      id: 5,
      marketingActivity: 'Market research',
      proposedDate: '05/03/2024',
      Proposed_Amount: '$500',
      disursableAmount: '$250',
      engineerName: 'Ruksana',
      remarks: 'It Was Extremely Good'
    },
    {
      id: 6,
      marketingActivity: 'Market research',
      proposedDate: '06/03/2024',
      Proposed_Amount: '$500',
      disursableAmount: '$250',
      engineerName: 'Amelia',
      remarks: 'It Was Extremely Good'
    },
    {
      id: 7,
      marketingActivity: 'Brand community',
      proposedDate: '07/03/2024',
      Proposed_Amount: '$500',
      disursableAmount: '$250',
      engineerName: 'Akmal',
      remarks: 'It Was Extremely Good'
    },
    {
      id: 8,
      marketingActivity: 'Content marketing',
      proposedDate: '08/03/2024',
      Proposed_Amount: '$500',
      disursableAmount: '$250',
      engineerName: 'Aju Ajith',
      remarks: 'It Was Extremely Good'
    },
    {
      id: 9,
      marketingActivity: 'Word-of-mouth marketing',
      proposedDate: '09/03/2024',
      Proposed_Amount: '$500',
      disursableAmount: '$250',
      engineerName: 'Ashly',
      remarks: 'It Was Extremely Good'
    },
    {
      id: 10,
      marketingActivity: 'Product-market fit',
      proposedDate: '10/03/2024',
      Proposed_Amount: '$500',
      disursableAmount: '$250',
      engineerName: 'Suman',
      remarks: 'It Was Extremely Good'
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
          <a href="/product">
            <Button className="btn btn-outline" color="dark">
              <ListPlus /> Add New Marketing Activity
            </Button>
          </a>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
                  Disursable Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Engineer Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Remarks
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
                        value={item.marketingActivity}
                        onChange={(e) =>
                          setData([
                            ...data.slice(0, index),
                            { ...item, marketingActivity: e.target.value },
                            ...data.slice(index + 1)
                          ])
                        }
                      />
                    ) : (
                      item.marketingActivity
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

                  <td className="px-6 py-4">
                    {editingIndex === index ? (
                      <input
                        type="text"
                        value={item.Proposed_Amount}
                        onChange={(e) =>
                          setData([
                            ...data.slice(0, index),
                            { ...item, Proposed_Amount: e.target.value },
                            ...data.slice(index + 1)
                          ])
                        }
                      />
                    ) : (
                      item.Proposed_Amount
                    )}
                  </td>

                  <td className="px-6 py-4">
                    {editingIndex === index ? (
                      <input
                        type="text"
                        value={item.disursableAmount}
                        onChange={(e) =>
                          setData([
                            ...data.slice(0, index),
                            { ...item, disursableAmount: e.target.value },
                            ...data.slice(index + 1)
                          ])
                        }
                      />
                    ) : (
                      item.disursableAmount
                    )}
                  </td>

                  <td className="px-6 py-4">
                    {editingIndex === index ? (
                      <input
                        type="text"
                        value={item.engineerName}
                        onChange={(e) =>
                          setData([
                            ...data.slice(0, index),
                            { ...item, engineerName: e.target.value },
                            ...data.slice(index + 1)
                          ])
                        }
                      />
                    ) : (
                      item.engineerName
                    )}
                  </td>

                  <td className="px-6 py-4">
                    {editingIndex === index ? (
                      <input
                        type="text"
                        value={item.remarks}
                        onChange={(e) =>
                          setData([
                            ...data.slice(0, index),
                            { ...item, remarks: e.target.value },
                            ...data.slice(index + 1)
                          ])
                        }
                      />
                    ) : (
                      item.remarks
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

export default Table_prdctdetials;
