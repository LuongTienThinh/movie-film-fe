import axios from 'axios';
import { routerApisLink } from 'utils';
import { IApiResponseData } from 'interfaces';

const GenreService = {
  nameLink: 'Genre',

  getAllGenres: async () => {
    try {
      let data: IApiResponseData = {
        data: null,
      };

      data = await axios.get(`${routerApisLink(GenreService.nameLink)}`);

      return data?.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error?.response?.data || null;
      }

      console.log('An error occurred:', error);

      return null;
    }
  },

  getDetailGenre: async (slug: string) => {
    try {
      let data: IApiResponseData = {
        data: null,
      };

      data = await axios.get(`${routerApisLink(GenreService.nameLink)}/${slug}`);

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

export default GenreService;
