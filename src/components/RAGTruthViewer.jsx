import { useDispatch, useSelector } from 'react-redux';
import './RAGTruthViewer.scss';
import React from 'react'
import { groundTruthSet } from '../store/sliceGroundTruth';

function RAGTruthViewer() {
  const responses = useSelector(state => state.responses);
  const dispatch = useDispatch();

  if (responses.currentResponseIndex === -1 ) return (<></>)
  
  const curResponse = responses.responses[responses.currentResponseIndex];
  let response = curResponse.response;

  const passages = curResponse.source.source_info.passages.split("\n\n");
  passages.pop();

  console.log('passages', passages )

  const handleClick = () => {
    dispatch(groundTruthSet({
      source: 'RAGTruth',
      index: 0,
      passages
    }))
  }

  return (
    <div className='RAGTruthViewer'>
      <h2 className='RAGTruthViewer__title'>RAGTruth 2.0</h2>
      <div className="RAGTruthViewer__prompt">{curResponse.source.source_info.question}</div>
      <div className="RAGTruthViewer__response">{response}</div>
      <div className="RAGTruthViewer__button" onClick={handleClick}>Ground Truth</div>
    </div>
  )
}

export default RAGTruthViewer