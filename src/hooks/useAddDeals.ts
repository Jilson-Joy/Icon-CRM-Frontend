import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';

interface DealData {
  prospect_id: number;
  deal_name: string;
  machine_id: number;
  deal_type_id: number;
  expected_delivery_on: string;
  deal_suggestedby_id: number;
  created_by: string;
}

interface AddDealsResult {
  isLoading: boolean;
  error: any;
  addDeal: (dealData: DealData) => Promise<any>;
}

const useAddDeals = (): AddDealsResult => {
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const addDeal = async (dealData: DealData): Promise<any> => {
    setIsLoading(true);
    try {
      const response: AxiosResponse<any> = await axios.post(
        'https://iconesequipments.co.in/IconesSalesAPI/CreateSalesDeal.php',
        dealData
      );
      setIsLoading(false);
      return response.data;
    } catch (error) {
      setError(error);
      setIsLoading(false);
      throw error;
    }
  };

  return { addDeal, isLoading, error };
};

export default useAddDeals;
