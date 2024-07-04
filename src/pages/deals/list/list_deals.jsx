import React, { useEffect, useState } from 'react';
import { ListPlus } from 'lucide-react';
import { Button } from 'flowbite-react';
import './list_deals.css';
import { Link } from 'react-router-dom';
import useDeals from '../../../hooks/useDeals';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';

function DealsList() {
  const [dealsList, setDealsList] = useState([]);

  const [filterQuery, setFilterQuery] = useState('');
  const { fetchDeals, addDeal } = useDeals();

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const data = await fetchDeals(1);
      if (data) {
        setDealsList(data);
      }
    };

    fetchDataFromApi();
  }, []);

  const filteredDeals = dealsList.filter((deal) =>
    deal.created_on.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="tab_deal">
        <div className="deals_table">
          <div className=" relative overflow-x-auto shadow-md sm:rounded-lg mb-5 block">
            <div className="flex items-center justify-between mb-3">
              <input
                type="text"
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                placeholder="Filter by Date"
                className="ml-3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
              <a href="/deals/create/add-deals">
                <Button className="btn btn-outline" color="dark">
                  <ListPlus /> Add New Deals
                </Button>
              </a>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Prospect
                  </th>
                  <th scope="col" className="px-6 py-3">
                    dealname
                  </th>
                  <th scope="col" className="px-6 py-3">
                    m/c model
                  </th>
                  <th scope="col" className="px-6 py-3">
                    dealtype
                  </th>
                  <th scope="col" className="px-6 py-3">
                    date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    customer segmentation
                  </th>{' '}
                  <th scope="col" className="px-6 py-3">
                    machine application
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {dealsList.map((deal) => (
                  <tr
                    key={deal.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {deal.prospects_name}
                    </td>
                    <td className="px-6 py-4">{deal.deal_name}</td>
                    <td className="px-6 py-4">{deal.machine_name}</td>
                    <td className="px-6 py-4">{deal.deal_type_name}</td>
                    <td className="px-6 py-4">{deal.created_on}</td>
                    <td className="px-6 py-4">{deal.suggested_by_name}</td>
                    <td className="px-6 py-4">{deal.machine}</td>
                    <td className="flex items-center px-6 py-4">
                      <Link to={`/pages/modifydeals/update/UpdateModifyDeals/${deal.id}`}>
                        {/* <button className="font-medium text-white-600 dark:text-white-500 hover:underline mr-3">
                        <PencilLine />
                      </button> */}
                      </Link>
                      {/* <button
                      onClick={() => handleDelete(deal.id)}
                      className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">
                      <Trash2 />
                    </button> */}
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

export default DealsList;
