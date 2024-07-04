import axios from 'axios';
import {OrderLossData} from '../types'


const useOrderLoss = () => {
  const getOrderLossData = async (): Promise<OrderLossData[]> => {
    try {
      const response = await axios.get<OrderLossData[]>('http://localhost:3004/order_loss');
      return response.data;
    } catch (error) {
      console.error('Error fetching order loss data:', error);
      throw error;
    }
  };

  const postOrderLossData = async (data: OrderLossData): Promise<void> => {
    try {
      await axios.post('http://localhost:3004/order_loss', data);
    } catch (error) {
      console.error('Error posting order loss data:', error);
      throw error;
    }
  };

  return {
    getOrderLossData,
    postOrderLossData
  };
};

export default useOrderLoss;
