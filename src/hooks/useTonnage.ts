import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../constants/constants';

interface TonnageData {
  id: number;
  name: string;
  code: string;
  createdBy: number;
}

const useTonnage = () => {
  const fetchData = async (): Promise<TonnageData[] | null> => {
    try {
      const response: AxiosResponse<TonnageData[]> = await axios.get(`${BASE_URL}/CreateMachineTonnage.php?Code=2.5T&Name=2.5%20TON&Created_By=1`);
      return response.data;
    } catch (error) {
      console.error('Error fetching Tonnage data:', error);
      return null;
    }
  };

  return fetchData;
};

export default useTonnage;
