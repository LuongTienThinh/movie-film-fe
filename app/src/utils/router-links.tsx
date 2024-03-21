import { IRouterLink } from "interfaces";

const RouterLinks = (name: string): string | undefined => {
  const links: IRouterLink = {
    Home: '/',
    Movies: '/movies'
  };

  return links[name];
}

export default RouterLinks;