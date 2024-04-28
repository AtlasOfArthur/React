import React from "react";
// Nuolifunktioissa, ei käytetä 'default' exportattaessa
export const Laskin = () => {

    const [laskuri, setLaskuri] = React.useState(0);

    function plus() {
        setLaskuri(prevLaskuri => prevLaskuri + 1); // laskuri + 1
    }

    function minus() {
            setLaskuri(prevLaskuri => prevLaskuri - 1); // laskuri - 1
    }

    return (
        <div className="counter">
            <button className="counter--minus countbutton" onClick={minus}>-</button>
            <div className="counter--count">
                <h1>{laskuri}</h1>
            </div>
            <button className="counter--plus countbutton" onClick={plus}>+</button>
        </div>
    );
}

// export default Laskin // Ei tarvita, koska on exportattu alussa


