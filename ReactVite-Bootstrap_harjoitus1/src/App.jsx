// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' // Tää pitää ilmeisesti ottaa pois käytöstä myöhemmin ettei tuu ristiriitasuuksia
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css" // nyt on haettu oikein

import BootstrapBtnComp from './components/BootstrapbtnComponent'
import ShapeExample from './components/ShapeExample';


function App() {

  return (
    <>
    

    
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

      </div>
      <h1>ReactVite + Bootstrap</h1>
      <div>
        {/* Testing if Bootstrap works (Yellow button) */}
        <button className="btn btn-warning p-3 m-5">BootstrapButton</button>

        {/* Testing if Bootstrap works from component (Lightblue button) */}
        <BootstrapBtnComp/>
      </div>

      <ShapeExample /> {/*Toimii, mut ei kunnolle, kun ei oo kuvia... kait*/} 
    </>
  )
}

export default App
