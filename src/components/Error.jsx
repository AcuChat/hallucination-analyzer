import './Error.scss';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function Error({meta}) {
    console.log('meta', JSON.parse(meta))
    const info = JSON.parse(meta);
    const messages = [];
    info.forEach(i => {
        const message = i?.meta;
        if (message) messages.push(i.meta.replaceAll("\n", "<br />"));
    })
    return (
        <div className='Error' dangerouslySetInnerHTML={{__html: messages.join("<br /><br />")}}>
            
        </div>
    )
 
}

export default Error