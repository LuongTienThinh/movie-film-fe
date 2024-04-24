import axios from 'axios';
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';

import RouterPages from 'routes';
import { ThemeContextProvider } from 'contexts/themeContext';
import { AuthContextProvider } from 'contexts/authContext';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

const accessToken = localStorage.getItem('X-CSRF-TOKEN');
if (accessToken) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}


const Styling = lazy(() => import('./styling'));
const App = () => {
  return (
    <Suspense>
      <Styling>
        <AuthContextProvider>
          <ThemeContextProvider>
            <RouterPages />
          </ThemeContextProvider>
        </AuthContextProvider>
      </Styling>
    </Suspense>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
