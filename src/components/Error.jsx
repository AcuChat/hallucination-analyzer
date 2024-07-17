import './Error.scss';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function Error({meta, responseId, index}) {
    const lines = meta.split("\n");
    const title = lines[0];
    lines.shift();
  return (
    <div className='Error'>
        <div className="Error__title">{title}</div>
        <div className="Error__table">
            {lines.map(line => {
                const loc = line.indexOf(":");
                console.log("Error.jsx 01 IN")
                const heading = line.substring(0, loc);
                const value = line.substring(loc + 1);
                console.log("Error.jsx 01 OUT")
                return (<div className='Error__row' key={responseId + index + uuidv4()}>
                    <div className="Error__heading">{heading}</div>
                    <div className="Error__value">{value}</div>
                </div>)
            })}
        </div>
    </div>
  )
}

export default Error