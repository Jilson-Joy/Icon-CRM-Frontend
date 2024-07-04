import axios, { AxiosResponse } from 'axios';

interface FormData {
  // Define the structure of your form data
  // For example:
  // name: string;
  // email: string;
  // etc.
}

const useCmpltdMrktng = () => {
  const submitCmpltdMrktng = async (formData: FormData): Promise<boolean> => {
    try {
      const response: AxiosResponse<any> = await axios.post(`http://localhost:3000/marketing_rprtCmpltd`, formData);
      return true; // Assuming the server responds with success
    } catch (error) {
      console.error('Error submitting completed marketing report:', error);
      return false;
    }
  };

  return { submitCmpltdMrktng }; // return as an object
};

export default useCmpltdMrktng;








// import axios, { AxiosResponse } from 'axios';

// interface FormData {
//   marketingActivity: string;
//   proposedDate: string;
//   proposedAmount: string;
//   disbursibleAmount: string;
//   engineerName: string;
//   dateofActvty: string;
//   totalExpense: string;
//   remarks: string;
// }

// const useCmpltdMrktng = () => {
//   const submitCmpltdMrktng = async (formData: FormData, id: string): Promise<any | null> => {
//     try {
//       const response: AxiosResponse<any> = await axios.put(`http://localhost:3000/marketing_rprtCmpltd/${id}`, formData, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       return response.data; // Assuming your backend returns some data upon successful submission
//     } catch (error) {
//       console.error('Error updating marketing report:', error);
//       return null;
//     }
//   };

//   return { submitCmpltdMrktng };
// };

// export default useCmpltdMrktng;

