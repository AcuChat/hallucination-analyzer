import { useSelector } from 'react-redux';
import './LabelsSelector.scss';
import React from 'react'
import Label from './Label';

function LabelsSelector() {
  const labels = useSelector(state => state.labels.labels);
  return (
    <div className='LabelsSelector'>
      {labels?.map(label => {
        const { id, name, selected, color } = label;
        return (
          <Label key={id} id={id} name={name} selected={selected} color={color}/>
        )
      })}
    </div>
  )
}

export default LabelsSelector