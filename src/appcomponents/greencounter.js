import React from 'react';

/*
    Counter Arguments
        {Value} -- value to be inside inside counter  (INT)
        {Size}  -- size of counter button (sm,lg)
        ////refer css counter-button-sm / counter-button-lg
*/

export default function GreenCounter({Value,Size}){
    return(
       <React.Fragment>
            <div className={`d-flex justify-content-center align-items-center  counter-button-green counter-button-${Size}`}>
                <span>{Value}</span>
            </div>
       </React.Fragment>
    )
}