import React, { useEffect, useState } from 'react';
import NavbarSidebarLayout from '../../../../layouts/navbar-sidebar';
import './AddNewBill.css';
import { Plus, Database, ArrowBigLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import useExpenseReport from '../../../../hooks/useExpenseReport';
import axios from 'axios';

function AddNewBill() {
  const { GetAddBill } = useExpenseReport();
  const [addBill, setAddBill] = useState([]);
  const [sum, setSum] = useState(0);
  const navigate=useNavigate();
  useEffect(() => {
    const fetchAddBill = async () => {
      try {
        const data = await GetAddBill();
        setAddBill(data);

        // Calculate the sum of the 'Total' column
        const totalSum = data.reduce((acc, item) => acc + item.Total, 0); // Adjust 'value' to match your API response
        setSum(totalSum);
      } catch (error) {
        console.error('Error fetching expense reports:', error);
      }
    };

    fetchAddBill();
  }, [GetAddBill]);

  // Function to send all table data to the API using Axios
  const sendAllDataToAPI = async () => {
    try {
      // Gather all the data from the table
      const tableData = addBill.map(row => ({
        id: row.id,
        Date_from: row.Date_from,
        plc_from: row.plc_from,
        mode_of_con: row.mode_of_con,
        EXP_Type: row.EXP_Type,
        DA: row.DA,
        local: row.local,
        loading: row.loading,
        other: row.other,
        Total: row.Total,
        if_Other: row.if_Other,
        Additional_remarks: row.Additional_remarks,
      }));
  
      // Send the table data to the API using Axios
      const response = await axios.post('http://localhost:3005/subAddNewBill', tableData);
  
      if (response.status === 200) {
        // Handle success
        console.log('Data submitted successfully:', tableData);
      }
      navigate('/pages/reports/expensebillReport/list/Expense_report')
    } catch (error) {
      // Handle network errors or errors thrown during the request
      console.error('Error submitting data:', error.message);
    }
  };

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="AddNewBill_container">
        <div className="AddNewBill_row1">
          <div className="AddNewBill_row1_Bill_1">
            <label htmlFor="">Bill No</label>
            <input type="text" readOnly value={'ICO/EXP/3301'} />
          </div>
          <div className="AddNewBill_row1_Bill_1_s">
            <label htmlFor=""> Bill From </label>
            <input type="text" readOnly value={'18-05-2024 - 23-05-2024'} />
          </div>
          <div className="AddNewBill_row1_Bill_1">
            <label htmlFor="">Bill Upto</label>
            <input type="text" readOnly value={'18-05-2024'} />
          </div>
        </div>
        <hr />
        <div className="AddNewBill_row2">
          <div className="AddNewBill_row1_Bill_2">
            <label htmlFor="">Engineer</label>
            <input type="text" readOnly value={'Jilson'} />
          </div>
          <div className="AddNewBill_row1_Bill_2">
            <label htmlFor=""> Department</label>
            <input type="text" readOnly value={'sdsfsf'} />
          </div>
          <div className="AddNewBill_row1_Bill_2">
            <label htmlFor="">Designation</label>
            <input type="text" readOnly value={'sdsfsf'} />
          </div>
        </div>
        <hr />
        <div className="AddNewBill_row3">
          <Link to={'/pages/reports/expensebillReport/newBillForm/Form_New_Bill'}>
            <button>
              <Plus /> Add Bill
            </button>
          </Link>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">#</th>
                <th scope="col" className="px-6 py-3">Date</th>
                <th scope="col" className="px-6 py-3">Place</th>
                <th scope="col" className="px-6 py-3">Mode</th>
                <th scope="col" className="px-6 py-3">Expense</th>
                <th scope="col" className="px-6 py-3">DA</th>
                <th scope="col" className="px-6 py-3">Conv</th>
                <th scope="col" className="px-6 py-3">Lodging</th>
                <th scope="col" className="px-6 py-3">Others</th>
                <th scope="col" className="px-6 py-3">Total</th>
                <th scope="col" className="px-6 py-3">Remarks</th>
                <th scope="col" className="px-6 py-3">Attachment</th>
                <th scope="col" className="px-6 py-3">Edit</th>
              </tr>
            </thead>
            <tbody>
              {addBill.map((d, id) => (
                <tr
                  key={id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="px-6 py-4">{d.id}</td>
                  <td className="px-6 py-4">{d.Date_from}</td>
                  <td className="px-6 py-4">{d.plc_from}</td>
                  <td className="px-6 py-4">{d.mode_of_con}</td>
                  <td className="px-6 py-4">{d.EXP_Type}</td>
                  <td className="px-6 py-4">{d.DA}</td>
                  <td className="px-6 py-4">{d.local}</td>
                  <td className="px-6 py-4">{d.loading}</td>
                  <td className="px-6 py-4">{d.other}</td>
                  <td className="px-6 py-4">{d.Total}</td>
                  <td className="px-6 py-4">{d.if_Other}</td>
                  <td className="px-6 py-4">{d.Additional_remarks}</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="AddNewBill_total">
          <p>Total:{sum}</p>
        </div>
        <div className="AddNewBill_btn">
          <button type="submit" style={{ backgroundColor: '#04aa6d' }} onClick={sendAllDataToAPI}>
            <Database /> Submit
          </button>
          <Link to={'/pages/reports/expensebillReport/list/Expense_report'}>
            <button style={{ backgroundColor: '#188ae4' }}>
              <ArrowBigLeft /> Back
            </button>
          </Link>
        </div>
      </div>
    </NavbarSidebarLayout>
  );
}

export default AddNewBill;
