import axios from 'axios';
import { BASE_URL } from '../constants/constants';

const useProspects = () => {
  const fetchProspectsList = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/GetProspects.php?User_Id=1`);
      return response.data;
    } catch (error) {
      console.error('Error fetching OEM data:', error);
      return null;
    }
  };

  const addProspect = async (newProspect: string) => {
    try {
      const response = await axios.post(`${BASE_URL}/CreateProspects.php?`, newProspect);
      return response.data;
    } catch (error) {
      console.error('Error adding prospect:', error);
      return null;
    }
  };

  return { fetchProspectsList, addProspect };
};

export default useProspects;
