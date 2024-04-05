import React, { useState } from 'react';

import { IAuthContext, IComponentProps } from 'interfaces';

export const AuthContext = React.createContext<IAuthContext>({
  user: {},
  isAuth: false,
  setIsAuth: (newState: boolean) => {},
});

export const AuthContextProvider: React.FC<IComponentProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [user, setUser] = useState<Object>({});

  return <AuthContext.Provider value={{ user, isAuth, setIsAuth }}>{children}</AuthContext.Provider>;
};
