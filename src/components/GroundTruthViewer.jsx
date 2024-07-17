import { useDispatch, useSelector } from 'react-redux';
import './GroundTruthViewer.scss';
import React from 'react'
import Error from './Error';
import { groundTruthSet } from '../store/sliceGroundTruth';
import { v4 as uuidv4 } from 'uuid';

function GroundTruthViewer() {
  const responses = useSelector(state => state.responses);
  const groundTruth = useSelector(state => state.groundTruth);
  const dispatch = useDispatch();


  if (responses.currentResponseIndex === -1) return (<></>);


  const curResponse = responses.responses[responses.currentResponseIndex];
  const passages = curResponse.source.source_info.passages.split("\n\n");
  const handleClick = () => {
    dispatch(groundTruthSet({
      source: 'RAGTruth',
      index: 0,
      passages
    }))
  }


  if (groundTruth.index === -1) return (
    <div className='GroundTruthViewer'>
        <div className={groundTruth.source === 'RAGTruth' ? "RAGTruthViewer__button RAGTruthViewer__button--active" : "RAGTruthViewer__button"} onClick={handleClick}>Ground Truth</div>
      {curResponse?.labels.map((label, index) => {
        return <>
      
        <Error  key={curResponse.id + index + uuidv4()} meta={label.meta} responseId={curResponse.id} index={index} />
        </>
      })}
    </div>    
  )
  
  return (
    <div className='GroundTruthViewer'>
       <div className={groundTruth.source === 'RAGTruth' ? "RAGTruthViewer__button RAGTruthViewer__button--active" : "RAGTruthViewer__button"} onClick={handleClick}>Ground Truth</div>
      <h1 className='GroundTruthViewer__title'>Ground Truth</h1>
      <div className="GroundTruthViewer__passages">
        {groundTruth.passages.map((passage, index) => {
          if (groundTruth.source === 'RAGFix') passage = `Context ${index+1}: ` + passage;
          const key = groundTruth.source + groundTruth.index + index;
          for (let i = 0; i < groundTruth.errors.length; ++i) {
            // passage = passage.replace(groundTruth.errors[i].original, `<span style="background-color: rgba(0, 105, 255, 0.3);">${groundTruth.errors[i].original}</span>`)
          }
          return (
            <div className="GroundTruthViewer__passage" key={key + uuidv4() } dangerouslySetInnerHTML={{__html: passage}}></div>
          )
        })}
      </div>
    </div>
  )
}

export default GroundTruthViewer