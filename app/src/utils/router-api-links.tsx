import { IRouterLink } from 'interfaces';

const RouterApisLink = (name: string): string | undefined => {
  const apisLink: IRouterLink = {
    Auth: 'auth',
    Film: 'film',
    Genre: 'genre',
    Country: 'country',
  };

  return `api/${apisLink[name]}`;
};

export default RouterApisLink;
