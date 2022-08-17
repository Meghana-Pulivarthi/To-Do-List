import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');

import App from './App.js';
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(<App/>);