// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' // Tää pitää ilmeisesti ottaa pois käytöstä myöhemmin ettei tuu ristiriitasuuksia
import "bootstrap/dist/css/bootstrap.min.css"; // dark theme >> index.html in (<body>)
import ShapeExample from './components/ShapeExample';
import ReactViteBootstrap from './components/ReactViteBootstrapStart';

// import Rvb from './components/Rvb'; // Yritin tämän kanssa ja ilmankin
// <Rvb /> ei jostainsyystä toiminut ("is not defined")
// Rvb on kai jotenkin rikki. Korvattu ReactViteBootstrap kompopnentilla, nyt löytää
function App() {

  return (
    <>
      <ReactViteBootstrap /> {/*Ei toimi !?*/}
      <ShapeExample /> {/*Toimii*/}
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

      </div>
      <h1>ReactVite + Bootstrap</h1>



    </>
  )
}

export default App
