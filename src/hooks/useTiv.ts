import axios from "axios";
import { OEM, TivProjection } from "../types";
import { BASE_URL } from "../constants/constants";



interface useTivReturn {
    fetchOEM: () => Promise<OEM[]>;
    fetchTIV: () => Promise<TivProjection[]>
    CreateTIVProjection: (formData: string) => Promise<any>;
}


const useTiv = (): useTivReturn =>{
    
    async function fetchOEM(): Promise<OEM[]> {
        try {
          const response = await axios.get(`${BASE_URL}GetSalesOEMs.php`);
          return response.data;
        } catch (error) {
          console.error('Error fetching deal types:', error);
          throw error;
        }
      }

      async function fetchTIV(): Promise<TivProjection[]> {
        try {
          const response = await axios.get(`${BASE_URL}GetTIVProjections.php`); // Adjust the URL with appropriate parameters
          return response.data;
        } catch (error) {
          console.error('Error fetching deals:', error);
          throw error;
        }
      }

      async function CreateTIVProjection(formData: string): Promise<any> {
        try {
          const response = await axios.get(`${BASE_URL}CreateTIVProjection.php?${formData}`);
          return response.data;
        } catch (error) {
          console.error('Error creating TIV Projection:', error);
          throw error;
        }
      }
      


     

    return{
        fetchOEM,
        fetchTIV,
        CreateTIVProjection,
    };

};

export default useTiv;