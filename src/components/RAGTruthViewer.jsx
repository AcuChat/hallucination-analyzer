import { useSelector } from 'react-redux';
import './RAGTruthViewer.scss';
import React from 'react'

function RAGTruthViewer() {
  const responses = useSelector(state => state.responses);
  if (responses.currentResponseIndex === -1 ) return (<></>)
  
  const curResponse = responses.responses[responses.currentResponseIndex];
  let response = curResponse.response;

  return (
    <div className='RAGTruthViewer'>
      <h2 className='RAGTruthViewer__title'>RAGTruth 2.0</h2>
      <div className="RAGTruthViewer__prompt">{curResponse.source.source_info.question}</div>
      <div className="RAGTruthViewer__response">{response}</div>
      <div className="RAGTruthViewer__button">Ground Truth</div>
    </div>
  )
}

export default RAGTruthViewer