import React from 'react';
import ReactDOM from 'react-dom/client';

// Olevinaan eri sivuja. Ei toimi viellä erillisinä sivuina.
import Koti from './koti';
import Tietoareactista from './tietoareactista';
import Kisut from './components/Kisut';
import Kissa from "./components/Kissa";



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
          img="../images/whiskerson.png"
          name="Mr. Whiskerson(props)"
          phone="(212) 555-1234"
          email="mr.whiskers@catnip.meow"
          />
                    <Kissa
          img="../images/fluffy.png"
          name="Fluffy(props)"
          phone="(212) 555-2234"
          email="mr.fluffypuf@meowland.purr"
          />
                    <Kissa
          img="../images/felix.png"
          name="Felix(props)"
          phone="(212) 555-3334"
          email="felix@napnep.cat"
          />
                    <Kissa
          img="../images/whiskerson.png"
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
