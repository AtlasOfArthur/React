import React from "react";
import Button from "../EX4/ButtonEX4";

const CardEX4 = ({ korttiTekstiEX4, painikeTekstiEX4, kasittelePainallusEX4 }) => {
    return (
        <>
            <h2>{korttiTekstiEX4}</h2>
            <Button
                kasittelePainallusEX4={kasittelePainallusEX4}
                painikeTekstiEX4={painikeTekstiEX4} 
            />
        </>
    )
}

export default CardEX4;