import React from "react";
import CardEX4 from "./KorttiEX4";

const Profiili = ({ 
    profiiliTekstiEX4, korttiTekstiEX4,
    painikeTekstiEX4, kasittelePainallusEX4 }) => {
    return (
        <>
            <h1>{profiiliTekstiEX4}</h1>

            <CardEX4 /* Lähettää nämä eteenpäin kortille */
                korttiTekstiEX4={korttiTekstiEX4}
                painikeTekstiEX4={painikeTekstiEX4}
                kasittelePainallusEX4={kasittelePainallusEX4}
            />
        </>
    );
};

export default Profiili;