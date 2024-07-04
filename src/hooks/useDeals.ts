import axios from 'axios';
import { BASE_URL } from '../constants/constants';
import { DealType, DealSuggestedBy, MachineType , GetDeal , Prospects } from '../types';

interface UseDealsReturn {
  fetchDealTypes: () => Promise<DealType[]>;
  fetchDealSuggestedBy: () => Promise<DealSuggestedBy[]>;
  fetchMachineTypes: () => Promise<MachineType[]>; // Function to fetch machine types
  fetchDeals: () => Promise<GetDeal[]>; // Function to fetch deals
  fetchProspects: () => Promise<Prospects[]>;
  addDeal: (newDeal: string) => Promise<Prospects[]>;
}

const useDeals = (): UseDealsReturn => {
  
  async function fetchDealTypes(): Promise<DealType[]> {
    try {
      const response = await axios.get(`${BASE_URL}GetSalesDealTypes.php`);
      return response.data;
    } catch (error) {
      console.error('Error fetching deal types:', error);
      throw error;
    }
  } 

  async function fetchDealSuggestedBy(): Promise<DealSuggestedBy[]> {
    try {
      const response = await axios.get(`${BASE_URL}GetSalesDealSuggestedBy.php`);
      return response.data;
    } catch (error) {
      console.error('Error fetching deal suggested by:', error);
      throw error;
    }
  }

  async function fetchMachineTypes(): Promise<MachineType[]> {
    try {
      const response = await axios.get(`${BASE_URL}GetSalesMachines.php`);
      return response.data;
    } catch (error) {
      console.error('Error fetching machine types:', error);
      throw error;
    }
  }

  async function fetchDeals(): Promise<GetDeal[]> {
    try {
      const response = await axios.get(`${BASE_URL}GetSalesDeals.php?User_Id=1`); // Adjust the URL with appropriate parameters
      return response.data;
    } catch (error) {
      console.error('Error fetching deals:', error);
      throw error;
    }
  }

  async function fetchProspects(): Promise<Prospects[]> {
    try {
      const response = await axios.get(`${BASE_URL}GetProspects.php?User_Id=1`);
      return response.data;
    } catch (error) {
      console.error('Error fetching prospects:', error);
      throw error;
    }
  }
  
  const addDeal = async (newDeal: string) => {
    try {
      const response = await axios.post(`${BASE_URL}/CreateSalesDeal.php?`, newDeal);
      return response.data;
    } catch (error) {
      console.error('Error adding prospect:', error);
      return null;
    }
  };

  

  return {
    fetchDealTypes,
    fetchDealSuggestedBy,
    fetchMachineTypes, // Include fetchMachineTypes in the returned object
    fetchDeals,
    fetchProspects,
    addDeal
  };
};

export default useDeals;
