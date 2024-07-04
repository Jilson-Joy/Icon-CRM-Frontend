import axios from 'axios';
// import { BASE_URL } from '../constants/constants';

const useSalesReport = () => {
  const GetSalesReport = async () => {
    try {
      const response = await axios.get(`http://localhost:3015/SalesCall`);
      return response.data;
    } catch (error) {
      console.error('Error fetching deal types:', error);
      throw error;
    }
  };



  return {
    GetSalesReport
  };
};

export default useSalesReport;