import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../constants/constants';
// import { Financier } from '../types';

interface FinancierData {
  // Define the structure of your Financier data if needed
}

const useFinancier = () => {
  const fetchData = async (): Promise<FinancierData | null> => {
    try {
      const response: AxiosResponse<FinancierData> = await axios.get(`${BASE_URL}/GetSalesFinanciers.php`);
      return response.data;
    } catch (error) {
      console.error('Error fetching Financier data:', error);
      return null;
    }
  };

  return fetchData;
};

export default useFinancier;
