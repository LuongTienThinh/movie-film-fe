import { IRouterLink } from "interfaces";

const RouterLinks = (name: string): string | undefined => {
  const links: IRouterLink = {
    HomePage: '/',
    SeriesPage: '/series',
    GenresPage: '/genres',
  };

  return links[name];
}

export default RouterLinks;