import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../constants/constants';

interface FormData {
  code: string;
  name: string;
}

interface NavigateFunction {
  (path: string): void;
}

const useSegment = () => {
  const fetchData = async (): Promise<any> => {
    try {
      const response: AxiosResponse = await axios.get(`${BASE_URL}GetSalesMachineSegments.php`);
      return response.data;
    } catch (error) {
      console.error('Error fetching Segment data:', error);
      return null;
    }
  };

  // ..
  const submitData = async (data: FormData, navigate: NavigateFunction): Promise<any> => {
    try {
      console.log('Form data:', data); 
      const response: AxiosResponse = await axios.get(`${BASE_URL}CreateMachineSegment.php`, {
        params: {
          Code: data.code,
          Name: data.name,
          Created_By: '1' 
        }
      });

      console.log('Data submitted successfully', response.data); 
      // Refetch segment data after successful submission
      await fetchData();
      navigate('/pages/segment/list/SegmentList');
      return response.data; 
    } catch (error) {
      throw error; 
    }
  };

  return {
    fetchData,
    submitData
  };
};

export default useSegment;
