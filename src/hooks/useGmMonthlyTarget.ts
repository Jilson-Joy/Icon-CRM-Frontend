import axios from "axios";
import { GMTarget} from "../types";

const useGMMonthlyTarget = () => {
  const getGMMonthlyTarget = async (): Promise<GMTarget[]> => {
    try {
      const response = await axios.get<GMTarget[]>('http://localhost:3004/gm_monthly_target');
      return response.data;
    } catch (error) {
      console.error('Error fetching gm monthly target data:', error);
      throw error;
    }
  };

  const postGMMonthlyTarget = async (data: GMTarget): Promise<void> => {
    try {
      await axios.post('http://localhost:3004/gm_monthly_target', data);
    } catch (error) {
      console.error('Error posting gm monthly target data:', error);
      throw error;
    }
  };

  return {
    getGMMonthlyTarget,
    postGMMonthlyTarget
  };
};

export default useGMMonthlyTarget;
