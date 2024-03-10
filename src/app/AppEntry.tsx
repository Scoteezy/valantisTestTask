import React from 'react';

import { ReactToast } from '@/shared';
import ReactDOM from 'react-dom/client';

import BaseLayout from './layouts/BaseLayout';
import ThemeProvider from './providers/ThemeProvider';

import './index.css';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BaseLayout />
      <ReactToast/>
    </ThemeProvider>
   
  </React.StrictMode>,
);
