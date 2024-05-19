import { useSelector } from 'react-redux';
import './GroundTruthViewer.scss';
import React from 'react'

function GroundTruthViewer() {
  const responses = useSelector(state => state.responses);
  if (responses.currentResponseIndex === -1 ) return (<></>)
  
  return (
    <div className='GroundTruthViewer'>GroundTruthViewer</div>
  )
}

export default GroundTruthViewer