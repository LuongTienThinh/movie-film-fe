import axios from 'axios';
import { routerApisLink } from 'utils';
import { IApiResponseData } from 'interfaces';

const FilmService = {
  nameLink: 'Film',

  getData: async (url: string, params?: Object) => {    
    try {
      let data: IApiResponseData = {
        data: null,
      };

      if (params) {
        data = await axios.get(`${routerApisLink(FilmService.nameLink)}${url}`, {
          params: params,
        });
      } else {
        data = await axios.get(`${routerApisLink(FilmService.nameLink)}${url}`);
      }

      return data?.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error?.response?.data || null;
      }

      console.log('An error occurred:', error);

      return null;
    }
  },

  getLatest: async (params?: Object) => await FilmService.getData('/latest', params),

  getSeries: async (params?: Object) => await FilmService.getData('/series', params),

  getMovies: async (params?: Object) => await FilmService.getData('/movies', params),

  getDetailFilm: async (params?: Object) => await FilmService.getData('/detail', params),

  getFilmBySearch: async (params?: Object) => await FilmService.getData('/search', params),

  getFilmByGenre: async (params?: Object, slug?: string) => await FilmService.getData(`/genre/${slug}`, params),

  getFilmByCountry: async (params?: Object, slug?: string) => await FilmService.getData(`/country/${slug}`, params),
};

export default FilmService;
