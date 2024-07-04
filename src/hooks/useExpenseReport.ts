import axios from 'axios';

const useExpenseReport = () => {
  // report
  const GetExpenseReportList = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/data`);
      return response.data;
    } catch (error) {
      console.error('Error fetching machine types:', error);
      throw error;
    }
  };
  // AddNewBill
  const GetAddBill = async () => {
    try {
      const response = await axios.get(`http://localhost:3004/BillData`);
      return response.data;
    } catch (error) {
      console.error('Error fetching machine types:', error);
      throw error;
    }
  };
  // Add Bill
  const GetFormBillData = async () => {
    try {
      const response = await axios.get(`http://localhost:3009/data`);
      return response.data;
    } catch (error) {
      console.error('Error fetching machine types:', error);
      throw error;
    }
  };

  // Submit data from Expense Bill form to Add New Bill
  // AddNewBillPost
  const submitFormBillData = async (formData:string) => {
    try {
      const response = await axios.post('http://localhost:3004/BillData', formData);
      return response.data;
    } catch (error) {
      console.error('Error submitting form data:', error);
      throw error;
    }
  };

  return {
    GetExpenseReportList,
    GetAddBill,
    GetFormBillData,
    submitFormBillData
  };
};

export default useExpenseReport;