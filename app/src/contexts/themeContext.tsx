import { IComponentProps, IThemeContext } from "interfaces";
import React, { useState } from "react"


export const ThemeContext = React.createContext<IThemeContext>({
  theme: 'light',
  toggleTheme: () => {}
});

export const ThemeContextProvider: React.FC<IComponentProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}