import axios from 'axios';
// import { BASE_URL } from '../constants/constants';

const useOrderLossReport = () => {
  const GetOrderLossReport = async () => {
    try {
      const response = await axios.get(`http://localhost:3011/orderloss`);
      return response.data;
    } catch (error) {
      console.error('Error fetching deal types:', error);
      throw error;
    }
  };

  return {
    GetOrderLossReport
  };
};

export default useOrderLossReport;
