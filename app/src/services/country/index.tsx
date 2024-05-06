import axios from 'axios';
import { routerApisLink } from 'utils';
import { IApiResponseData } from 'interfaces';

const CountryService = {
  nameLink: 'Country',

  getAllCountries: async () => {
    try {
      let data: IApiResponseData = {
        data: null,
      };

      data = await axios.get(`${routerApisLink(CountryService.nameLink)}`);

      return data?.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error?.response?.data || null;
      }

      console.log('An error occurred:', error);

      return null;
    }
  },

  getDetailCountry: async (slug: string) => {
    try {
      let data: IApiResponseData = {
        data: null,
      };

      data = await axios.get(`${routerApisLink(CountryService.nameLink)}/${slug}`);

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

export default CountryService;
