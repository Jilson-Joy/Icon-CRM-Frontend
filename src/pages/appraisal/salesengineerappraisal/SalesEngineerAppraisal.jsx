import React from 'react';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import './SalesEngineerAppraisal.css';

function SalesEngineerAppraisal() {
  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="Appraisaltable1">
        <div className="appraisal_table">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5 block">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="appraisal_thead uppercase text-xs text-gray-700 uppercase ">
                <tr className="first_row border-b border-gray-600" style={{ height: '70px' }}>
                  <th scope="col" className="px-6 py-3 border-r border-gray-600">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 border-r border-gray-600">
                    dwadhasi
                  </th>
                  <th scope="col" className="px-6 py-3 border-r border-gray-600">
                    Designation
                  </th>
                  <th scope="col" colSpan={4} className="px-6 py-3">
                    rrtyyhu
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className="row_2_sales border-b dark:bg-gray-800 dark:border-gray-700 "
                  >
                  <td scope="col" className="uppercase  px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td scope="col" className="uppercase  px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Department
                  </td>
                  <td scope="col" className="uppercase  px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Sales
                  </td>
                  <td scope="col" className="uppercase  px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Year
                  </td>
                  <td scope="col" className="uppercase  px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    2004
                  </td>
                  <td scope="col" className="uppercase  px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Month
                  </td>
                  <td scope="col" className="uppercase  px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    April{' '}
                  </td>
                </tr>

                <tr className="row_3_sales bg-white  border-b dark:bg-gray-800 dark:border-gray-700 ">
                  <td className="appraisal_row_1  uppercase  px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Sl No
                  </td>
                  <td className="appraisal_row_1  uppercase  px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Description
                  </td>
                  <td className="appraisal_row_1  uppercase  px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Target{' '}
                  </td>
                  <td className="appraisal_row_1  uppercase  px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Actual
                  </td>
                  <td
                    colSpan={4}
                    className="appraisal_row_1  uppercase  px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    Achievement %
                  </td>
                </tr>

                <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    I
                  </td>
                  <td className="appraisal_row_1  uppercase  px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Sales Call Agregates & Reporting
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    colSpan={4}
                    className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white "></td>
                </tr>

                <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    1
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    No Of Sales Calls
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    80{' '}
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    70
                  </td>
                  <td
                    colSpan={4}
                    className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    87.5
                  </td>
                </tr>

                <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    2
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Prospects Generated
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    10{' '}
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    10
                  </td>
                  <td
                    colSpan={4}
                    className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    100
                  </td>
                </tr>

                <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    3
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Marketting Activities
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    0{' '}
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    0
                  </td>
                  <td
                    colSpan={4}
                    className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    #DlV/0!
                  </td>
                </tr>

                <tr className="total_row_sales bg-white  border-b dark:bg-gray-800 dark:border-gray-700 ">
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td className="appraisal_row_1 uppercase px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    Total Score
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    {' '}
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    colSpan={4}
                    className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    #DlV/0!
                  </td>
                </tr>

                <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    II
                  </td>
                  <td className="appraisal_row_1 uppercase px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Market Share & Participation Rate
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    {' '}
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    colSpan={4}
                    className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white "></td>
                </tr>

                <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    1
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    No of m/c sold in the current month
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    2{' '}
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    0
                  </td>
                  <td
                    colSpan={4}
                    className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white "></td>
                </tr>

                <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    2
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    No of m/c sold in the territory excluding sany
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    NA{' '}
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    colSpan={4}
                    className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white "></td>
                </tr>

                <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    3
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Total No of Machine in the teritorry
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    NA{' '}
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    2
                  </td>
                  <td
                    colSpan={4}
                    className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white "></td>
                </tr>

                <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    4
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Attended deals in the teritory(including sany)
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    NA{' '}
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    2
                  </td>
                  <td
                    colSpan={4}
                    className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    2
                  </td>
                </tr>

                <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    5
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Participation Rate
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    80{' '}
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    100
                  </td>
                  <td
                    colSpan={4}
                    className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    125
                  </td>
                </tr>

                <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    6
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Strike Rate
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    {' '}
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    colSpan={4}
                    className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white "></td>
                </tr>

                <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    7
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Market Share
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    {' '}
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    colSpan={4}
                    className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white "></td>
                </tr>

                <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    {' '}
                    8
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Attendance & Discipline
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    {' '}
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    colSpan={4}
                    className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white "></td>
                </tr>

                <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    9
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Competetor Awarness
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    {' '}
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    colSpan={4}
                    className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white "></td>
                </tr>
                <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    10
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    {' '}
                    Projection Accurancy
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    {' '}
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    colSpan={4}
                    className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white "></td>
                </tr>

                <tr className="total_row_sales bg-white  border-b dark:bg-gray-800 dark:border-gray-700 ">
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td className="appraisal_row_1  uppercase  px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    Total Score
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white total_row_sales">
                    {' '}
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    colSpan={4}
                    className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    34567
                  </td>
                </tr>

                <tr className="apprasial_eligible_sales  text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    colSpan={6}
                    className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    Eligible Incentive
                  </td>
                </tr>
                <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="appraisal_row_1  uppercase  px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Sl No
                  </td>
                  <td className="appraisal_row_1  uppercase  px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Customer Name with M/C Model
                  </td>
                  <td className="appraisal_row_1  uppercase  px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    NO.OF MACHINES
                  </td>
                  <td className="appraisal_row_1  uppercase  px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    ELIGIBLE INCENTIVE
                  </td>
                  <td
                    colSpan={6}
                    className="appraisal_row_1  uppercase  px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    Total Incentive
                  </td>
                </tr>
                <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    1
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Customer Name with M/C Model
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    NO.OF MACHINES
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    ELIGIBLE INCENTIVE
                  </td>
                  <td
                    colSpan={6}
                    className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    Total Incentive
                  </td>
                </tr>
                <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    2
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Customer Name with M/C Model
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    NO.OF MACHINES
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    ELIGIBLE INCENTIVE
                  </td>
                  <td
                    colSpan={6}
                    className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    Total Incentive
                  </td>
                </tr>
                <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    3
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Customer Name with M/C Model
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    NO.OF MACHINES
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    ELIGIBLE INCENTIVE
                  </td>
                  <td
                    colSpan={6}
                    className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    Total Incentive
                  </td>
                </tr>
                <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    4
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Customer Name with M/C Model
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    NO.OF MACHINES
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    ELIGIBLE INCENTIVE
                  </td>
                  <td
                    colSpan={6}
                    className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    Total Incentive
                  </td>
                </tr>
                <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    5
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Customer Name with M/C Model
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    NO.OF MACHINES
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    ELIGIBLE INCENTIVE
                  </td>
                  <td
                    colSpan={6}
                    className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    Total Incentive
                  </td>
                </tr>
                <tr className="total_row_sales bg-white  border-b dark:bg-gray-800 dark:border-gray-700 ">
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    className="appraisal_row_1  uppercase  px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"
                    colSpan={3}>
                    Total
                  </td>

                  <td
                    colSpan={6}
                    className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    0
                  </td>
                </tr>

                <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    {' '}
                    Submitted By :
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    Sayikrishnan
                  </td>
                  <td
                    colSpan={6}
                    className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Approved By:Head of the Department{' '}
                  </td>
                </tr>

                <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600">
                    {' '}
                    Signature :
                  </td>
                  <td className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-600"></td>
                  <td
                    colSpan={6}
                    className="appraisal_row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Signature :{' '}
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

export default SalesEngineerAppraisal;
