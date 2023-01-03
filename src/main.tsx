/**
 * App entry point, load css & render App component on root
 */
import './reset.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@src/components/App';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCY89rO35RZsL6duPffKybBBvdvRT4L8Js',
  authDomain: 'domain-for-sale-landing.firebaseapp.com',
  projectId: 'domain-for-sale-landing',
  storageBucket: 'domain-for-sale-landing.appspot.com',
  messagingSenderId: '112164197198',
  appId: '1:112164197198:web:6607e8946d6cce79b4841f',
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
