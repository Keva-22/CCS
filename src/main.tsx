import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Schriften werden lokal mitgeliefert (keine Verbindung zu Google Fonts)
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-600.css';
import '@fontsource/barlow-condensed/latin-600.css';
import '@fontsource/barlow-condensed/latin-700.css';
import './global.css';

import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
