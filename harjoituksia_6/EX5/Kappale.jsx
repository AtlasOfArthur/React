import React from "react";

const KappaleEX5 = ({teksti, children}) => {
    return(
        <div>
            {children}
            <p>{teksti}</p> 
        </div>
    );
};

export default KappaleEX5;