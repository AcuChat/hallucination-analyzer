import { useDispatch, useSelector } from 'react-redux';
import './RAGTruthViewer.scss';
import React, { useEffect } from 'react'
import { groundTruthSet, groundTruthSetErrors } from '../store/sliceGroundTruth';
import lodash from 'lodash';


function RAGTruthViewer() {
  const responses = useSelector(state => state.responses);
  const models = useSelector(state => state.models);
 
  const dispatch = useDispatch();

  if (responses.currentResponseIndex === -1 ) return (<></>)
  
  const curResponse = responses.responses[responses.currentResponseIndex];
  console.log('response', curResponse);

  function capitalizeFirstLetter(str) {
    if (typeof str !== 'string' || str.length === 0) {
      return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className='RAGTruthViewer'>
     
      {/* <div className="RAGTruthViewer__error">Error</div> */}
      <h2 className='RAGTruthViewer__title'>{models.curModel.replace("gpt", "GPT").replace("turbo", "Turbo")}</h2>
      {/* <div className="RAGTruthViewer__prompt">{curResponse.query}</div> */}
      <div className="RAGTruthViewer__response" dangerouslySetInnerHTML={{__html: curResponse.response.replaceAll("\n", "<br />")}}>
      </div>
      
    </div>
  )
}

export default RAGTruthViewer