import axios from "axios";
import { SalesEngineerTarget } from "../types";




const useSalesEngineerMonthlyTarget = () => {
    const getSalesEngineerMonthlyTarget = async (): Promise<SalesEngineerTarget[]> => {
      try {
        const response = await axios.get<SalesEngineerTarget[]>('http://localhost:3001/sales_engineer_monthly_target');
        return response.data;
      } catch (error) {
        console.error('Error fetching sales engineer monthly target data:', error);
        throw error;
      }
    };
  
    const postSalesEngineerMonthlyTarget = async (data: SalesEngineerTarget): Promise<void> => {
      try {
        await axios.post('http://localhost:3001/sales_engineer_monthly_target', data);
      } catch (error) {
        console.error('Error posting sales engineer monthly target data:', error);
        throw error;
      }
    };
  
    return {
      getSalesEngineerMonthlyTarget,
      postSalesEngineerMonthlyTarget
    };
  };
  
  export default useSalesEngineerMonthlyTarget;