import { useDispatch, useSelector } from 'react-redux';
import './GroundTruthViewer.scss';
import React from 'react'
import Error from './Error';
import { groundTruthSet } from '../store/sliceGroundTruth';

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

  console.log('curResponse', curResponse)
  if (groundTruth.index === -1) return (
    <div className='GroundTruthViewer'>
        <div className={groundTruth.source === 'RAGTruth' ? "RAGTruthViewer__button RAGTruthViewer__button--active" : "RAGTruthViewer__button"} onClick={handleClick}>Ground Truth</div>
      {curResponse?.labels.map((label, index) => {
        console.log('label', label)
        return <>
      
        <Error  key={curResponse.id + index} meta={label.meta} responseId={curResponse.id} index={index} />
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
          console.log('groundTruth Errors', groundTruth.errors)
          for (let i = 0; i < groundTruth.errors.length; ++i) {
            console.log('original', groundTruth.errors[i].original)
            // passage = passage.replace(groundTruth.errors[i].original, `<span style="background-color: rgba(0, 105, 255, 0.3);">${groundTruth.errors[i].original}</span>`)
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