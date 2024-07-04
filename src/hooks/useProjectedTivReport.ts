import axios from 'axios';
import { ProjectedTivReport } from '../types';

interface UseTivReturn {
  fetchProjectedTivReport: () => Promise<ProjectedTivReport[]>;
}

const useProjectedTivReport = (): UseTivReturn => {
  async function fetchProjectedTivReport(): Promise<ProjectedTivReport[]> {
    try {
      const response = await axios.get('http://localhost:3006/projectedTiv');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  return {
    fetchProjectedTivReport,
  };
};

export default useProjectedTivReport;
