import { useDispatch, useSelector } from 'react-redux';
import './RAGTruthViewer.scss';
import React, { useEffect } from 'react'
import { groundTruthSet, groundTruthSetErrors } from '../store/sliceGroundTruth';
import lodash from 'lodash';


function RAGTruthViewer() {
  const responses = useSelector(state => state.responses);
 
 
  const dispatch = useDispatch();

  if (responses.currentResponseIndex === -1 ) return (<></>)
  
  const curResponse = responses.responses[responses.currentResponseIndex];
  console.log('response', curResponse);

  return (
    <div className='RAGTruthViewer'>
     
      {/* <div className="RAGTruthViewer__error">Error</div> */}
      <h2 className='RAGTruthViewer__title'>RAGTruth</h2>
      {/* <div className="RAGTruthViewer__prompt">{curResponse.query}</div> */}
      <div className="RAGTruthViewer__response" dangerouslySetInnerHTML={{__html: curResponse.response.replaceAll("\n", "<br />")}}>
      </div>
      
    </div>
  )
}

export default RAGTruthViewer