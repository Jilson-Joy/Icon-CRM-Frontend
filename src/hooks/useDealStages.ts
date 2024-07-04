import axios from 'axios';
import { BASE_URL } from '../constants/constants';

const useDealStages = () => {
  const GetStagesList = async () => {
    try {
      const response = await axios.get(`${BASE_URL}GetSalesDealStages.php`);
      return response.data;
    } catch (error) {
      console.error('Error fetching machine types:', error);
      throw error;
    }
  };

  return {
    GetStagesList
  };
};

export default useDealStages;