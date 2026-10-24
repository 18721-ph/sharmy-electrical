import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CanonicalUrl } from './components/Seo';
import './styles.css';
import './visuals.css';
import './navigation.css';
import './mobile.css';
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><BrowserRouter><CanonicalUrl/><App /></BrowserRouter></React.StrictMode>);

import './refinements.css';
