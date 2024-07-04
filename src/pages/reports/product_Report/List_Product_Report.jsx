import React, { useState, useEffect } from 'react';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import useAxios from '../../../hooks/useAxios/useAxios';
import './List_Product_Report.css';

function List_Product_Report() {
    const { response, error, loading } = useAxios({
        method: 'GET',
        url: 'http://localhost:3026/fleetData' // Update URL with correct endpoint
    });

    const [filters, setFilters] = useState({
        model: '',
        segment: '',
        district: '',
        oem: '',
        tonnage: ''
    });

    const tablehead = [
        { id: 1, name: 'Model Wise', key: 'model' },
        { id: 2, name: 'Segment', key: 'segment' },
        { id: 3, name: 'District Wise', key: 'district' },
        { id: 4, name: 'OEM', key: 'oem' },
        { id: 5, name: 'Tonnage', key: 'tonnage' }
    ];

    const handleFilterChange = (e, key) => {
        setFilters({
            ...filters,
            [key]: e.target.value
        });
    };

    const filteredData = response?.filter(item => {
        return Object.keys(filters).every(key => 
            filters[key] === '' || item[key]?.toString().toLowerCase().includes(filters[key].toLowerCase())
        );
    });

    return (
        <NavbarSidebarLayout isFooter={false}>
            <div className="product_report_container">
                <h2 className="product_report_header">Product Report</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error: {error.message}</p>
                ) : (
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    {tablehead.map(({ id, name, key }) => (
                                        <th key={id} scope="col" className="px-6 py-3">
                                            {name}
                                            <div>
                                                <select 
                                                    value={filters[key]} 
                                                    onChange={(e) => handleFilterChange(e, key)} 
                                                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                                >
                                                    <option value="">All</option>
                                                    {[...new Set(response.map(item => item[key]))].map(option => (
                                                        <option key={option} value={option}>{option}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData?.map((tableData, index) => (
                                    <tr key={index}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="px-6 py-4">{tableData.model}</td>
                                        <td className="px-6 py-4">{tableData.segment}</td>
                                        <td className="px-6 py-4">{tableData.district}</td>
                                        <td className="px-6 py-4">{tableData.oem}</td>
                                        <td className="px-6 py-4">{tableData.tonnage}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </NavbarSidebarLayout>
    );
}

export default List_Product_Report;
