import React from 'react';
import ReactDOM from 'react-dom/client';
import Section1 from "../EX1/src/Section1";
import Section2 from '../EX2/Section2';
import Section3 from '../EX3/Section3';
import './index.css'


// Tuo Section1.jsx main.jsx:ään ja vaihda <App />:n tilalle <Section />
ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>    
      <Section1 />
      <Section2 />
      <Section3 />

  </React.StrictMode>,
)
