import { useSelector } from 'react-redux';
import './RAGTruthViewer.scss';
import React from 'react'

function RAGTruthViewer() {
  const responses = useSelector(state => state.responses);
  console.log('responses', responses);
  console.log('responses.currentResponseIndex', responses.currentResponseIndex)
  if (responses.currentResponseIndex === -1 ) return (<></>)
  return (
    <div className='RAGTruthViewer'>RAGTruthViewer</div>
  )
}

export default RAGTruthViewer