import axios from "axios";
import { SalesManagerTarget } from "../types";

const useSalesManagerMonthlyTarget = () => {
  const getSalesManagerMonthlyTarget = async (): Promise<SalesManagerTarget[]> => {
    try {
      const response = await axios.get<SalesManagerTarget[]>('http://localhost:3002/sales_manager_monthly_target');
      return response.data;
    } catch (error) {
      console.error('Error fetching sales manager monthly target data:', error);
      throw error;
    }
  };

  const postSalesManagerMonthlyTarget = async (data: SalesManagerTarget): Promise<void> => {
    try {
      await axios.post('http://localhost:3002/sales_manager_monthly_target', data);
    } catch (error) {
      console.error('Error posting sales manager monthly target data:', error);
      throw error;
    }
  };

  return {
    getSalesManagerMonthlyTarget,
    postSalesManagerMonthlyTarget
  };
};

export default useSalesManagerMonthlyTarget;
