import { useSelector } from 'react-redux';
import './RAGFixViewer.scss';
import React from 'react'

function RAGFixViewer() {
  const responses = useSelector(state => state.responses);
  if (responses.currentResponseIndex === -1 ) return (<></>)
  
  return (
    <div className='RAGFixViewer'>RAGFixViewer</div>
  )
}

export default RAGFixViewer