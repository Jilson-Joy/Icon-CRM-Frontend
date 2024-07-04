import axios from 'axios';
import { BASE_URL } from '../constants/constants';

const useFinanciers = () => {
  const GetFinanciersList = async () => {
    try {
      const response = await axios.get(`${BASE_URL}GetSalesFinanciers.php`);
      return response.data;
    } catch (error) {
      console.error('Error fetching machine types:', error);
      throw error;
    }
  };

  return {
    GetFinanciersList
  };
};

export default useFinanciers;