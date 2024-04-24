import { IRouterLink } from 'interfaces';

const RouterApisLink = (name: string): string | undefined => {
  const apisLink: IRouterLink = {
    Auth: 'auth',
  };

  return `api/${apisLink[name]}`;
};

export default RouterApisLink;
