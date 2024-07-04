import axios from 'axios';
import { BASE_URL } from '../constants/constants';

const useSalesCalls = () => {
  const GetSalesCalls = async (userId: number) => {
    try {
      const response = await axios.get(`${BASE_URL}GetSalesCalls.php?User_Id=` + userId);
      return response.data;
    } catch (error) {
      console.error('Error fetching deal types:', error);
      throw error;
    }
  };

  const CreateSalesCall = async (salesFormData: string) => {
    try {
      const response = await axios.get(`http://localhost:3010/prospect` + salesFormData);
      return response.data;
    } catch (error) {
      console.error('Error fetching deal suggested by:', error);
      throw error;
    }
  };

  return {
    GetSalesCalls,
    CreateSalesCall,
  };
};

export default useSalesCalls;