import axios from 'axios';
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import RouterPages from 'routes';
import { ThemeContextProvider } from 'contexts/themeContext';

axios.defaults.baseURL = 'enter api link here';

const Styling = lazy(() => import('./styling'));
const App = () => {
  return (
    <Suspense>
      <Styling>
        <ThemeContextProvider>
          <RouterPages />
        </ThemeContextProvider>
      </Styling>
    </Suspense>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);