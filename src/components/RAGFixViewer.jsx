import { useDispatch, useSelector } from 'react-redux';
import './RAGFixViewer.scss';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { responsesUpdateRagfixResponse } from '../store/sliceResponses';
import { groundTruthReset, groundTruthSet } from '../store/sliceGroundTruth';
import SyncLoader from 'react-spinners/SyncLoader';
import { v4 as uuidv4 } from 'uuid';

function RAGFixViewer() {
  const [ activeButton, setActiveButton ] = useState('');
  
  const responses = useSelector(state => state.responses);
  const backend = useSelector(state => state.backend);
  const models = useSelector(state => state.models);
  const spinner = useSelector(state => state.spinner);

  const dispatch = useDispatch();

  const getRagFixResponse = async responseId => {
    const passages = responses.responses[responses.currentResponseIndex].source.source_info.passages.split("\n\n");
    passages.pop();

    const request = {
      url: backend + '/get-ragfix-response',
      method: 'post',
      data: {
        query: responses.responses[responses.currentResponseIndex].source.source_info.question,
        passages,
        responseId,
        model: models.curModel
      }
    }
    
    const response = await axios(request);

    dispatch(responsesUpdateRagfixResponse({responseId, ragfix: response.data}));

  }
  useEffect(() => {
    // if (responses.currentResponseIndex !== -1) {
    //   const test = responses.responses[responses.currentResponseIndex]?.ragfix;
    //   if (test) return;
    //   getRagFixResponse(responses.responses[responses.currentResponseIndex].id)
    // }
  })
  if (responses.currentResponseIndex === -1 ) return (<></>)
  const curResponse = responses.responses[responses.currentResponseIndex];
  
  return (
    <div className='RAGFixViewer'>
      {/* <div className="RAGFixViewer__correct">Correct</div> */}
      <h2 className='RAGFixViewer__title'>RAGFix</h2>
      {spinner && <SyncLoader className='RAGFixViewer__spinner' />}
      {!spinner && <div className="RAGFixViewer__ragfix-results-container">
        {curResponse.acurai_response}
       </div>
      }
    </div>
  )
}

export default RAGFixViewer