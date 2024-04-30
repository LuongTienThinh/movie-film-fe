import { IPage } from "interfaces";
import { FilmService } from "services";

const PAGE: IPage = {
  'latest': {
    title: 'Anime mới nhất',
    getData: FilmService.getLatest,
  },
  'series': {
    title: 'Anime bộ (series)',
    getData: FilmService.getSeries,
  },
  'movies': {
    title: 'Anime movie',
    getData: FilmService.getMovies,
  },
};

export default PAGE;
