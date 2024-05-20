import './Error.scss';
import React from 'react'

function Error({meta, responseId, index}) {
    const lines = meta.split("\n");
    console.log('lines', lines)
    const title = lines[0];
    lines.shift();
  return (
    <div className='Error'>
        <div className="Error__title">{title}</div>
        <div className="Error__table">
            {lines.map(line => {
                const loc = line.indexOf(":");
                const heading = line.substring(0, loc);
                const value = line.substring(loc + 1);
                return (<div className='Error__row' key={responseId + index}>
                    <div className="Error__heading">{heading}</div>
                    <div className="Error__value">{value}</div>
                </div>)
            })}
        </div>
    </div>
  )
}

export default Error