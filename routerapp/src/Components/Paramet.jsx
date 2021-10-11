import React from 'react';
import { useParams } from 'react-router-dom';

const Paramet = () => { 
    let {Param} = useParams();
    return (
        <div>
            routeeeeeeeeeeeee 
           {Param} 
        </div>
    )
}

export default Paramet;
