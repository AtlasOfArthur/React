import Vitsit from "../src/Components/Vitsit";
import vitsitData from "../src/vitsitData";
import "../src/styles/vitsistyle.css";


function App() {
  const vitsitElement = vitsitData.map(Vitsi => {
    return <Vitsit kysymys = {Vitsi.kysymys} vastaus ={Vitsi.vastaus} />
  })

  return (
    <>
      {vitsitElement}
    </>
  );
}

export default App;
