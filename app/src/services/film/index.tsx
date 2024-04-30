import axios from 'axios';
import { routerApisLink } from 'utils';
import { IApiResponseData } from 'interfaces';

const FilmService = {
  nameLink: 'Film',

  getLatest: async () => {
    try {
      let data: IApiResponseData = {
        data: null,
      };

      data = await axios.get(`${routerApisLink(FilmService.nameLink)}/latest`);

      return data?.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error?.response?.data || null;
      }

      console.log('An error occurred:', error);

      return null;
    }
  },
  getSeries: async () => {
    try {
      let data: IApiResponseData = {
        data: null,
      };

      data = await axios.get(`${routerApisLink(FilmService.nameLink)}/series`);

      return data?.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error?.response?.data || null;
      }

      console.log('An error occurred:', error);

      return null;
    }
  },
  getMovies: async () => {
    try {
      let data: IApiResponseData = {
        data: null,
      };

      data = await axios.get(`${routerApisLink(FilmService.nameLink)}/movies`);

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

export default FilmService;
