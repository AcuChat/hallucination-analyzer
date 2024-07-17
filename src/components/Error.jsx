import './Error.scss';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function Error({meta}) {
    return (
        <div className='Error'>
            {JSON.stringify(meta, null, 4)}
        </div>
    )
 
}

export default Error