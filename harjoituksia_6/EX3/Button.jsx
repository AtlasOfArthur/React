import React from "react";
import ButtonTxt from "./ButtonTxt"

const Button = (bprop) => {
    return (
        <>
            <button onClick={bprop.kasittelePainallus}>{ButtonTxt.btext}</button>
        </>
    );
};

export default Button;