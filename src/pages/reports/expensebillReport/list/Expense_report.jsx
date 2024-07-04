import React, { useEffect, useRef, useState } from 'react';
import NavbarSidebarLayout from '../../../../layouts/navbar-sidebar';
import './Expense_report.css';
import { ChevronDown, CircleArrowRight, Pencil, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';
import { addDays, parse } from 'date-fns';
import { DateRange } from 'react-date-range';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import useAxios from '../../../../hooks/useAxios/useAxios';

function Expense_report() {
  const { response, error, loading } = useAxios({
    method: 'GET',
    url: 'http://localhost:3015/data',
  });

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);

  const [open, setOpen] = useState(false);
  const refOne = useRef(null);

  useEffect(() => {
    document.addEventListener('keydown', hideOnEscape, true);
    document.addEventListener('click', hideOnClickOutside, true);
    return () => {
      document.removeEventListener('keydown', hideOnEscape, true);
      document.removeEventListener('click', hideOnClickOutside, true);
    };
  }, []);

  const hideOnEscape = (e) => {
    if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const [filters, setFilters] = useState({
    startDate: format(new Date(), 'yyyy-MM-dd'),
    endDate: format(addDays(new Date(), 7), 'yyyy-MM-dd'),
    name: '',
    status: '',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleDateRangeChange = (item) => {
    setRange([item.selection]);
    setFilters((prevFilters) => ({
      ...prevFilters,
      startDate: format(item.selection.startDate, 'yyyy-MM-dd'),
      endDate: format(item.selection.endDate, 'yyyy-MM-dd'),
    }));
  };

  const filteredExpenseReports = response
    ? response.filter((report) => {
        const startDate = new Date(filters.startDate);
        const endDate = new Date(filters.endDate);
        const billFromDate = parse(report.billfrom, 'dd-MM-yyyy', new Date());
        return (
          (!filters.startDate || billFromDate >= startDate) &&
          (!filters.endDate || billFromDate <= endDate) &&
          (filters.status === '' || report.status === filters.status) &&
          (filters.name === '' || report.name === filters.name)
        );
      })
    : [];

  const totalPages = Math.ceil(filteredExpenseReports.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredExpenseReports.length);
  const slicedExpenseReports = filteredExpenseReports.slice(startIndex, endIndex);

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="expense_report_container">
        <div className="expense_report_top">
          <div className="expense_report_header">
            <h2>Expense Bills</h2>
          </div>
          <div className="expense_report_Add_button">
            <Link to={'/pages/reports/expensebillReport/newBill/AddNewBill'}>
              <button>
                Add New Bill <CircleArrowRight />
              </button>
            </Link>
          </div>
        </div>

        <div className="expense_report_BillWeek">
          <label htmlFor="BillWeek">Bill Week</label>
          <input
            value={`${format(range[0].startDate, 'dd/MM/yyyy')} to ${format(range[0].endDate, 'dd/MM/yyyy')}`}
            readOnly
            className="inputBox"
            onClick={() => setOpen((open) => !open)}
          />

          <div ref={refOne}>
            {open && (
              <DateRange
                onChange={handleDateRangeChange}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                ranges={range}
                months={1}
                direction="horizontal"
                className="calendarElement"
              />
            )}
          </div>
        </div>
        <hr />

        <div className="expense_report_search">
          <div className="expense_report_engineer">
            <label htmlFor="name">Engineer</label>
            <select name="name" id="name" onChange={handleFilterChange}>
              <option value="">All</option>
              {response &&
                response.map((d) => (
                  <option key={d.id} value={d.name}>
                    {d.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="expense_report_status">
            <label htmlFor="status">Status</label>
            <select name="status" id="status" onChange={handleFilterChange}>
              <option value="">All</option>
              <option value="Created">Created</option>
              <option value="Approved">Approved</option>
              <option value="Released">Released</option>
            </select>
          </div>
          <div className="expense_report_searchbtn">
            <button>Search</button>
          </div>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">#</th>
                  <th scope="col" className="px-6 py-3">Bill</th>
                  <th scope="col" className="px-6 py-3">Staff Name</th>
                  <th scope="col" className="px-6 py-3">Bill From</th>
                  <th scope="col" className="px-6 py-3">Bill Upto</th>
                  <th scope="col" className="px-6 py-3">Bill Amount</th>
                  <th scope="col" className="px-6 py-3">Approved</th>
                  <th scope="col" className="px-6 py-3">Advance</th>
                  <th scope="col" className="px-6 py-3">Released</th>
                  <th scope="col" className="px-6 py-3">Balance</th>
                  <th scope="col" className="px-6 py-3">Status</th>
                  <th scope="col" className="px-6 py-3">Edit</th>
                  <th scope="col" className="px-6 py-3">Delete</th>
                </tr>
              </thead>
              <tbody>
                {slicedExpenseReports.map((d, id) => (
                  <tr
                    key={id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4">{d.id}</td>
                    <td className="px-6 py-4">{d.bill}</td>
                    <td className="px-6 py-4">{d.name}</td>
                    <td className="px-6 py-4">{d.billfrom}</td>
                    <td className="px-6 py-4">{d.billUpto}</td>
                    <td className="px-6 py-4">{d.billamount}</td>
                    <td className="px-6 py-4">{d.approved}</td>
                    <td className="px-6 py-4">{d.advance}</td>
                    <td className="px-6 py-4">{d.released}</td>
                    <td className="px-6 py-4">{d.balance}</td>
                    <td className="px-6 py-4">{d.status}</td>
                    <td className="px-6 py-4">
                      <Pencil style={{ color: '#ffd016' }} />
                    </td>
                    <td className="px-6 py-4">
                      <Trash2 style={{ color: 'red' }} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="flex justify-between items-center mt-4">
          <p>
            Showing {startIndex + 1} to {endIndex} of {filteredExpenseReports.length} entries
          </p>
          <div className="Previous">
            <button
              style={{ backgroundColor: '#04aa6d' }}
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}>
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                style={{ border: '2px solid black', color: 'black' }}
                key={i + 1}
                className={currentPage === i + 1 ? 'active' : ''}
                onClick={() => handlePageChange(i + 1)}>
                {i + 1}
              </button>
            ))}
            <button
              style={{ backgroundColor: '#188ae4' }}
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}>
              Next
            </button>
          </div>
        </div>
      </div>
    </NavbarSidebarLayout>
  );
}

export default Expense_report;
