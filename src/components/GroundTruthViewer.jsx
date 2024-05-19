import { useSelector } from 'react-redux';
import './GroundTruthViewer.scss';
import React from 'react'

function GroundTruthViewer() {
  const responses = useSelector(state => state.responses);
  const groundTruth = useSelector(state => state.groundTruth);

  if (responses.currentResponseIndex === -1 || groundTruth.index === -1) return (<></>)
  
  return (
    <div className='GroundTruthViewer'>
      <h1 className='GroundTruthViewer__title'>Ground Truth</h1>
      <div className="GroundTruthViewer__passages">
        {groundTruth.passages.map(passage => {
          const key = groundTruth.source + groundTruth.index;
          return (
            <div className="GroundTruthViewer__passage" key={key}>{passage}</div>
          )
        })}
      </div>
    </div>
  )
}

export default GroundTruthViewer