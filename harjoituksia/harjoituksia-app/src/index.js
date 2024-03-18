import React from 'react'; // tätä ei pitäisi tarvita react versiossa 18 tai uudemmissa, mutta jostainsyyystä mulla tarvitsee
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// Alla muuttujana
const hedelmat = (
<ul>
  <li>Pomelo</li>
  <li>Satsuma</li>
  <li>Papaya</li>
  <li>Omenapäärynä</li>
  <li>kiwi</li>
  <li>Greippi</li>
</ul>
)
// Alla samaa funktiona
function Hedelmat() {
return ( /* Funktio pitää tietenkin palauttaa */
<div>
  <h4>Hedelmät funktiolla</h4>
  <ul>
    <li>Pomelo</li>
    <li>Satsuma</li>
    <li>Papaya</li>
    <li>Omenapäärynä</li>
    <li>kiwi</li>
    <li>Greippi</li>
  </ul>
</div> )
}
/* Nuolifunktiona tehtäisiin näin
const Hedelmat = () => {
  return (
    <div>
      <h4>Hedelmät nuolifunktiolla</h4>
      <ul>
        <li>Pomelo</li>
        <li>Satsuma</li>
        <li>Papaya</li>
        <li>Omenapäärynä</li>
        <li>Kiwi</li>
        <li>Greippi</li>
      </ul>
    </div>
  )
}
*/


/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <> {/* pitää olla div elementin sisällä tai <></> sisällä *///} 
 //     {/*<App />  Piti piilottaa tämä, koska muuten ei alla oleva teksti näkynyt. Johtuu varmaan tyyleistä*/}
 /*     <div>
        <h1>Heippa. Tämä teksti tulee index.js tiedostosta</h1>
        <h2> Opetellaan reactia</h2>
      </div>
      <div>
        <ul>
          <li>Omena</li>
          <li>Appellsiini</li>
          <li>Banaani</li>
          <li>Päärynä</li>
          <li>Mandariini</li>
          <li>Litsi</li>
        </ul>
        {/* Tämä ei ole kuitenkaan hyvä tapa tehdä. Kannattaa tehdä mielummin muuttuja jolla voidaan tuoda koko elementti. katso: const hedelmat ^ *///}
 /*     </div>
      <div>
        <h4>Hedelmät muuttujalla</h4>
        <ul>
          {hedelmat}{hedelmat} {/* Voi käyttää div elementin sisällä monesti *///}
 /*       </ul> {/*Jos on ul elementin tai ol elementin sisällä, lyö yhteen listat *///}
 /*       {/* Tällöin kuitenkin sisentää tuplana 
        johtuu siitä että muuttujassa hedelmat ovat jo <ul></ul> listan sisällä. *///}  
 /*     </div>
      <Hedelmat /> {/* Sitten sama funktiolla *///} 
      
 /*   </>
      
  // </React.StrictMode>
  // StrictMode ei ole pakollinen, mutta ei vain valita kaikista virheistä jos se ei ole käytössä.
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();
*/

const Valikko = () => {
  return (
<div>
  <ul>
    <li>Koti</li>
    <li>Meistä</li>
    <li>Ota yhteyttä</li>
  </ul>
</div>
  )
}

const Sisalto = () => {
  return (
<div>
  <h2>Sisältö</h2>
</div>
  )
}

const author = (
  <p>Arthur Harjama</p>
)
const year = (
  <p>2024</p>
)
const Footer = () => {
  return (
<table>
  <tr>
    <td>Copyright ®</td>
    <td>{author}</td>
    <td>{year}</td>
  </tr>
</table>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  <Valikko />
  <Sisalto />
  <Footer />
</>
)