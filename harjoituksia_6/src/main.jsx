import React from 'react';
import ReactDOM from 'react-dom/client';
import Section1 from "../EX1/src/Section1";
import Section2 from '../EX2/Section2';
import Section3 from '../EX3/Section3';
import Profile_EX4 from '../EX4/ProfileEX4';
import './index.css';
import KappaleEX5 from '../EX5/Kappale';

const BooFromMain = () => {
  console.log("BOO from main.jsx !!!");
}

// Tuo Section1.jsx ym. main.jsx:ään ja vaihda <App />:n tilalle <Section /> ..ym, ym..
ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>    
      <Section1 />
      <Section2 />
      <Section3 />
      <Profile_EX4
        profiiliTekstiEX4={"Section4 Profiili"}
        korttiTekstiEX4={"Kortti teksti"}
        painikeTekstiEX4={"Painike teksti"}
        kasittelePainallusEX4={BooFromMain} 
      />
      <KappaleEX5 teksti="Hello bell'o, mitä kell'o ?">
        <h1>Section5 Kappale</h1>
        <h2>Regards form Main.jsx</h2>
      </KappaleEX5>
      
      
  </React.StrictMode>,
);
