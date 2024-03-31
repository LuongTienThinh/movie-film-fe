import { IRouterLink } from "interfaces";

const RouterLinks = (name: string): string | undefined => {
  const links: IRouterLink = {
    HomePage: '/',
    SeriesPage: 'series/',
    GenresPage: 'genres/',
    FilmDetail: 'film-detail/:id'
  };

  console.log(links[name]);
  

  return links[name];
}

export default RouterLinks;