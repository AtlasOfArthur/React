import React from 'react'; 
import styles from "./styles/ReactCSS.css"
import Reacticon from "./reacticon"
import Alatunniste from "./alatunniste"

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
    <Reacticon /> <Valikko />
    </div>
    <div>
    <Sisalto />
    </div>
    <Alatunniste />
</>
)

export default Tietoareactista;