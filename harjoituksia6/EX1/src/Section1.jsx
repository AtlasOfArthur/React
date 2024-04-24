import React from "react";
import Kappale from "./Kappale";
import Otsikko from "./Otsikko";

const Section = () => {
   return (
        <div>
            <Otsikko />
            <Kappale teksti="Kappale ~kprop (tämä on ensimäisen tehtävän teksti)"/>
        </div>
    );
};

export default Section;