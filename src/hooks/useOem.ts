import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../constants/constants';
// import { OEM } from '../types';

interface OEMData {
  // Define the structure of your OEM data here
}

const useOem = (): (() => Promise<OEMData | null>) => {
  const fetchData = async (): Promise<OEMData | null> => {
    try {
      const response: AxiosResponse<OEMData> = await axios.get(`${BASE_URL}/GetSalesOEMs.php`);
      return response.data;
    } catch (error) {
      console.error('Error fetching OEM data:', error);
      return null;
    }
  };

  return fetchData;
};

export default useOem;
