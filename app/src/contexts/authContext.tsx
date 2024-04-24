import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import { IAuthContext, IComponentProps } from 'interfaces';
import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export const AuthContext = React.createContext<IAuthContext>({
  user: {},
  setUser: () => {},
  isAuth: false,
  accessToken: '',
  setIsAuth: (newState: boolean) => {},
});

export const AuthContextProvider: React.FC<IComponentProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>(true);
  const [user, setUser] = useState<Object>({});
  const [accessToken, setAccessToken] = useState<string>('');

  return <AuthContext.Provider value={{ user, setUser, isAuth, setIsAuth, accessToken }}>{children}</AuthContext.Provider>;
};
