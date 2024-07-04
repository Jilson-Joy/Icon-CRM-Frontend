import React from 'react';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import './ServiceAppraisal.css'

function ServiceAppraisal() {
  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="Appraisaltable4">
        <div className="appraisal_table">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5 block">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="appraisal_thead text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className=" border-gray-600" style={{ height: '70px' }}>
                  <th scope="col" className="px-6 py-3 border-r border-gray-600">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 border-r border-gray-600">
                    dwadhasi
                  </th>
                  <th scope="col" className="px-6 py-3 border-r border-gray-600">
                    Designation
                  </th>
                  <th scope="col" colSpan={2} className="px-6 py-3 border-r border-gray-600">
                    service manager
                  </th>
                  <th scope="col" colSpan={2} className="px-6 py-3 bg-gray-50 text-gray-700 ">
                    YTD
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="row_2_service border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Department
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Service
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Year&Month
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    2024
                  </td>
                </tr>

                <tr className="row_3_service border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Sl No
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Description
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Target
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Actual
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Achievement %
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Target
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Actual
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Achievement %
                  </td>
                </tr>

                <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td
                    scope="col"
                    className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">I</td>
                  <td
                    scope="col"
                    className="appraisal_row_1  uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Service Parameters (Target Vs Achievement)
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
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    1
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    MSI coverage
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
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    2
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Post warranty Coverage
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
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    3
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    STR
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
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    4
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    STTR
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
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    5
                  </td>
                  <td
                    scope="col"
                    className="appraisal_rowuppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    CSI
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
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    6
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Testimonials
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
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    7
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Combined Visit with Sales Team
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
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    8
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Repeat Sale
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
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    9
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Failed Parts Return on every week
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
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    10
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Service commission claiming before 10th of every month
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
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    11
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Attendance & Discipline
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
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    12
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
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
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    13
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Profit Target
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
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                </tr>

                <tr className="total_row_service border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="appraisal_row_1  uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
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
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    II
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row_1 uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Service Revenue(Target Vs Achievement )
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
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    0
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    0
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    1
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Service Commission
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
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    2
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Service Charge
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
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    3
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    AMC
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
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    4
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Parts Sale
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
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    5
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Performance Index
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
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    III
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row_1 uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Income Vs Expenses
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
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    1
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Service Commission (Scheduled service and warranty service)
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
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
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    2
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Service commission (against workshop charge and inventory cost)
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
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    3
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Service Charge
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
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    4
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    AMC
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
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    5
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
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
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    6
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Travelling Expenses
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
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    7
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
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
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    8
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Tools & Coveroll
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
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    9
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Inventory taken for warranty and workshop charge given for warranty machines
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
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                </tr>

                <tr className=" appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    10
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Service Vehicle Expenses
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
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    11
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
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
                </tr>

                <tr className="appraisal_row border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    12
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Income Vs Expenses
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
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                </tr>

                <tr className="total_row_service border-b border-gray-600  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    IV
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row_1  uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
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
                </tr>

                <tr className="appraisal_row border-b  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Submitted By :
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"
                    colSpan={2}>
                    dwadhasi
                  </td>
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Approved By:Head of the Detartment
                  </td>
                </tr>

                <tr className="appraisal_row border-b  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Signature:
                  </td>
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"
                    colSpan={2}></td>
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Signature:
                  </td>
                </tr>

                <tr className="apprasial_eligible_service   text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600"></td>
                    <td
                    scope="col"
                    className="uppercase  px-6 py-4  border-r text-gray-900 whitespace-nowrap dark:text-white  border-gray-600"></td>
                </tr>

                <tr className="row_3_service   text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  border-r text-gray-900 whitespace-nowrap dark:text-white  border-gray-600">
                      Sl No
                    </td>
                    <td
                    scope="col"
                    className="appraisal_row uppercase border-r px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600">
                      Support Required
                    </td>
                </tr>

                <tr className="appraisal_row  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  border-r text-gray-900 whitespace-nowrap dark:text-white  border-gray-600">
                   1
                    </td>
                    <td
                    scope="col"
                    className="uppercase border-r px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600">
            
                    </td>
                </tr>
                
                <tr className="appraisal_row  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  border-r text-gray-900 whitespace-nowrap dark:text-white  border-gray-600">
                   2
                    </td>
                    <td
                    scope="col"
                    className="uppercase  px-6 py-4 border-r text-gray-900 whitespace-nowrap dark:text-white  border-gray-600">
            
                    </td>
                </tr>

                <tr className="appraisal_row   text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  border-r text-gray-900 whitespace-nowrap dark:text-white  border-gray-600">
                   3
                    </td>
                    <td
                    scope="col"
                    className="uppercase  px-6 py-4 border-r text-gray-900 whitespace-nowrap dark:text-white  border-gray-600">
            
                    </td>
                </tr>

                <tr className="appraisal_row   text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  border-r text-gray-900 whitespace-nowrap dark:text-white  border-gray-600">
                   4
                    </td>
                    <td
                    scope="col"
                    className="uppercase  px-6 py-4 border-r text-gray-900 whitespace-nowrap dark:text-white  border-gray-600">
            
                    </td>
                </tr>

                <tr className="appraisal_row   text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  border-r text-gray-900 whitespace-nowrap dark:text-white  border-gray-600">
                   5
                    </td>
                    <td
                    scope="col"
                    className="uppercase border-r px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600">
            
                    </td>
                </tr>

                <tr className="appraisal_row  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  border-r text-gray-900 whitespace-nowrap dark:text-white  border-gray-600">
                   6
                    </td>
                    <td
                    scope="col"
                    className="uppercase border-r px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600">
            
                    </td>
                </tr>

                <tr className="appraisal_row  text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  border-r text-gray-900 whitespace-nowrap dark:text-white  border-gray-600">
                   7
                    </td>
                    <td
                    scope="col"
                    className="uppercase border-r  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600">
            
                    </td>
                </tr>

                <tr className="appraisal_row   text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  border-r text-gray-900 whitespace-nowrap dark:text-white  border-gray-600">
                   8
                    </td>
                    <td
                    scope="col"
                    className="uppercase border-r  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white  border-gray-600">
            
                    </td>
                </tr>

                <tr className="appraisal_row   text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50">
                  <td
                    scope="col"
                    className="appraisal_row uppercase  px-6 py-4  border-r text-gray-900 whitespace-nowrap dark:text-white  border-gray-600">
                   9
                    </td>
                    <td
                    scope="col"
                    className="uppercase  px-6 py-4  text-gray-900 border-r whitespace-nowrap dark:text-white  border-gray-600">
            
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </NavbarSidebarLayout>
  );
}

export default ServiceAppraisal;
