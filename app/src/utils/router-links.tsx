import { IRouterLink } from "interfaces";

const RouterLinks = (name: string): string | undefined => {
  const links: IRouterLink = {
    Home: '/',
    AnimeSeries: '/series'
  };

  return links[name];
}

export default RouterLinks;