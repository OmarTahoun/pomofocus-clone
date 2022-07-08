import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Timer} from './components/timer';




// ===============================================================
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Timer mins={1} secs={0}/>
);
