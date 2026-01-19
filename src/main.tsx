import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import App from './App';
import '@mantine/core/styles.css'; // This fixes the layout!

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="light" theme={{ primaryColor: 'orange' }}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);