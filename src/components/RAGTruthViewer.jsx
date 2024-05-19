import { useSelector } from 'react-redux';
import './RAGTruthViewer.scss';
import React from 'react'

function RAGTruthViewer() {
  const responses = useSelector(state => state.responses);
  if (responses.currentResponseIndex === -1 ) return (<></>)
  
  return (
    <div className='RAGTruthViewer'>RAGTruthViewer</div>
  )
}

export default RAGTruthViewer