import axios from 'axios';
import { BASE_URL, USER_EMAIL_PREF, USER_ID_PREF, USER_NAME_PREF, USER_MOBILE_PREF } from '../constants/constants';

export interface LoginFormType {
  username: string;
  userpassword: string;
}

export interface UserInfo {
  userId: string;
  email: string;
  username: string;
  mobile: string; 
}

export interface LoginReturn {
  data: any;
  error: string;
}

export interface UseAuthReturn {
  signIn: (formdata: LoginFormType) => Promise<LoginReturn>;
}

const useAuthorization = (): UseAuthReturn => {
  const signIn = async (formData: LoginFormType): Promise<LoginReturn> => {
    try {
      const response = await axios.get(`${BASE_URL}VerifyUser.php?User_Name=${formData.username}&User_Password=${formData.userpassword}`);      
      if (response.data.userinfo[0]) {
        const userInfo: UserInfo = response?.data?.userinfo[0];
        localStorage.setItem(USER_ID_PREF, userInfo.userId);
        localStorage.setItem(USER_EMAIL_PREF, userInfo.email);
        localStorage.setItem(USER_NAME_PREF, userInfo.username);
        localStorage.setItem(USER_MOBILE_PREF, userInfo.mobile); 
        return { data: userInfo, error: "" };
      } else {
        return { data: "", error: "Incorrect username or password" };
      }
    } catch (error) {
      return { data: {} as UserInfo, error: "An error occurred." };
    }
  };
  
  return {
    signIn,
  };
};

export default useAuthorization;
