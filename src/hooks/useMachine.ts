import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../constants/constants';

interface Machine {
  // Define the structure of your machine data here
  // For example:
  id: number;
  name: string;
  code: string;
  oem_id: number;
  model_name: string;
  tonnage_id: number;
  segment_id: number;
  price: number;
  created_by: number;
  created_on: string;
  status: string;
  // Add more properties as needed
}

interface FormData {
  Code: string;
  name: string;
  oem: string;
  modelNo: string;
  Tonnage: string;
  Segment: string;
  price: string;
}

const useMachine = () => {
  const GetMachineList = async (): Promise<Machine[]> => {
    try {
      const response: AxiosResponse<Machine[]> = await axios.get(`${BASE_URL}GetSalesMachines.php`);
      return response.data;
    } catch (error) {
      console.error('Error fetching machine:', error);
      throw error;
    }
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}GetSalesMachines.php`);
      return response.data;
    } catch (error) {
      console.error('Error fetching machine data:', error);
      throw error;
    }
  };

  const SubmitMachineData = async (formData: FormData) => {
    try {
      const { Code, name, oem, modelNo, Tonnage, Segment, price } = formData;
      const response = await axios.get(`${BASE_URL}CreateSalesMachine.php`, {
        params: {
          Code,
          Name: name,
          OEM_Id: oem,
          Model_Name: modelNo,
          Tonnage_Id: Tonnage,
          Segment_Id: Segment,
          Price: price,
          Created_By: '1' // Assuming Created_By is always '1'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error submitting data:', error);
      throw new Error('Failed to submit data');
    }
  };
  return {
    GetMachineList,
    fetchData,
    SubmitMachineData
  };
};

export default useMachine;
// ..........................................................................
