// useOfm.ts
import axios from 'axios';
import { Ofm } from '../types';


const useOfm = () => {
    const getOfmData = async (): Promise<Ofm[]> => {
      try {
        const response = await axios.get<Ofm[]>('http://localhost:3005/ofm');
        return response.data;
      } catch (error) {
        console.error('Error fetching ofm data:', error);
        throw error;
      }
    };

    const postOfmData = async (data: Ofm): Promise<void> => {
        try {
          await axios.post('http://localhost:3005/ofm', data);
        } catch (error) {
          console.error('Error posting ofm data:', error);
          throw error;
        }
      };
  
   
  
    return {
        getOfmData,
        postOfmData
    
    };
  };
  
  export default useOfm;