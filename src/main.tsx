import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

console.log('main.tsx: Initializing React app'); // Debug log

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('main.tsx: Root element not found');
  throw new Error('Root element not found');
}

const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);