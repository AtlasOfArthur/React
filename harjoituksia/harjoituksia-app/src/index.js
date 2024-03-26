import React from 'react';
import ReactDOM from 'react-dom/client';

// Olevinaan eri sivuja. Ei toimi viellä erillisinä sivuina.
import Koti from './koti';
import Tietoareactista from './tietoareactista';
import Kisut from './components/Kisut';
import Kissa from "./components/Kissa";

// Toimii vaan importtaamalla !!
import kissa1 from  "./images/whiskerson.png";
import kissa2 from  "./images/fluffy.png";
import kissa3 from  "./images/felix.png";
import kissa4 from  "./images/pumpkin.png";



//const Sekamelska = React.lazy(() => import('./sekamelska'));
//import OtaYhteytta from './OtaYhteytta';
//import Sisalto from './Sisalto';

const App = () => {
  return (
<div>
      <nav>
        <a >Koti</a> {/* href atribuutti antaa virheen ja vetää jumiin joten poistin*/}
        <a >Sekamelska</a>
      </nav>
        <Koti />
        <Tietoareactista />
        {/* <Sekamelska />*/}

        <div className='contacts'>
          <Kisut /> 
          <Kissa
          img={kissa1} // Toimii vaan jos importtaa
          name="Mr. Whiskerson(props)"
          phone="(212) 555-1234"
          email="mr.whiskers@catnip.meow"
          />
          <Kissa
          img={kissa2}
          name="Fluffy(props)"
          phone="(212) 555-2234"
          email="mr.fluffypuf@meowland.purr"
          />
          <Kissa
          img={kissa3}
          name="Felix(props)"
          phone="(212) 555-3334"
          email="felix@napnep.cat"
          />
          <Kissa
          img={kissa4}
          name="Pumpkin(props)"
          phone="(212) 555-4444"
          email="pompkeens@netcat.meow"
          />
        </div>

    </div>
  )
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
