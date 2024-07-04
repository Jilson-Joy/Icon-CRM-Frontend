import axios from 'axios';
// import { BASE_URL } from '../constants/constants';

const useProspectReport = () => {
  const GetuseProspectReport = async () => {
    try {
      const response = await axios.get(`http://localhost:3010/prospect`);
      return response.data;
    } catch (error) {
      console.error('Error fetching deal types:', error);
      throw error;
    }
  };



  return {
    GetuseProspectReport
  };
};

export default useProspectReport;