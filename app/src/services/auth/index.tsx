import axios from 'axios';
import { routerApisLink } from 'utils';
import Cookies from 'js-cookie';
import { IApiResponseData } from 'interfaces';

const AuthService = {
  nameLink: 'Auth',

  login: async (params: Object) => {
    try {
      let data: IApiResponseData = {
        data: null,
      };

      await axios.get('/sanctum/csrf-cookie').then(async (res) => {
        localStorage.setItem('X-CSRF-TOKEN', Cookies.get('XSRF-TOKEN'));

        data = await axios.post(`${routerApisLink(AuthService.nameLink)}/login`, { ...params });
      });

      return data?.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error?.response?.data || null;
      }

      console.log('An error occurred:', error);

      return null;
    }
  },

  signUp: async (params: Object) => {
    try {
      const data: IApiResponseData = await axios.post(`${routerApisLink(AuthService.nameLink)}/sign-up`, { ...params });

      return data?.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error?.response?.data || null;
      }

      console.log('An error occurred:', error);

      return null;
    }
  },
};

export default AuthService;
