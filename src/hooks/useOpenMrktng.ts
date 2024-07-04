import axios, { AxiosResponse } from 'axios';

interface MarketingReport {
  // Define the structure of the marketing report data
  // Adjust the types according to your actual data structure
  // For example:
  id: number;
  marketingActivity: string;
  proposedDate: string;
  proposedAmount: number;
  disbursibleAmount: number;
  engineerName: string;
  dateofActvty: string;
  totalExpense: number;
  remarks: string;
}

const useOpenMrktng = () => {
  const fetchOpenMrktng = async (id?: number): Promise<MarketingReport | null> => {
    try {
      const url = id ? `http://localhost:3001/marketing_report_detials/${id}` : `http://localhost:3001/marketing_report_detials`;
      const response: AxiosResponse<MarketingReport> = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching OEM data:', error);
      return null;
    }
  };

  return { fetchOpenMrktng };
};

export default useOpenMrktng;
