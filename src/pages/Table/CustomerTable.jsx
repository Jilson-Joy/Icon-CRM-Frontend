import React from "react";
import "./CustomerTable.css";

function CustomerTable() {
  return (
    <div className="table_container">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="table w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 shadow">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                SL NO
              </th>
              <th scope="col" className="px-6 py-3">
                Customer name
              </th>
              <th scope="col" className="px-6 py-3">
                Proposed date
              </th>
              <th scope="col" className="px-6 py-3">
                Oem
              </th>
              <th scope="col" className="px-6 py-3">
                M/C Model
              </th>
              <th scope="col" className="px-6 py-3">
                Competetion 1
              </th>
              <th scope="col" className="px-6 py-3">
                Competetion 2
              </th>
              <th scope="col" className="px-6 py-3">
                engineer name
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <td data-lable="SL NO" className="px-6 py-4">
                Silver
              </td>
              <td data-lable="Financier name" className="px-6 py-4">
                Laptop
              </td>
              <td data-lable="Executive name" className="px-6 py-4">
                $2999
              </td>
              <td data-lable="discussion points" className="px-6 py-4">
                $2999
              </td>
              <td data-lable="Sales enginner name" className="px-6 py-4">
                $2999
              </td>
              <td data-lable="Remarks" class="px-6 py-4">
                bfnhxd
              </td>
              <td data-lable="Remarks" class="px-6 py-4">
                bfnhxd
              </td>{" "}
              <td data-lable="Remarks" class="px-6 py-4">
                bfnhxd
              </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <td data-lable="SL NO" className="px-6 py-4">
                Silver
              </td>
              <td data-lable="Financier name" className="px-6 py-4">
                Laptop
              </td>
              <td data-lable="Executive name" className="px-6 py-4">
                $2999
              </td>
              <td data-lable="discussion points" className="px-6 py-4">
                $2999
              </td>
              <td data-lable="Sales enginner name" className="px-6 py-4">
                $2999
              </td>
              <td data-lable="Remarks" class="px-6 py-4">
                bfnhxd
              </td>
              <td data-lable="Remarks" class="px-6 py-4">
                bfnhxd
              </td>{" "}
              <td data-lable="Remarks" class="px-6 py-4">
                bfnhxd
              </td>
            </tr>

            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <td data-lable="SL NO" className="px-6 py-4">
                Silver
              </td>
              <td data-lable="Financier name" className="px-6 py-4">
                Laptop
              </td>
              <td data-lable="Executive name" className="px-6 py-4">
                $2999
              </td>
              <td data-lable="discussion points" className="px-6 py-4">
                $2999
              </td>
              <td data-lable="Sales enginner name" className="px-6 py-4">
                $2999
              </td>
              <td data-lable="Remarks" class="px-6 py-4">
                bfnhxd
              </td>
              <td data-lable="Remarks" class="px-6 py-4">
                bfnhxd
              </td>{" "}
              <td data-lable="Remarks" class="px-6 py-4">
                bfnhxd
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerTable;
