import React from 'react';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import './PartsAppraisal.css'

function PartsAppraisal() {
  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="Appraisaltable5">
        <div className="appraisal_table">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5 block">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="appraisal_thead border-b text-xs text-gray-700 border-gray-600 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className=" border-gray-600" style={{ height: '70px' }}>
                  <th scope="col" className="px-6 py-3 border-r border-gray-600">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 border-r border-gray-600">
                    dwadhasi
                  </th>{' '}
                  <th scope="col" className="px-6 py-3 border-r border-gray-600">
                    Designation
                  </th>
                  <th scope="col" colSpan={2} className="px-6 py-3 border-r border-gray-600">
                    parts manager
                  </th>
                  <th scope="col" className="px-6 py-3  border-gray-600"></th>
                  <th scope="col" className="px-6 py-3  border-gray-600"></th>
                </tr>
              </thead>

              <tbody>
              <tr className="row_2_parts border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
  <td
    scope="col"
    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
    </td>
  <td
    scope="col"
    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
    Parts Department
  </td>
  <td
    scope="col"
    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
    Parts
  </td>
  <td
    scope="col"
    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
    Year&Month
  </td>
  <td
    scope="col"
    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600" colSpan={2}>
    May-24
  </td>
  <td
    scope="col"
    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
    </td>
              </tr>



                <tr className="row_3_parts border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    SL NO.
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    BRANCH
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    TARGET
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    ACHIVEMENT
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    YTD
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    ACHIVEMENT
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600">
                    SHORT
                  </td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    1
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    perumbavoor
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600">
                    0
                  </td>
                </tr>
                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    2
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    KOTTARAKKARA
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600">
                    0
                  </td>
                </tr>
                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    3
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    KOTTAYAM
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600">
                    0
                  </td>
                </tr>
                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    4
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    KATTAPPANA
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600">
                    0
                  </td>
                </tr>
                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    5
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    TRIVANDRUM
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600">
                    0
                  </td>
                </tr>

                <tr className="total_row_parts border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row_1 uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Total
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    1
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    perumbavoor
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    1
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    KOTTARAKKARA
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    1
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    KOTTAYAM
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    1
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    KATTAPPANA
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    1
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    TRIVANDRUM
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    1
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    PALAKKAD
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
        
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    SANY OFFTAKE 
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Yearly Target -Dealer to Cust
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600"></td>
                </tr>

                <tr className="row_3_parts border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    SL NO
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    DESCRIPTION
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    INCOME
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    EXPENSES
                  </td>
                  <td
                    scope="col"
                    colSpan={2}
                    className="uppercase border-r px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-gray-600">
                    REMARKS
                  </td>

                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    PARTS DEPARTMENT
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase border-r px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase border-r  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    1
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Income from Parts Sales
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    colSpan={2}
                    className="uppercase border-r px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-gray-600"></td>

                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    1
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                   Salary
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    colSpan={2}
                    className="uppercase border-r px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-gray-600"></td>

                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    1
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Emi (Two wheeler)
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    colSpan={2}
                    className="uppercase border-r px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-gray-600"></td>

                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    1
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Incentives
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    colSpan={2}
                    className="uppercase border-r px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-gray-600"></td>

                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    1
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Freight Expenses
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    colSpan={2}
                    className="uppercase border-r px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-gray-600"></td>

                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    PF & ESI
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase border-r px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase border-r  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    1
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Marketing activities
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    colSpan={2}
                    className="uppercase border-r px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-gray-600"></td>

                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    1
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                   Other Expenses (mobile)
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    colSpan={2}
                    className="uppercase border-r px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-gray-600"></td>

                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                  Office Rents
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase border-r px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase border-r  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-gray-600"></td>
                </tr>

                <tr className="total_row_parts border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
               
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row_1 uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Total
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    colSpan={2}
                    className="uppercase border-r px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-gray-600"></td>

                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                 
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Net Profit
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    colSpan={2}
                    className="uppercase border-r px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-gray-600"></td>

                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600"></td>
                </tr>

                <tr className="total_row_service border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    IV
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row_1 uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Total Score
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    colSpan={2}
                    className="uppercase border-r px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-gray-600"></td>

                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    1
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Submitted By:
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">gdgsdjhsd</td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">Approved By:Head</td>
                  <td
                    scope="col"
                    colSpan={2}
                    className="uppercase border-r px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-gray-600"></td>

                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                   
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Signature:
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">Signature:</td>
                  <td
                    scope="col"
                    colSpan={2}
                    className="uppercase border-r px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-gray-600"></td>

                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"
                    colSpan={4}></td>

                  <td
                    scope="col"
                    colSpan={2}
                    className="uppercase border-r px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-gray-600"></td>

                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">Sl.No</td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"
                    colSpan={3}>Support Required</td>

                  <td
                    scope="col"
                    colSpan={2}
                    className="uppercase border-r px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-gray-600"></td>

                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">1</td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"
                    colSpan={3}></td>

                  <td
                    scope="col"
                    colSpan={2}
                    className="uppercase border-r px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-gray-600"></td>

                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    2
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Income from Parts Sales
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                
                    className="uppercase border-r px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600"></td>

                  <td
                    scope="col"
                    className="uppercase border-r px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </NavbarSidebarLayout>
  );
}

export default PartsAppraisal;



