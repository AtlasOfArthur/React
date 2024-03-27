import kissa1 from "../images/whiskerson.png";
import kissa2 from "../images/fluffy.png";
import kissa3 from "../images/felix.png";
import kissa4 from "../images/pumpkin.png";
import Kisut from "../components/Kisut";
import Kissa from "../components/Kissa";
import "../src/mystyles/kisustyle.css"; // Jostainsyystä ei löytäny jos oli src kansiossa. Siksi piti tehdä omille tyyleille oma kansio

function App() {
  return (
    <>
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
    </>
  )
}

export default App
