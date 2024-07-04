import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../constants/constants';

interface FormData {
  activity_descrption: string;
  proposed_date: string;
  proposed_amt: number;
  disbursable_amt: number;
  activity_name: string;
  engineer_id: number;
  created_by: number;
}

interface NavigateFunction {
  (path: string): void;
}

const useMarketing = () => {
  const fetchData = async (): Promise<any> => {
    try {
      const response: AxiosResponse = await axios.get(`${BASE_URL}GetMarkettingActivities.php`);
      return response.data;
    } catch (error) {
      console.error('Error fetching marketing data:', error);
      return null;
    }
  };

  const submitData = async (data: FormData, navigate: NavigateFunction): Promise<any> => {
    try {
      console.log('Form data:', data);
      const response: AxiosResponse = await axios.get(`${BASE_URL}CreateMarkettingActivity.php`, {
        params: {
          Activity_Name: data.activity_name,
          Description: data.activity_descrption,
          Proposed_Date: data.proposed_date,
          Proposed_Amt: data.proposed_amt,
          Disbursable_Amt: data.disbursable_amt,
          Engineer_Id: data.engineer_id,
          Created_By: data.created_by
        }
      });

      console.log('Data submitted successfully', response.data);
      await fetchData();
      navigate('/pages/Table/marketing_list/PdctDetials_List');
      return response.data;
    } catch (error) {
      console.error('Error submitting marketing data:', error);
      throw error;
    }
  };

  return {
    fetchData,
    submitData
  };
};

export default useMarketing;
