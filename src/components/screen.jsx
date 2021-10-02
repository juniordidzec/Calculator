import React from "react";

export default function Tela({valor, res}) {
    return(
        <div className='main-display'>
            <p className='display-value'>{valor}</p>
            <p className='display-result'>{res}</p>
        </div>
    );
}