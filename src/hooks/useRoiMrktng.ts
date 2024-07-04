import axios from 'axios';
import { RoiMarketting } from '../types';

interface useRoiMrktngReturn {
  fetchDeal: () => Promise<RoiMarketting[]>;
}

const useRoiMrktng = (): useRoiMrktngReturn => {
  async function fetchDeal(): Promise<RoiMarketting[]> {
    try {
      const response = await axios.get('http://localhost:3002/roi_mrktng');
      return response.data.roi_mrktng;
    } catch (error) {
      console.error('Error fetching deal types:', error);
      throw error;
    }
  }

  return {
    fetchDeal,
  };
};

export default useRoiMrktng;




