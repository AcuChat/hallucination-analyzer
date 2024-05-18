import { useDispatch } from 'react-redux';
import './Label.scss';
import React, { useEffect, useRef } from 'react'
import { labelsSetLabel } from '../store/sliceLabels';
import { FaDroplet } from "react-icons/fa6";


function Label({id, name, selected, color}) {
   const dispatch = useDispatch();
  return (
    <div className='Label'>
        <input checked={selected}
            onChange={(e) => dispatch(labelsSetLabel({id, selected: !selected}))}
            type="checkbox" 
            className="Label__checkbox" 
        />
        <div className="Label__name">{name}</div>
        { color && <FaDroplet color={color}/>}
    </div>
  )
}

export default Label