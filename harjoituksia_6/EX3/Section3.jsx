import React from "react";
import Otsikko3 from "./Otsikko3";
import Button from "./Button";



const Section3 = () => {
    const kasittelePainallus = () => {
        console.log("Boo");  
    };

   return (
        <div>
            <Otsikko3 />
            <Button kasittelePainallus={kasittelePainallus}/>
        </div>
    );
};

export default Section3;