import React from 'react'; 
import "./styles/ReactCSS.css"
import Reacticon from "./images/logo192.png"
import Alatunniste from "./alatunniste"

const Valikko = () => {
    return (
      <div>
        <ul>
          <img src={Reacticon} className='logo'/>
          <li >Koti</li>
          <li>Meistä</li>
          <li>Ota yhteyttä</li>
        </ul>
      </div>
    )
  }
  
  const Sisalto = () => {
    return (
  <div>
      <h2>Tietoa Reactista</h2>
        <ul>
          <li>Julkaistiin vuonna 2013</li>
          <li>Alunperin Jordan Walkerin luomus</li>
          <li>Reactilla on jo yli 100K tähteä GitHubissa</li>
          <li>On Facebookin ylläpitämä</li>
          <li>Toimii moottorina tuhansille ohjelmille, myös mobiilisoftille</li>
        </ul>  
  </div>
    )
  }
  

const Tietoareactista = () => (
<>
    <div>
      <Valikko />
    </div>
    <div>
      <Sisalto />
    </div>
    <div>
      <Alatunniste />
    </div>
</>
)

export default Tietoareactista;

