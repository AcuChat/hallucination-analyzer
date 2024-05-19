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
        {groundTruth.passages.map((passage, index) => {
          const key = groundTruth.source + groundTruth.index + index;
          console.log('groundTruth Errors', groundTruth.errors)
          for (let i = 0; i < groundTruth.errors.length; ++i) {
            console.log('original', groundTruth.errors[i].original)
            passage = passage.replace(groundTruth.errors[i].original, `<span style="background-color: rgba(0, 105, 255, 0.3);">${groundTruth.errors[i].original}</span>`)
          }
          return (
            <div className="GroundTruthViewer__passage" key={key} dangerouslySetInnerHTML={{__html: passage}}></div>
          )
        })}
      </div>
    </div>
  )
}

export default GroundTruthViewer