import axios from 'axios';
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';

axios.defaults.baseURL = 'enter api link here';

const Styling = lazy(() => import('./styling'));
function App() {
  return (
    <Suspense>
      <Styling>
        <div>hello world i'm reactjs</div>
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