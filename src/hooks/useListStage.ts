import axios from 'axios';
// import { BASE_URL } from '../constants/constants';

const useListStage = () => {
  const GetListStage = async () => {
    try {
      const response = await axios.get(`http://localhost:3012/listStage`);
      return response.data;
    } catch (error) {
      console.error('Error fetching deal types:', error);
      throw error;
    }
  };

  const GetfleetData = async () => {
    try {
      const response = await axios.get(`http://localhost:3016/fleetData`);
      return response.data;
    } catch (error) {
      console.error('Error fetching deal types:', error);
      throw error;
    }
  };


  return {
    GetListStage,
    GetfleetData
  };
};

export default useListStage;
