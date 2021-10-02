import React from "react";

export default function Btn ({label, onClick}) {
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    return(
        <button className={`buttons-calculator ${label === '.' || label in num ? '' : '-orange'}`} onClick={onClick}>{label}</button>
    );
}