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
      <ul style={{
        listStyleType: 'none',
        margin: 0,
        padding: 0,
      }}>
        <li style={{
          float: 'left',
          padding: '8px',
          backgroundColor: '#aa11dd',
          margin: '2px',
          borderRadius: '4px',
          border: '2px solid red',
        }}>Koti</li>
        <li style={{
          float: 'left',
          padding: '8px',
          backgroundColor: '#ddaa11',
          margin: '3px',
          borderRadius: '4px',
          border: '3px solid red',
        }}>Meistä</li>
        <li style={{
          float: 'left',
          padding: '8px',
          backgroundColor: '#11aa11',
          margin: '2px',
          borderRadius: '4px',
          border: '4px solid red',
        }}>Ota yhteyttä</li>
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

const Kartta = () => {
  return (
    <iframe 
      style={{ border: "5px solid red", borderRadius: "500px"  }} 
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d62508.33461855282!2d-12.301265988013368!3d-37.11082045727994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sfi!2sfi!4v1710869247425!5m2!1sfi!2sfi"
      width="600" 
      height="600"  
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  )
}

const Ympyra = () => {
  return (
    <svg width="300" height="100">
      <circle cx="50" cy="50" r="40" fill="red" />
      <text x="180" y="50" fill="black" dominantBaseline="middle" textAnchor="middle" fontSize="36" fontWeight="bold" fontFamily="Arial, sans-serif">Olet tässä</text>
    </svg>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  <div style={{ display: 'flex', flexDirection: 'column'}} >
    <Valikko />
  </div>
  <div>
    <Sisalto />
  </div>
  <div>
    <Kartta />
  </div>
  <div>
    <Ympyra />
  </div>

  <Footer />
</>
)




