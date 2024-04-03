import { IRouterLink } from "interfaces";

const RouterLinks = (name: string): string | undefined => {
  const links: IRouterLink = {
    HomePage: '/',
    SeriesPage: 'series/',
    GenresPage: 'genres/',
    FilmDetail: 'film-detail/:id',
    Episode: 'film-detail/:id/:ep',
    Login: '/login',
    SignUp: '/sign-up',
    ForgotPassword: '/forgot-password',
  };

  return links[name];
}

export default RouterLinks;