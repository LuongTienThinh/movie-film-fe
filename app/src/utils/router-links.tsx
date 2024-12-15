import { IRouterLink } from 'interfaces';

const RouterLinks = (name: string): string | undefined => {
  const links: IRouterLink = {
    HomePage: '/',
    SearchPage: '/pages/:page',
    GenrePage: '/pages/:page/:slug',
    FilmDetail: 'film-detail/:slug',
    Episode: 'film-detail/:slug/:ep',
    Login: '/login',
    SignUp: '/sign-up',
    ForgotPassword: '/forgot-password',
    Profile: '/profile',
    Wishlist: '/wishlist',
  };

  return links[name];
};

export default RouterLinks;
