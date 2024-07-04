import axios from 'axios';

const useExpense = () => {
  // report
  const GetExpenselist = async () => {
    try {
      const response = await axios.get(`http://localhost:3016/EXPTableData`);
      return response.data;
    } catch (error) {
      console.error('Error fetching machine types:', error);
      throw error;
    }
  };
  return {
    GetExpenselist
  };
};

export default useExpense;