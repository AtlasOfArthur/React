import './styles/cardstyle.css';
import Humans from "./components/human";
import data from "./components/Data";

function App() {
  const ihmiskortit = data.map((human) => {
    return (
      <Humans
      name={human.name}
      email={human.email}
      address={human.address}
      phone={human.phone}
      website={human.website}
      />
    );
  });
  return <div className='kortit'>{ihmiskortit}</div>
}

export default App
